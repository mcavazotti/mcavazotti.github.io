import Ajv from "ajv";
import fm from "front-matter";
import * as fs from "fs/promises";
import projectSchema from "./src/assets/schemas/project-schema.json" assert {type: 'json'};
import articleSchema from "./src/assets/schemas/article-schema.json" assert {type: 'json'};

async function* getFiles(dir) {
    const dirEntries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of dirEntries) {
        const completePath = dir + '/' + entry.name;
        if (entry.isDirectory())
            yield* getFiles(completePath);
        else
            yield completePath;
    }
}

; (async () => {
    const ajv = new Ajv();
    const projectValidator = ajv.compile(projectSchema);
    const articleValidator = ajv.compile(articleSchema);

    const projects = [];
    const articles = [];
    const relatedArticles = new Map();

    for await (const f of getFiles('src/content/articles')) {
        const file = await fs.readFile(f, 'utf8');
        const metaData = fm(file).attributes;
        if (!articleValidator(metaData)) {
            throw Error(`${f} does not contain required meta data.`)
        }
        for (const project of metaData.relatedProjects) {
            if (relatedArticles.has(project)) {
                relatedArticles.get(project).push({ title: metaData.title, date: metaData.date });
            } else {
                relatedArticles.set(project, [{id: metaData.id ,title: metaData.title, date: metaData.date }]);
            }
        }
        const assetPath = f.substring(4)

        articles.push({ path: assetPath, ...metaData });
    }

    for await (const f of getFiles('src/content/projects')) {
        const file = await fs.readFile(f, 'utf8');
        const metaData = fm(file).attributes;
        if (!projectValidator(metaData)) {
            throw Error(`${f} does not contain required meta data.`)
        }

        const assetPath = f.substring(4)
        let relArticles = relatedArticles.get(metaData.id);
        if(!relArticles) {
            relArticles = []
        }
        projects.push({ path: assetPath, relatedArticles: relArticles, ...metaData });
    }


    fs.writeFile("src/app/article-list.gen.ts", `export const ARTICLE_LIST= ${JSON.stringify(articles, null, 4)};`);
    fs.writeFile("src/app/project-list.gen.ts", `export const PROJECT_LIST= ${JSON.stringify(projects, null, 4)};`);
    console.log(projects);
    console.log(articles);

})()
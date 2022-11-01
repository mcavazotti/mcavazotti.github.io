const fs = require('fs');
const nodeHtmlToImage = require('node-html-to-image');


const paths = JSON.parse(fs.readFileSync('src/assets/scully-routes.json'));

const html = fs.readFileSync('script/cover-template.html').toString();

for (const path of paths) {
    if (path.published && path.title) {
        let filename = 'src/assets/covers/generated/' + path.route.split('/').pop() + '.png';

        let title = path.title;
        let caption;

        let splitTitle = title.split(/[:-]/);
        if (splitTitle.length == 2) {
            title = splitTitle[0].trim();
            caption = splitTitle[1].trim();
        } else if(title.length > 50) {
            title = path.shortTitle;
        }

        nodeHtmlToImage({
            output: filename,
            html: caption? html : html.replace(/<h2>.*<\/h2>/,''),
            content: {
                title: title,
                caption: caption,
            }
        })
    }
}


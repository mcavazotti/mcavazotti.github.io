interface IArticleData {
    path:string;
    id: string;
    title: string;
    date: string;
    coverImage?: string;
    tags: string[];
    relatedProjects: string[];
}

interface IProjectData {
    path:string;
    id: string;
    title: string;
    description?: string;
    startYear: number;
    endYear?: number;
    coverImage?: string;
    projectLink?: string;
    relatedArticles:string[];
    tags: string[];

}

export { IArticleData, IProjectData };
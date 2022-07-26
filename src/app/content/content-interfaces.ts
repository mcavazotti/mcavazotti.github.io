interface IArticleData {
    id: string;
    title: string;
    date: string;
    coverImage?: string;
    tags: string[];
    relatedProjects: string[];
}

interface IProjectData {
    id: string;
    title: string;
    description?: string;
    startYear: number;
    endYear?: number;
    coverImage?: string;
    projectLink?: string;
    tags: string[];

}

export { IArticleData, IProjectData };
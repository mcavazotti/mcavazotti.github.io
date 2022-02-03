export interface Project {
    id: string,
    translationFile?: string,
    link?: {
        url: string,
        site: string
    },
    image?: string,
    year?: number
}
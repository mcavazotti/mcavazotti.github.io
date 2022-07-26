import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ARTICLE_LIST } from './article-list.gen';
import { IArticleData, IProjectData } from './content-interfaces';
import { PROJECT_LIST } from './project-list.gen';
import fm from "front-matter"

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private articles: Map<string, IArticleData>;
  private projects: Map<string, IProjectData>;

  constructor(private http: HttpClient) {
    this.articles = new Map<string, IArticleData>(ARTICLE_LIST.map((article) => [article.id, article]));
    this.projects = new Map<string, IProjectData>(PROJECT_LIST.map((project) => [project.id, project]));
  }

  getProjects(): IProjectData[] {
    return [...this.projects.values()];
  }

  getProject(id: string): IProjectData | undefined {
    return this.projects.get(id);
  }

  getArticles(): IArticleData[] {
    return [...this.articles.values()];
  }

  getArticle(id: string): IArticleData | undefined {
    return this.articles.get(id);
  }

  getRelatedArticles(projectId: string): IArticleData[] {
    return Array.from(this.articles.values()).filter((article) => article.relatedProjects.includes(projectId));
  }

  getRelatedProjects(articleId: string): IProjectData[] {
    let relatedProjects = this.articles.get(articleId)!.relatedProjects;
    return Array.from(this.projects.values()).filter((project) => relatedProjects.includes(project.id));
  }

  getMarkdown(path: string) {
    return this.http.get(path, { responseType: "text" }).pipe(
      map(data => {
        console.log(fm(data).body);
        return fm(data).body;
      }));
  }
}

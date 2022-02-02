import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../definitions/project.inteface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [];
  projectsObservable: Observable<Project[]>;

  constructor(private http: HttpClient) {

    this.projectsObservable = http.get<Project[]>("assets/projects.json");
    this.projectsObservable.subscribe((data) => {this.projects = data});
  }

  getProjects(): readonly Project[] {
    return this.projects;
  }

  getProject(id: string): Project | null {
    var project = this.projects.find(p => p.id == id);
    if (project)
      return { ...project };
    else
      return null
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProjectData } from 'src/app/content/content-interfaces';
import { ContentService } from 'src/app/content/content.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  projects: IProjectData[];
  filteredProjects: IProjectData[];
  tags: string[];

  constructor(private router: Router, private contentService: ContentService) {

    this.projects = contentService.getProjects();
    this.filteredProjects = [...this.projects];
    this.tags = Array.from(new Set(this.projects.map((p) => p.tags.map((t) => t.toLowerCase())).reduce((prev, current) => [...prev, ...current])));
  }

  ngOnInit(): void {
  }

  navigate(id: string) {
    this.router.navigate(["projects", id]);
  }

  filterProjects(activeTags: string[]) {
    this.filteredProjects = this.projects.filter((p) => {
      for (const t of p.tags) {
        if (activeTags.includes(t)) {
          return true;
        }
      }
      return false;
    });
  }
}

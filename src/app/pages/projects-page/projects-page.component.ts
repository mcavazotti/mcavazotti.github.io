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

  constructor(private router: Router, private contentService: ContentService) {

    this.projects = contentService.getProjects();
   }

  ngOnInit(): void {
  }

  navigate(id:string) {
    this.router.navigate(["projects",id]);
  }

}

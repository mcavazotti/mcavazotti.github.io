import { Component, OnInit } from '@angular/core';
import {PROJECT_LIST} from '../../project-list.gen'

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  projects = PROJECT_LIST;
  constructor() { }

  ngOnInit(): void {
  }

}

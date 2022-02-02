import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/definitions/project.inteface';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: Project = {
    id: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit {

  @Input() title: string = "";
  @Input() description?: string;
  @Input() coverImage?: string;


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as GeoPattern from 'geopattern';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit {

  @Input() title: string = "";
  @Input() description?: string;
  @Input() coverImage?: string;
  @Input() startYear?: number;
  @Input() endYear?: number;
  @Input() tags: string[] = [];
  @Output() click: EventEmitter<void> = new EventEmitter();

  generatePattern = GeoPattern.generate;

  constructor() { }

  ngOnInit(): void {
  }

  tileClicked() {
    this.click.emit();
  }

}

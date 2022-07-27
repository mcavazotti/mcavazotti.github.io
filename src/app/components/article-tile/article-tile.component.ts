import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as GeoPattern from 'geopattern';

@Component({
  selector: 'app-article-tile',
  templateUrl: './article-tile.component.html',
  styleUrls: ['./article-tile.component.scss']
})
export class ArticleTileComponent implements OnInit {
  @Input() title: string = "";
  @Input() abstract?: string;
  @Input() coverImage?: string;
  @Input() date: string = "";
  @Input() tags: string[] = [];
  @Output() click: EventEmitter<void> = new EventEmitter();

  formattedDate: string = "";

  generatePattern = GeoPattern.generate;

  constructor() { }

  ngOnInit(): void {
    if (this.date) {
      this.formattedDate = this.formatDate(this.date);
    }
  }

  tileClicked() {
    this.click.emit();
  }
  formatDate(date: string): string {
    if(date.length < 8) throw Error("invalid date format");
    let year = Number.parseInt(date.substring(0,4));
    let month = Number.parseInt(date.substring(4,6));
    let day = Number.parseInt(date.substring(6));

    let fullDate = new Date(year,month-1,day);

    return fullDate.toLocaleDateString("en-us",{year:"numeric", month:"short", day:"numeric"})
  }
}

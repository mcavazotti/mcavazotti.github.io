import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';

declare var ng: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class ProjectsComponent implements OnInit {
  ngOnInit() {}

  constructor(private meta: Meta) {
    this.meta.addTags([
      { name: 'description', content: "Some of my personal projects" },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: "Projects - Matheus Cavazotti" },
      { property: 'og:image', content: 'https://mcavazotti.github.io/assets/covers/generated/projects.png' },

    ]);
  }
}

import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.scss']
})
export class TerrainComponent {
  constructor(private meta: Meta) {
    this.meta.addTags([
      { name: 'description', content: "Procedural Terrain generation" },
      { property: 'og:title', content: "Procedural Terrain Demo" },
      { property: 'og:image', content: "https://mcavazotti.github.io/assets/covers/terrain.png" },
    ])

  }
}

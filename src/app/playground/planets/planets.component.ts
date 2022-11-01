import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SimController, Vector2 } from 'projects/planets/src/simulator';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit, OnDestroy {
  simController!: SimController;

  constructor(private meta: Meta) {
    this.meta.addTags([
      {name:'description',content: "A cool planet simulation!"},
      {property:'og:title',content: "Planet Simulation"},
      {property:'og:image',content: "assets/covers/planets.png"},
    ])

  }

  ngOnInit(): void {
    document.getElementById('sim')!.addEventListener('blur',this.forceFocus);

    this.simController = new SimController('sim', new Vector2(), true, true);
    this.simController.startSim();
  }

  ngOnDestroy(): void {
    this.simController.destroy();
  }

  forceFocus() {
    console.log('force focus')
    document.getElementById('sim')!.focus();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { SimController, Vector2 } from 'projects/planets/src/simulator';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit, OnDestroy {
  simController!: SimController;

  constructor() { }

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

import { Component, OnInit } from '@angular/core';
import { SimController, Vector2 } from 'src/submodules/planets/src/simulator';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  planetSim!: SimController;
  constructor() {
  }

  ngOnInit(): void {
    let canvas: HTMLCanvasElement = (document.getElementById("planets")! as HTMLCanvasElement);
    this.fitToContainer(canvas);

    this.planetSim = new SimController("planets", new Vector2(500, 0), true, false);
    this.planetSim.startSim();
  }

  private fitToContainer(canvas: HTMLCanvasElement) {
    // Make it visually fill the positioned parent
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    // ...then set the internal size to match
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

}

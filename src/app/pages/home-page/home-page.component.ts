import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService } from 'src/app/components/footer/footer.service';
import { SimController, Vector2 } from 'src/submodules/planets/src/simulator';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  host: {
    class: "home-page"
  }
})
export class HomePageComponent implements OnInit, OnDestroy {
  planetSim?: SimController;
  hideContent: boolean = false;

  constructor(private footerService: FooterService) {
  }

  ngOnInit(): void {
    this.footerService.hideFooter();
    let canvas: HTMLCanvasElement = (document.getElementById("planets")! as HTMLCanvasElement);
    this.fitToContainer(canvas);

    this.planetSim = new SimController("planets", new Vector2(500, 0), true, false);
    this.planetSim.startSim();
    let hide = () => {
      // console.log("aqui")
      this.hideContent = true;
    };
    canvas.addEventListener("mousedown", hide);
    canvas.addEventListener("keydown", hide);
    canvas.addEventListener("blur", () => {
      canvas.focus();
    });

    document.getElementById("content-div")?.addEventListener("click", () => {
      this.hideContent = false;
    });
    document.getElementById("greeting-div")?.addEventListener("click", () => {
      this.hideContent = false;
    });
  }

  ngOnDestroy(): void {
    this.planetSim?.destroy();
    this.footerService.showFooter();
    delete this.planetSim;
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

import { Component } from '@angular/core';
import { SideNavService } from './services/side-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openSideNav: boolean;

  constructor(private sideNavService: SideNavService) {
    this.openSideNav = sideNavService.getState();

    sideNavService.isOpen.subscribe((s) => {
      this.openSideNav = s;
    })
  }

}

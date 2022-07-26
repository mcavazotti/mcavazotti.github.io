import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BackgroundService } from './background.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dark: Observable<boolean>;

  constructor(private bgService: BackgroundService) {
    this.dark = bgService.dark$;
  }
}

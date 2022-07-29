import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  showFooter$: Observable<boolean>;
  showIcons$: Observable<boolean>;
  showBorder$: Observable<boolean>;
  constructor(private footerService: FooterService) {
    this.showFooter$ = footerService.showFooter$;
    this.showIcons$ = footerService.showIcons$;
    this.showBorder$ = footerService.showBorder$;
   }

  ngOnInit(): void {
  }

}

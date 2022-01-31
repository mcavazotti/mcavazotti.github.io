import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translation: TranslationService) { }

  ngOnInit(): void {
  }

  changeLanguage(lang: string) {
    this.translation.setActiveLanguage(lang);
  }

}

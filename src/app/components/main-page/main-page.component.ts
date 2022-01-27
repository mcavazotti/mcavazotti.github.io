import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  private translationData: any;
  private activeLanguage: string;

  title: string = "";
  about: string = "";
  projects: string = "";


  constructor(private translation: TranslationService) {
    this.activeLanguage = translation.getActiveLanguage();
    this.translation.loadTranslation('main').subscribe((data) => {
      console.log("carregando")
      this.translationData = data;
      this.translation.activeLanguage.subscribe(lang => {
        this.activeLanguage = lang;
        console.log(this.activeLanguage);
        this.applyTranslation();
      });
    });
    
  }
  
  ngOnInit(): void {
    
  }

  private applyTranslation() {
    console.log("aqui")
    this.title = this.translationData.title[this.activeLanguage];
    this.about = this.translationData.about[this.activeLanguage];
    this.projects = this.translationData.projects[this.activeLanguage];
  }

}

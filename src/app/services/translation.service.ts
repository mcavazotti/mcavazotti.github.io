import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private supportedLanguages: string[] = ["pt-BR", "en-US"];
  private activeLang: string = "pt-BR";

  private _activeLanguage: BehaviorSubject<string> = new BehaviorSubject(this.activeLang);
  public readonly activeLanguage: Observable<string> = this._activeLanguage.asObservable();

  constructor(private http: HttpClient) {
    var browserLanguage = navigator.language;
    for (let i = 0; i < this.supportedLanguages.length; i++) {
      if(this.supportedLanguages[i].search(browserLanguage.slice(0,2)) > -1){
        this.setActiveLanguage(this.supportedLanguages[i]);
        return;
      }
    }
    this.setActiveLanguage("en-US");
  }

  getSupportedLanguages(): string[] {
    return this.supportedLanguages;
  }

  setActiveLanguage(lang: string) {
    if (this.supportedLanguages.indexOf(lang) > -1) {
      this.activeLang = lang;
      this._activeLanguage.next(lang);
    }
  }

  getActiveLanguage(): string {
    return this.activeLang;
  }

  loadTranslation(component: string): Observable<any> {
    return this.http.get("./assets/translations/" + component + ".json");
  }

}

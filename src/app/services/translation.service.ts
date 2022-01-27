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

  constructor(private http: HttpClient) { }

  getSupportedLanguages(): string[] {
    return this.supportedLanguages;
  }

  setActiveLanguage(lang: string) {
    if (this.supportedLanguages.indexOf(lang) > -1) {
      console.log("mudando");
      this.activeLang = lang;
      this._activeLanguage.next(lang);
    }
  }

  getActiveLanguage(): string {
    return this.activeLang;
  }

  loadTranslation(page: string): Observable<any> {
    return this.http.get("./assets/translations/" + page + ".json");
  }

}

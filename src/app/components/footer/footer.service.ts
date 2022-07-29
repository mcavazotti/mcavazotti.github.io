import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private _showFooter: BehaviorSubject<boolean> = new BehaviorSubject(true);

  get showFooter$() {
    return this._showFooter.asObservable();
  }

  private _showIcons: BehaviorSubject<boolean> = new BehaviorSubject(true);
  
  get showIcons$() {
    return this._showIcons.asObservable();
  }
  
  private _showBorder: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  get showBorder$() {
    return this._showBorder.asObservable();
  }
  
  hideFooter() {
    console.log("hide")
    this._showFooter.next(false);
  }
  showFooter() {
    console.log("show")
    this._showFooter.next(true);
  }

  showIcons() {
    this._showIcons.next(true);
  }
  hideIcons() {
    this._showIcons.next(false);
  }

  showBorder() {
    this._showBorder.next(true);
  }

  hideBorder() {
    this._showBorder.next(false);
  }

  constructor() { }
}

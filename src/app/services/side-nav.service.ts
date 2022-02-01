import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private state: boolean = false;
  private _isOpen: BehaviorSubject<boolean> = new BehaviorSubject(this.state);
  isOpen: Observable<boolean> = this._isOpen.asObservable();

  constructor() { }

  getState(): boolean {
    return this.state;
  }

  setState(s: boolean): void {
    this.state = s;
    this._isOpen.next(s);
  }
}

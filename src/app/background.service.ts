import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private dark: BehaviorSubject<boolean> = new BehaviorSubject(false);
  get dark$(): Observable<boolean> {
    return this.dark.asObservable();
  }

  constructor() { }

  darkState(val: boolean) {
    this.dark.next(val);
  }
}

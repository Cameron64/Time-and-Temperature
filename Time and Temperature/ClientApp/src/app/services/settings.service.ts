import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public tempSettings = {maxF:160, minF: 130, maxC: 71, minC: 54 };

  private wantsCelsiusKey: string = "wantsCelsius"
  private _wantsCelsius$ = new BehaviorSubject<boolean>(null);
   public wantsCelsius$ = this._wantsCelsius$.asObservable();

   
  constructor() {
    this.getWantsCelsius();
  }

  setWantsCelsius(wantsCelsius:boolean) {
    const jsonData = JSON.stringify(wantsCelsius);
    localStorage.setItem(this.wantsCelsiusKey, jsonData);
    this._wantsCelsius$.next(wantsCelsius);
  }

  getWantsCelsius() {
    const data = !!JSON.parse(localStorage.getItem(this.wantsCelsiusKey));
    this._wantsCelsius$.next(data);

  }

  removeWantsCelsius() {
    localStorage.RemoveItem(this.wantsCelsiusKey);
    this._wantsCelsius$.next(null);

  }

}

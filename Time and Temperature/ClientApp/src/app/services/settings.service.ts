import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private isFahrenheit: boolean = true;

  constructor() {}

  getIsFahrenheit() {
    return this.isFahrenheit;
  }
}

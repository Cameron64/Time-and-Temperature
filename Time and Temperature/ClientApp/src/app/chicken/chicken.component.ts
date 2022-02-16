import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css'],
})
export class ChickenComponent {
  public isFahrenheit: boolean;
  public temperatureF: number | null = 150;
  public timeDisplay: any = { minutes: 1, seconds: 30 };

  constructor(private settings: SettingsService) {}

  ngOnInit() {
    this.isFahrenheit = this.settings.getIsFahrenheit();
  }

  formatLabel(value: number) {
    return `${value}°`;
  }

  calcTime() {
    let temperatureC = (5 / 9) * (this.temperatureF - 32);
    let minutes = 10 ** (Math.log10(1.8) - (temperatureC - 65) / 7.04);
    this.timeDisplay = this.time(minutes);
  }

  time(minutesIn: number) {
    var minutes = Math.floor(minutesIn);
    var seconds = Math.floor((minutesIn - minutes) * 60);
    return { minutes, seconds };
  }
}

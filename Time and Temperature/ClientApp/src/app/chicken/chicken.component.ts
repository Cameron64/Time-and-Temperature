import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css'],
})
export class ChickenComponent {
  public wantsCelsius: boolean;
  public temperature: number;
  public timeDisplay: any = { minutes: 1, seconds: 30 };

  constructor(public settings: SettingsService) {}

  ngOnInit() {
    this.settings.wantsCelsius$.subscribe((value: boolean) => {
      this.wantsCelsius = value;
      this.temperature = this.wantsCelsius ? 65 : 150
    })
  }

  formatLabel(value: number) {
    return `${value}°`;
  }

  calcTime() {
    let temperatureC = this.wantsCelsius ? this.temperature : (5 / 9) * (this.temperature - 32);
    let minutes = 10 ** (Math.log10(1.8) - (temperatureC - 65) / 7.04);
    this.timeDisplay = this.time(minutes);
  }

  time(minutesIn: number) {
    var minutes = Math.floor(minutesIn);
    var seconds = Math.floor((minutesIn - minutes) * 60);
    return { minutes, seconds };
  }
}

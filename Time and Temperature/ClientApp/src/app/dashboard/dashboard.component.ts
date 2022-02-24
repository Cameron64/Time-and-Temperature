import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public isFahrenheit: boolean;
  public temperatureF: number | null = 150;
  public timeDisplay: any = { minutes: 1, seconds: 30 };

  constructor(private settings: SettingsService) {}

  ngOnInit() {
  }

}

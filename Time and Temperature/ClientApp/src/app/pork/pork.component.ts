import { Component } from '@angular/core';

@Component({
  selector: 'app-pork',
  templateUrl: './pork.component.html',
  styleUrls: ['./pork.component.css'],
})
export class PorkComponent {
  public isFahrenheit: boolean;
  public timeDisplay: any = { minutes: 1, seconds: 30 };

  constructor() {}

  ngOnInit() {
  }

}

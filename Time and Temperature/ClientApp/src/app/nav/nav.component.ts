import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  public destinations = [
    {name: `Chicken`, url: 'chicken', type: DestinationType.food },
    {name: `Pork`, url: 'pork', type: DestinationType.food },
    {name: `Beef`, url: 'beef', type: DestinationType.food },
    {name: `First Degree Burns`, url: 'water-first-degree', type: DestinationType.water },
  ];

  public destinationTypes = [
    { name: `Food`, type: DestinationType.food, icon: `lunch_dining` },
    { name: `Water`, type: DestinationType.water, icon: `water_drop` },
  ]
  public selected = "Home";
  public panelOpenState;
  public DestinationType = DestinationType;

  constructor(private settings: SettingsService) {}

  ngOnInit() {
  }

 
}

export enum DestinationType {
  food,
  water,
  other,
}

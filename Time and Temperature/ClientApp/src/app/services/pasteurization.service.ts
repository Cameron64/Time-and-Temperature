import { Injectable } from '@angular/core';
import { PasteurizationRecord } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PasteurizationDataService {
  constructor() {}

  getChickenData(): PasteurizationRecord[] {
    return [
      {
        temperatureF: 130,
        temperatureC: 54.4,
        timeInMinutes: 86,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 131,
        temperatureC: 55.0,
        timeInMinutes: 69,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 132,
        temperatureC: 55.6,
        timeInMinutes: 55,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 133,
        temperatureC: 56.1,
        timeInMinutes: 44,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 134,
        temperatureC: 56.7,
        timeInMinutes: 35,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 135,
        temperatureC: 57.2,
        timeInMinutes: 28,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 136,
        temperatureC: 57.8,
        timeInMinutes: 22,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 137,
        temperatureC: 58.4,
        timeInMinutes: 18,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 138,
        temperatureC: 58.9,
        timeInMinutes: 14,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 139,
        temperatureC: 59.5,
        timeInMinutes: 11,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 140,
        temperatureC: 60.0,
        timeInMinutes: 9,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 141,
        temperatureC: 60.6,
        timeInMinutes: 7,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 142,
        temperatureC: 61.1,
        timeInMinutes: 6,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 143,
        temperatureC: 61.7,
        timeInMinutes: 5,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 144,
        temperatureC: 62.2,
        timeInMinutes: 4,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 145,
        temperatureC: 62.8,
        timeInMinutes: 3,
        timeInSeconds: undefined,
      },
      {
        temperatureF: 146,
        temperatureC: 63.3,
        timeInMinutes: undefined,
        timeInSeconds: 130,
      },
      {
        temperatureF: 147,
        temperatureC: 63.9,
        timeInMinutes: undefined,
        timeInSeconds: 103,
      },
      {
        temperatureF: 148,
        temperatureC: 64.4,
        timeInMinutes: undefined,
        timeInSeconds: 82,
      },
      {
        temperatureF: 149,
        temperatureC: 65.0,
        timeInMinutes: undefined,
        timeInSeconds: 65,
      },
      {
        temperatureF: 150,
        temperatureC: 65.6,
        timeInMinutes: undefined,
        timeInSeconds: 52,
      },
      {
        temperatureF: 151,
        temperatureC: 66.1,
        timeInMinutes: undefined,
        timeInSeconds: 41,
      },
      {
        temperatureF: 152,
        temperatureC: 66.7,
        timeInMinutes: undefined,
        timeInSeconds: 33,
      },
      {
        temperatureF: 153,
        temperatureC: 67.2,
        timeInMinutes: undefined,
        timeInSeconds: 26,
      },
      {
        temperatureF: 154,
        temperatureC: 67.8,
        timeInMinutes: undefined,
        timeInSeconds: 21,
      },
      {
        temperatureF: 155,
        temperatureC: 68.3,
        timeInMinutes: undefined,
        timeInSeconds: 17,
      },
      {
        temperatureF: 156,
        temperatureC: 68.9,
        timeInMinutes: undefined,
        timeInSeconds: 14,
      },
      {
        temperatureF: 157,
        temperatureC: 69.4,
        timeInMinutes: undefined,
        timeInSeconds: 11,
      },
      {
        temperatureF: 158,
        temperatureC: 70.0,
        timeInMinutes: undefined,
        timeInSeconds: 0,
      },
      {
        temperatureF: 159,
        temperatureC: 70.6,
        timeInMinutes: undefined,
        timeInSeconds: 0,
      },
      {
        temperatureF: 160,
        temperatureC: 71.1,
        timeInMinutes: undefined,
        timeInSeconds: 0,
      },
    ];
  }
}

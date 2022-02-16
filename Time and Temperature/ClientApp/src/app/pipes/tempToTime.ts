import { Pipe, PipeTransform } from '@angular/core';
import { PasteurizationRecord } from '../types';

@Pipe({
  name: 'tempToTime',
  pure: false,
})
export class TempToTimePipe implements PipeTransform {
  transform(
    records: any[],
    temperatureF: number,
    isFahrenheit: boolean
  ): any {
    if (!records) {
      return [];
    }

    return records.filter((record: PasteurizationRecord) => {
      if (isFahrenheit) {
        return record.temperatureF === temperatureF;
      } else return false;
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { PasteurizationRecord } from '../types';

@Pipe({
  name: 'basicFilter',
  pure: false,
})
export class BasicFilterPipe implements PipeTransform {
  transform(
    records: any[],
    filterBy: any,
    strict: boolean
  ): any {
    if (!records) {
      return [];
    }

    return records.filter((record: PasteurizationRecord) => {
     let keys: string[] = Object.keys(filterBy)
      let matches: string[] = keys.filter((key:string) => {
        return record[key] === filterBy[key];
      })
      return strict ? matches.length === keys.length : matches.length;
    });
  }
}

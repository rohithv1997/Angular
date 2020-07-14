import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const valArray = (value as []);
    const filterString = (args[0] as string);

    if (valArray.length === 0 || filterString === '') {
      return value;
    }

    const propName = (args[1] as string);
    const resultArray = [];

    for (const item of valArray) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const propName = args[0] as string;
    return value.sort((a, b) => {
      return (a[propName] > b[propName]) ? 1 : -1;
    });
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const valString = (value as string);
    if (valString === undefined) {
      return value;
    }

    return valString.split('').reverse().join('');
  }
}

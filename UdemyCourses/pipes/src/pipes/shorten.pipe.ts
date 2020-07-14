import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        const val = value as string;
        const limit = args[0] as number;
        return val.length > limit
            ? val.substr(0, limit) + '...'
            : val;
    }
}

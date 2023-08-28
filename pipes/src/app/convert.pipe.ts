import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, args: string): any {
    console.log(args);

    if (!value) return '';

    return value * 1.60934;
  }
}

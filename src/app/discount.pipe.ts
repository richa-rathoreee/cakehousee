import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    value=value+50;

    return value;
  }

}

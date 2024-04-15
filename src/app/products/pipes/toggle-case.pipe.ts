import { Pipe, PipeTransform } from '@angular/core';

// victor | toggleCase = 'VICTOR'
// VICTOR | toogleCase = 'victor'
@Pipe({
  name: 'toggleCase'
})

export class ToogleCasePipe implements PipeTransform {
  transform(value:string, toUpper: boolean = false):string {
    console.log({value, toUpper});
    return (toUpper)?value.toUpperCase(): value.toLowerCase();
  }
}

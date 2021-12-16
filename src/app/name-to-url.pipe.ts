import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameToUrl'
})
export class NameToUrlPipe implements PipeTransform {

  transform(value: String) {
    // let a = new RegExp('\s');
    value = value.replace(/\s/g, '');
    return value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(array: string[], ...args: string[]): string[] {
    const filtered = array.filter((item, index, self) => {
      return self.indexOf(item) === index;
    });
    
    return filtered;
    
  }

}

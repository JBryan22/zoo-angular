import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'age',
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], desiredAge) {
    if (desiredAge === "young") {
      return input.filter(function(animal) {
        return animal.age < 3;
      });
    } else if (desiredAge === "mature") {
      return input.filter(function(animal) {
        return animal.age > 2;
      });
    } else {
      return input;
    }
  }
}

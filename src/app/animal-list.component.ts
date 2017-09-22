import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html'
})

export class AnimalListComponent {
  @Input() animalList: Animal[];
  @Output() detailsClickSender = new EventEmitter();
  @Output() cancelClickSender = new EventEmitter();
  @Output() deleteClickSender = new EventEmitter();
  @Output() addNewClickSender = new EventEmitter();

  filterByAgeOption = 'all';

  detailsButtonHasBeenClicked(selectedAnimal: Animal) {
    this.detailsClickSender.emit(selectedAnimal);
  }

  cancelButtonHasBeenClicked() {
    this.cancelClickSender.emit();
  }

  deleteButtonHasBeenClicked(selectedAnimal: Animal) {
    this.deleteClickSender.emit(selectedAnimal);
  }

  addNewButtonHasBeenClicked() {
    this.addNewClickSender.emit();
  }

  filterByAge(filterBy: string) {
    this.filterByAgeOption = filterBy;
  }
}

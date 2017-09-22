import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-detail',
  templateUrl: './animal-detail.component.html'
})

export class AnimalDetailComponent {
  @Input() selectedAnimalDetails: Animal;
  @Output() backClickSender = new EventEmitter();
  @Output() deleteClickSender = new EventEmitter();

  backButton() {
    this.backClickSender.emit();
  }

  deleteClicked(animalToDelete: Animal) {
    if (confirm("Are you sure you want to remove this animal from the database?")) {
      this.deleteClickSender.emit(animalToDelete);
      this.backClickSender.emit();
    }
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-new',
  templateUrl: './animal-new.component.html'
})

export class AnimalNewComponent {
  @Input() addNewAnimalInput: boolean;
  @Output() newAnimalSender = new EventEmitter();
  @Output() backButtonSender = new EventEmitter();

  createNewAnimal(name: string, species: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    let newAnimal = new Animal(name, species, age, diet, location, caretakers, sex, [likes], [dislikes]);
    this.newAnimalSender.emit(newAnimal);
  }

  backButtonClicked() {
    this.backButtonSender.emit();
  }
}

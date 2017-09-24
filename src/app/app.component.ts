import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animals: Animal[] = [
    new Animal('Elephant', 'Ellie', 22, 'Herbivore', 'Safari Zone', 8, 'Female', ['Eating', 'Mud baths', 'Playing in the water'], ['Poachers', 'Being alone']),
    new Animal('Tiger', 'Tony', 2, 'Carnivore', 'Jungle Area', 8, 'Male', ['Eating', 'Sleeping', 'Running', 'Play fighting'], ['Poachers', 'Loud noises']),
    new Animal('Cheetah', 'Chester', 5, 'Carnivore', 'Safari Zone', 8, 'Male', ['Running', 'Play fighting'], ['Poachers']),
    new Animal('Brown Bear', 'Cindy', 8, 'Omnivore', 'Large Mammal', 8, 'Female', ['Play fighting', 'Eating'], ['People near her kids']),
    new Animal('Arctic Fox', 'Moon', 1, 'Carnivore', 'Northern Trail', 8, 'Female', ['cool shade', 'sleeping'], ['Loud noises'])
  ]

  selectedAnimal = null;
  addNewAnimal = false;
  filterByAgeOption = 'all';

  detailsClicked(clickedAnimal: Animal) {
    this.selectedAnimal = clickedAnimal;
  }

  cancelDetails() {
    this.selectedAnimal = null;
  }

  deleteAnimal(clickedAnimal: Animal) {
    let deletedAnimalIndex = this.animals.findIndex(function(animal) {
      return animal.name === clickedAnimal.name;
    });

    this.animals.splice(deletedAnimalIndex, 1);
  }

  addNewAnimalClicked() {
    this.addNewAnimal = !this.addNewAnimal;
  }

  addNewAnimalAction(newAnimal: Animal) {
    this.animals.push(newAnimal);
    this.addNewAnimal = false;
  }

  cancelNewAction() {
    this.addNewAnimal = false;
  }

  filterByAge(filterBy: string) {
    this.filterByAgeOption = filterBy;
  }
}

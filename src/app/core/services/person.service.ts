import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private person!: Person
  private persons: Person[] = [];

  constructor() { }

  set personSet(person: Person){
    this.person = person
  }

  get personGet(){
    return this.person;
  }

  set personsSet(persons: Person[]){
    this.persons = persons;
  }

  get personsGet(){
    return this.persons;
  }
}

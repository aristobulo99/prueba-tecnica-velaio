import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private person!: Person

  constructor() { }

  set personSet(person: Person){
    this.person = person
  }

  get personGet(){
    return this.person;
  }
}

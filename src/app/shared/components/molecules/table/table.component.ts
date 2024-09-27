import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Person } from 'src/app/core/interfaces/person';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [NgClass, NgFor, NgIf]

})
export class TableComponent {

  @Input() persons: Person[] = [];
  public deploySkill: {i: number, diploy: boolean} = {i:0, diploy: false};

  removePerson(i: number){
    this.persons.splice(i, 1);
  }

  convertToText(skills: string[]){
    return skills.join(', ');
  }


}

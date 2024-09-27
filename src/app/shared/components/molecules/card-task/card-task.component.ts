import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RadioButtonComponent } from '../../atom/radio-button/radio-button.component';
import { Task, TaskData } from 'src/app/core/interfaces/task';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss'],
  standalone: true,
  imports: [
    RadioButtonComponent,
    NgIf,
    NgFor
  ]
})
export class CardTaskComponent {

  @Input() task: TaskData | null = null;
  @Input() numerator: number = 1;
  @Output() selectTask: EventEmitter<{id: string, completed: boolean}> = new EventEmitter();

  joinSkill(skill: string[]){
    return skill.join(', ')
  }

  selectRadioButton(event: boolean){
    
    console.log(this.task?.id, this.task?.completed)
    this.selectTask.emit(
      {id: this.task?.id as string, completed: event}
    )
  }


}

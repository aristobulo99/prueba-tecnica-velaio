import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: true,
  imports:[NgClass, NgFor, FormsModule]
})
export class SelectComponent {


  @Input() label: string | null = null
  @Input() training: 'row' | 'colum' = 'row'
  @Input() valid: boolean = true;
  @Input() options: string[] = [];
  @Input() selectedOption: string = this.options[0];
  @Output() optionEvent: EventEmitter<string> = new EventEmitter<string>();


  get sectionStyle(){
    return {
      'flex-col justify-start': this.training === 'colum',
      'flex-row justify-between items-center': this.training === 'row',
    }
  }

  get labelStyle(){
    return {
      'text-violet-500': this.valid === true,
      'text-red-500': this.valid === false
    }
  }

  get selectStyle(){
    return {
      'border-violet-500 text-violet-500': this.valid === true,
      'border-red-500 text-red-500': this.valid === false
    }
  }

  optionSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOption = selectElement.value;
    this.optionEvent.emit(this.selectedOption);
  }

}

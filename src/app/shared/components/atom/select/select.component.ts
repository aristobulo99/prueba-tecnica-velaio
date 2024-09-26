import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: true,
  imports:[NgClass, NgFor]
})
export class SelectComponent {


  @Input() label: string | null = null
  @Input() training: 'row' | 'colum' = 'row'
  @Input() valid: boolean = true;
  @Input() options: string[] = [];
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

  optionSelect(option: string) {
    this.optionEvent.emit(option);
  }

}

import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [NgClass]
})
export class InputComponent {

  @Input() type: 'text' | 'number' | 'date' = 'text';
  @Input() label: string | null = null
  @Input() training: 'row' | 'colum' = 'row'
  @Input() valid: boolean = true;


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

  get inputStyle(){
    return {
      'border-violet-500 text-violet-500': this.valid === true,
      'border-red-500 text-red-500': this.valid === false
    }
  }

}

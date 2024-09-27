import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports:[NgClass]
})
export class ButtonComponent {

  @Input() name: string = ''
  @Input() disable: boolean = false;
  @Input() color: 'purple' | 'red' = 'purple';

  get divStyle(){
    return {
      'cursor-pointer': this.disable === false,
      'bg-purple-500 hover:bg-purple-300 cursor-pointer': this.color === 'purple',
      'bg-red-500 hover:bg-red-300 cursor-pointer': this.color === 'red',
      'opacity-40': this.disable === true,
    }
  }

}

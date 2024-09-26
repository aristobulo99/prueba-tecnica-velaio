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
  @Output() click: EventEmitter<void> = new EventEmitter();

  get divStyle(){
    return {
      'bg-purple-500 hover:bg-purple-300 cursor-pointer': this.disable === false,
      'bg-gray-400 opacity-50': this.disable === true,
    }
  }

  clickEventEmitter(){
    this.click.emit();
  }

}

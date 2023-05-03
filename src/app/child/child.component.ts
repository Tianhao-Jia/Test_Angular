import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() msg:string = '';

  @Output() newEvent = new EventEmitter<string>();

  childfunction(value:string){
    this.newEvent.emit(value);
  }

}

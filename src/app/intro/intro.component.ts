import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent{

  @Output()event: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
  acceptedAction(): void{
    this.event.emit(true);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab7';
  accepted: boolean;
  creditStatus: boolean;
  gotDataFromChild: boolean;
  isAccepted(event): void{
    this.accepted = event;
  }
  setStatus(event): void{
    this.creditStatus = event;
    this.gotDataFromChild = true;
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-test-forms',
  templateUrl: './test-forms.component.html',
  styleUrls: ['./test-forms.component.css']
})
export class TestFormsComponent implements OnInit {
  @Output() event: EventEmitter<boolean> = new EventEmitter();
  income: FormControl = new FormControl('', [Validators.required]);
  age: FormControl = new FormControl('', [Validators.required]);
  userGender: string;
  workExperience: FormControl = new FormControl('', [Validators.required]);
  userStatus: string;
  overDueLoans: boolean;
  credit: string;
  pledge: boolean;
  pledgeSum: FormControl = new FormControl('', [Validators.required]);
  creditSum: FormControl = new FormControl('', [Validators.required]);
  otherCredit: boolean;
  // accepted: boolean;
  constructor() {
  }

  ngOnInit(): void {
  }

  gender(event): void {
    this.userGender = event;
  }

  status(event): void {
    this.userStatus = event.toString();
    console.log(event);
  }

  creditForm(event): void {
    this.credit = event;
  }

  havePledge(): void {
    this.pledge = true;
  }
  check(): boolean{
    if (this.overDueLoans !== undefined) { this.event.emit( false); return false; }
    if ( (this.userStatus === 'phys' && this.income.value < 720000) ||
      this.userStatus === 'yur' && this.income.value < 3000000){
      this.event.emit( false);
      console.log(this.event);
      return false;
    }
    if (this.userStatus === 'phys' && this.age.value < 18){
      this.event.emit( false);
      console.log(this.event);
      return false;
    }
    if ((this.userGender === 'men' && this.age.value >= 63) || (this.userGender === 'women' && this.age.value >= 58)){
      this.event.emit( false);
      console.log(this.event);
      return false;
    }
    if (this.userStatus === 'phys' && this.workExperience.value < 2){
      this.event.emit( false);
      console.log(this.event);
      return false;
    }
    if (this.userStatus === 'yur' && this.workExperience.value < 5){
      this.event.emit( false);
      console.log(this.event);
      return false;
    }
    if (this.userStatus === 'yur' && this.credit === 'nal'){
      this.event.emit( false);
      console.log(this.event);
      return false;
    }
    if (this.userStatus === 'phys' &&  this.creditSum.value >= (this.pledge === true ? 3000000 + this.pledgeSum.value : 3000000)){
      this.event.emit( false);
      console.log(this.event);
      return false;
    }
    if ((this.userStatus === 'yur') &&  (this.creditSum.value >= (this.pledge === true ? 30000000 + this.pledgeSum.value : 30000000))){
      this.event.emit( false);
      console.log(this.event);
      return false;
    }
    this.event.emit( true);
    console.log(this.event);
    return true;
    // if (this.userStatus === 'phys') {
    //   if (this.income.value < 720000){ this.accepted =  false; }
    //   if (this.age.value < 18) {this.accepted =  false; }
    //   if (this.workExperience.value < 2) {this.accepted =  false; }
    //   if (this.creditSum.value >= this.pledge ? 3000000 + this.pledgeSum.value : 3000000){ this.accepted =  false; }
    //   if ((this.userGender === 'men') && (this.age.value >= 63)){this.accepted =  false; }
    //   if ((this.userGender === 'women') && (this.age.value >= 58)){this.accepted =  false; }
    //   if (this.accepted !== undefined){this.accepted =  true; }
    // }
    // if (this.userStatus === 'yur') {
    //   if ((this.income.value < 3000000) &&
    //     (this.workExperience.value <= 5) &&
    //     (this.overDueLoans !== false) &&
    //     (this.credit === 'nal')) {
    //     this.accepted = false;
    //   }else if (this.creditSum.value >= this.pledge ? 30000000 + this.pledgeSum.value : 30000000) {
    //     this.accepted = false;
    //   }else {
    //     this.accepted = true;
    //   }
    // }
    // console.log(this.accepted);
  }
}

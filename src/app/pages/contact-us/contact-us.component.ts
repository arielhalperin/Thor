import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'thor-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactUsComponent implements OnInit {

  contactUsForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactUsForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
    });



  }

  getErrorMessage() {
    debugger;
    return this.contactUsForm.controls['email'].hasError('required') ? 'You must enter a value' :
      this.contactUsForm.controls['email'].hasError('email') ? 'Not a valid email' :
        '';
  }

  onSubmit(){
    console.log(this.contactUsForm);
  }

  onClear(){
    this.contactUsForm.reset();
  }
}

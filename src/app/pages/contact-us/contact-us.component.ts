import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../auth/shared/auth.service";
import {ContactUsService} from "../shared/contact-us.service";

@Component({
  selector: 'thor-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactUsComponent implements OnInit {

  contactUsForm: FormGroup;
  email: String;

  constructor(private authService: AuthService, private contactUsService: ContactUsService) { }

  ngOnInit() {
    this.email = this.authService.isLoggedIn() ? this.authService.getUser().email : '';
    this.contactUsForm = new FormGroup({
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
    });



  }

  getErrorMessage() {
    return this.contactUsForm.controls['email'].hasError('required') ? 'You must enter a value' :
      this.contactUsForm.controls['email'].hasError('email') ? 'Not a valid email' :
        '';
  }

  onSubmit() {
    if (this.contactUsForm.valid) {
      this.contactUsService.sendMessage( this.contactUsForm.value.email, this.contactUsForm.value.message)
        .subscribe((data) => {
          console.log(data);
        });
    }

  }

  onClear() {
    this.contactUsForm.reset();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}

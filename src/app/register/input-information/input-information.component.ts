import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WizardService} from '../shared/wizard.service';
import {AuthService} from "../../auth/shared/auth.service";
import {User} from "../../auth/shared/user";


@Component({
  selector: 'thor-input-information',
  templateUrl: './input-information.component.html',
  styleUrls: ['./input-information.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputInformationComponent implements OnInit {

  generalInformationForm: FormGroup;

  constructor(private wizardService: WizardService, private authService: AuthService) { }

  ngOnInit() {
    this.generalInformationForm = new FormGroup({
      informationFirstName: new FormControl('', [Validators.required]),
      informationLastName: new FormControl(null, Validators.required),
      informationEmail: new FormControl('', [Validators.required, Validators.email]),
      informationPassword: new FormControl('', [Validators.required]),
      informationRepeatPassword: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {

    const user: User = {
      firstName: this.generalInformationForm.value.informationFirstName,
      lastName: this.generalInformationForm.value.informationLastName,
      email: this.generalInformationForm.value.informationEmail,
      password: this.generalInformationForm.value.informationPassword
    };

    this.authService.saveUser(user)
      .subscribe( (data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.user);
        this.wizardService.stepChange(1);
      });
  }
}

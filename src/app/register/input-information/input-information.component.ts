import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WizardService} from '../shared/wizard.service';

@Component({
  selector: 'thor-input-information',
  templateUrl: './input-information.component.html',
  styleUrls: ['./input-information.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputInformationComponent implements OnInit {

  generalInformationForm: FormGroup;

  constructor(private wizardService: WizardService) { }

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
    console.log(this.generalInformationForm);
    this.wizardService.stepChange(1);
  }

}

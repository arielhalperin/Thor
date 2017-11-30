import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard/wizard.component';
import {MatStepperModule} from '@angular/material';
import { InputInformationComponent } from './input-information/input-information.component';
import { InputSocialComponent } from './input-social/input-social.component';
import {ReactiveFormsModule} from '@angular/forms';

import {StepsModule} from 'primeng/primeng';
import {WizardService} from './shared/wizard.service';
import {InterestsModule} from "../interests/interests.module";
import {InterestService} from "../interests/shared/interest.service";

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    StepsModule,
    InterestsModule
  ],
  declarations: [WizardComponent, InputInformationComponent, InputSocialComponent],
  exports: [
    WizardComponent
  ],
  providers: [
    InterestService,
    WizardService
  ]
})
export class RegisterModule { }

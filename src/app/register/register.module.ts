import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard/wizard.component';
import {MatStepperModule} from '@angular/material';
import { InputInformationComponent } from './input-information/input-information.component';
import { InputSocialComponent } from './input-social/input-social.component';
import { InputInterestComponent } from './input-interest/input-interest.component';
import { InputInterestsListComponent } from './input-interests-list/input-interests-list.component';
import { InputInterestsCategoryComponent } from './input-interests-category/input-interests-category.component';
import {InterestService} from './shared/interest.service';
import {ReactiveFormsModule} from '@angular/forms';

import {StepsModule} from 'primeng/primeng';
import {WizardService} from './shared/wizard.service';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    StepsModule
  ],
  declarations: [WizardComponent, InputInformationComponent, InputSocialComponent, InputInterestComponent, InputInterestsListComponent, InputInterestsCategoryComponent],
  exports: [
    WizardComponent
  ],
  providers: [
    InterestService,
    WizardService
  ]
})
export class RegisterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard/wizard.component';
import {DialogModule} from "primeng/primeng";
import { WizardStepsComponent } from './wizard-steps/wizard-steps.component';
import {StepsModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    StepsModule,
  ],
  declarations: [WizardComponent, WizardStepsComponent],
  exports:[
    WizardComponent
  ]
})
export class RegisterModule { }

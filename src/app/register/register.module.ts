import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepsComponent } from './wizard-steps/wizard-steps.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [WizardComponent, WizardStepsComponent],
  exports: [
    WizardComponent
  ]
})
export class RegisterModule { }

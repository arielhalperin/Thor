import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {WizardService} from '../shared/wizard.service';

@Component({
  selector: 'thor-input-social',
  templateUrl: './input-social.component.html',
  styleUrls: ['./input-social.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputSocialComponent implements OnInit {

  constructor(private wizardService: WizardService) { }

  ngOnInit() {
  }

  onClick(step: number) {
    this.wizardService.stepChange(step);
  }

}

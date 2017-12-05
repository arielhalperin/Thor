import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {WizardService} from '../../register/shared/wizard.service';
import {InterestService} from "../shared/interest.service";

@Component({
  selector: 'thor-input-interests-list',
  templateUrl: './input-interests-list.component.html',
  styleUrls: ['./input-interests-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputInterestsListComponent implements OnInit, AfterViewInit {
  interestsCategories;

  interestsForm: FormGroup;
  interestsControls: {};

  userSelectedInterests;
  constructor(private interestService: InterestService, private wizardService: WizardService) {
    let formBuilder = new FormBuilder();
    this.interestService.getinterests().subscribe(interestsCategories => {
      this.interestsCategories = interestsCategories;
      this.interestsControls = {};
      for (let category of this.interestsCategories) {
        for (let intrest of category.interests) {
          this.interestsControls['intrest-' + intrest.id] = [{value:intrest.id}];
        }
      }
      this.interestsForm = formBuilder.group(this.interestsControls);
    });
  }

  ngOnInit() {
    this.userSelectedInterests = [];
  }

  ngAfterViewInit(): void {
    console.log('init');
  }

  onClick(step: number) {
    this.wizardService.stepChange(step);
  }

  onSubmit() {
    let userInterests = [];
    Object.keys(this.interestsForm.value).map((key) => {
      if (this.interestsForm.value[key]) {
        userInterests.push(this.interestsForm.value[key].value);
      }
    });

    this.onClick(1);
  }

}

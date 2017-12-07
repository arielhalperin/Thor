import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {WizardService} from '../../register/shared/wizard.service';
import {InterestService} from "../shared/interest.service";
import {CustomerService} from "../../customers/shared/customer.service";

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
  constructor(private interestService: InterestService, private wizardService: WizardService, private customerService: CustomerService) {
    let formBuilder = new FormBuilder();
    this.interestService.getinterests().subscribe(interestsCategories => {
      this.interestsCategories = interestsCategories;
      this.interestsControls = {};
      for (let category of this.interestsCategories) {
        for (let intrest of category.interests) {
          this.interestsControls[intrest._id] = 0;
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
      if (this.interestsForm.value[key] === true) {
        userInterests.push( key );
      }
    });

    this.customerService.changeCustomerInterests(userInterests)
      .subscribe((data) => {

        this.onClick(1);
      });
  }
}

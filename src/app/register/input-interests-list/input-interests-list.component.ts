import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {InterestService} from '../shared/interest.service';
import {InterestsCategory} from '../shared/interests-category';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'thor-input-interests-list',
  templateUrl: './input-interests-list.component.html',
  styleUrls: ['./input-interests-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputInterestsListComponent implements OnInit {

  interestsCategories: InterestsCategory[];

  interestsForm: FormGroup;
  InterestsControls: FormControl[];

  constructor(private interestService: InterestService) { }

  ngOnInit() {
    this.interestService.getinterests().subscribe(interestsCategories => {
      this.interestsCategories = interestsCategories;
    });
  }

}

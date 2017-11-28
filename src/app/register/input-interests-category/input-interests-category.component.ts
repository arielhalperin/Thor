import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {InterestsCategory} from '../shared/interests-category';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'thor-input-interests-category',
  templateUrl: './input-interests-category.component.html',
  styleUrls: ['./input-interests-category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputInterestsCategoryComponent implements OnInit {

  @Input() interestsCategory: InterestsCategory;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {

  }

}

import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Interest} from '../shared/interest';

@Component({
  selector: 'thor-input-interest',
  templateUrl: './input-interest.component.html',
  styleUrls: ['./input-interest.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputInterestComponent implements OnInit {

  @Input() interest: Interest;

  constructor() { }

  ngOnInit() {
  }

}

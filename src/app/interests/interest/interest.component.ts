import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Interest} from '../shared/interest';

@Component({
  selector: 'thor-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InterestComponent implements OnInit {

  @Input() interest: Interest;
  constructor() { }

  ngOnInit() {
  }

}

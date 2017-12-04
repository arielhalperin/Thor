import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {InterestsList} from '../shared/interests-list';

@Component({
  selector: 'thor-interests-list',
  templateUrl: './interests-list.component.html',
  styleUrls: ['./interests-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InterestsListComponent implements OnInit {

  @Input() interestsList: InterestsList;
  constructor() { }

  ngOnInit() {
  }

}

import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Customer} from '../shared/customer';

@Component({
  selector: 'thor-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerComponent implements OnInit {

  @Input() customer: Customer;

  constructor() { }

  ngOnInit() {
  }

}

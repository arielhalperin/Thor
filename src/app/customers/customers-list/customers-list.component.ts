import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CustomerService} from "../shared/customer.service";
import {Customer} from "../shared/customer";

@Component({
  selector: 'thor-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    // this.customerService.getCustomers().then(customers => this.customers = customers);
  }

}

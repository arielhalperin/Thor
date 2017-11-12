import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CustomerService} from './shared/customer.service';

import { CustomerComponent } from './customer/customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [CustomerComponent, CustomersListComponent],
  exports: [CustomersListComponent],
  providers: [
    CustomerService
  ]
})
export class CustomersModule { }

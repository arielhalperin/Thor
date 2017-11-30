import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CustomerService} from './shared/customer.service';

import { CustomerComponent } from './customer/customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import {HttpClientModule} from "@angular/common/http";
import {InterestsModule} from "../interests/interests.module";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    InterestsModule
  ],
  declarations: [CustomerComponent, CustomersListComponent],
  exports: [CustomersListComponent],
  providers: [
    CustomerService
  ]
})
export class CustomersModule { }

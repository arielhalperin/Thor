import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataGridModule} from 'primeng/primeng';

import {CustomerService} from "./shared/customer.service";

import { CustomerComponent } from './customer/customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import {HttpClientModule} from "@angular/common/http";
import {Http} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    HttpClientModule
  ],
  declarations: [CustomerComponent, CustomersListComponent],
  exports: [CustomersListComponent],
  providers:[
    CustomerService
  ]
})
export class CustomersModule { }

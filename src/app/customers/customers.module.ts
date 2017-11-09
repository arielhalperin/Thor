import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerComponent],
  exports: [CustomerComponent]
})
export class CustomersModule { }

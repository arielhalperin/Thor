import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ContactUsService} from "./shared/contact-us.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [AboutUsComponent, ContactUsComponent],
  providers: [
    ContactUsService
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputInterestComponent} from "./input-interest/input-interest.component";
import {InputInterestsCategoryComponent} from "./input-interests-category/input-interests-category.component";
import {InputInterestsListComponent} from "./input-interests-list/input-interests-list.component";
import {InterestService} from "./shared/interest.service";
import {ReactiveFormsModule} from "@angular/forms";
import { InterestComponent } from './interest/interest.component';
import { InterestsListComponent } from './interests-list/interests-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    InputInterestComponent,
    InputInterestsCategoryComponent,
    InputInterestsListComponent,
    InterestComponent,
    InterestsListComponent,
  ],
  providers: [
    InterestService
  ],
  exports: [
    InputInterestsListComponent,
    InterestsListComponent
  ]
})
export class InterestsModule { }

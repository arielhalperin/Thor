import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
  ],
  declarations: [LoginComponent, LogoutComponent, AuthenticationComponent],
  exports:[
    AuthenticationComponent
  ]
})
export class AuthModule { }

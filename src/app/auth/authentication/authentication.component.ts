import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'thor-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthenticationComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}

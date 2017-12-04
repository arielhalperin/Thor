import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'thor-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  password;
  email;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login(form.value.email, form.value.password)
        .subscribe(
          data => {
           console.log(data);
          },
          error => console.error(error)
        );
    }

  }

}

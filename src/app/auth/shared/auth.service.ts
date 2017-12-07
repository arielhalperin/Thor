import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import 'rxjs/Rx';
import {User} from "./user";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  saveUser(user: User) {
    return this.http.post(environment.ServerUrl + '/user', user)
      .map((response: Response) => {
        return response;
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

  login(email: String, password: String) {
    const body = {
      email: email,
      password: password
    };

    return this.http.post(environment.ServerUrl + '/user/login', body)
      .map((response: Response) => {
        const result = response;

        return result;
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

}

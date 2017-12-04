import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import 'rxjs/Rx';
import {User} from "./user";
import {Observable} from "rxjs/Observable";


@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  saveUser(user: User) {
    const body = JSON.stringify(user);
    return this.http.post(environment.ServerUrl + '/user', body)
      .map((response: Response) => {
        const result = response.json();

        return result;
      })
      .catch((error: Response) => {
        return Observable.throw(error.json())
      });
  }

}

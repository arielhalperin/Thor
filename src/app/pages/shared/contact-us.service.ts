import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ContactUsService {

  constructor(private http: HttpClient) { }

  sendMessage(email: String, message: String) {
    const body = {
      email: email,
      message: message
    };

    return this.http.post(environment.ServerUrl + '/contact-us', body)
      .map((response: Response) => {
        const result = response;

        return result;
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

}

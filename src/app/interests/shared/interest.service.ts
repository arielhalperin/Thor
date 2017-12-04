import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class InterestService {

  constructor(private http: HttpClient) {
  }

  getinterests() {
    try {
      return this.http.get('../../assets/interests.json');
      // return this.http.get(environment.ServerUrl + '/interest');
    } catch (error) {
      console.log(error);
      return error;
    }

  }

}

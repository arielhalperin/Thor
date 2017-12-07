import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class InterestService {

  constructor(private http: HttpClient) {
  }

  getinterests() {
    try {
      // return this.http.get('../../assets/interests.json');
      return this.http.get(environment.ServerUrl + '/interests-category')
        .map((response) => {
        return response['obj'];
      })
        .catch((error: Response) => {
          return Observable.throw(error);
        });
    } catch (error) {
      console.log(error);
      return error;
    }

  }

}

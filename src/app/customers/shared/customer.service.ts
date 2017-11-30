import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";


@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getCustomers() {
    try {
      return this.http.get(environment.ServerUrl + '/customers');
    } catch (error) {
      console.log(error);
      return error;
    }

  }

}

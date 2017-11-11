import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {}

  getCustomers() {
    this.http.get('customers.json').subscribe(data => {
      debugger;
      console.log(data);
      return data;

    }, error => console.log(error));
  }

}

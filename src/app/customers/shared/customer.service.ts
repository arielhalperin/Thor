import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getCustomers() {
    try {
      return this.http.get('../../assets/customers.json');
    } catch (error) {
      console.log(error);
      return error;
    }

  }

}

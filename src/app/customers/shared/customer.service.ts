import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";


@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getCustomers() {
    try {
      return this.http.get(environment.ServerUrl + '/customer');
    } catch (error) {
      console.log(error);
      return error;
    }

  }

  changeCustomerInterests(interestList) {
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';

    const  interests = {interests: interestList};
    return this.http.patch(environment.ServerUrl + '/influencer/changeUserInterests' + token, interests)
      .map((response: Response) => {
        const result = response;
        return result;
      })
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
  }
}

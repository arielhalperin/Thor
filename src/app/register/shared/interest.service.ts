import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class InterestService {

  constructor(private http: HttpClient) {
  }

  getinterests() {
    try {
      return this.http.get('../../assets/interests.json');
    } catch (error) {
      console.log(error);
      return error;
    }

  }

}

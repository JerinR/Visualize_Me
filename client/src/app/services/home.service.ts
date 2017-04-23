import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {
  constructor(private http: Http) {
    console.log('Http connection setup: from HomeService :-) ');
  }

  getAllCardData() {
    return this.http.get('/dbUtil/getAll')
            .map(res => res.json());
  }

}

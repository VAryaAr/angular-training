import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import { Users } from './shared/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  cars = [
    'Ford','Chevrolet','Buick'
  ];
  userData = {};

  configUrl = 'http://www.mocky.io/v2/5b5822d93000000206fe4d60';

  getUser() {
    return this.http.get(this.configUrl).subscribe(data => {
      console.log("received", data);
      this.userData = data;
      return this.userData;
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import { Users } from './shared/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // cars = [
  //   'Ford','Chevrolet','Buick'
  // ];
  private _userData = {};
  private configUrl = 'http://www.mocky.io/v2/5b5822d93000000206fe4d60';

  public get userData(): any {
    this._userData = this.http.get(this.configUrl);
    return this._userData;
  }
  // public set userData(value) {
  //   this._userData = value;
  // }

  getUser() {
    
  }
}

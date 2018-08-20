import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {  UsersService } from '../service/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLoginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  usrObj: object;

  constructor( private _router: Router, private usersService:UsersService ) {
    
  }
  ngOnInit() {
    this.usersService.userData().subscribe(response => {
      this.usrObj = response;
      console.log(this.usrObj);
      localStorage.setItem('users', JSON.stringify(this.usrObj));
    });
  }

  loginUser() : void{
    console.log(this.userLoginForm);
    var retrievedObject = JSON.parse(localStorage.getItem('users'));
    console.log(retrievedObject);
    for (var key in retrievedObject){
      console.log(retrievedObject[key]);
      console.log(this.userLoginForm.value.password);
      if(this.userLoginForm.value.email == retrievedObject[key].username && this.userLoginForm.value.password == retrievedObject[key].password){
      console.log("user valid");
      this._router.navigate(['/dashboard']);
      }
    }
  }

}

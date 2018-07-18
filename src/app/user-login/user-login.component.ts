import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor( private _router: Router) { 
    localStorage.setItem('username', 'admin');
    localStorage.setItem('password', 'admin123');
  }

  ngOnInit() {
    
  }

  loginUser(userFormData: NgForm) : void{
    console.log(localStorage.getItem('username'));
    if(userFormData.value.email == localStorage.getItem('username') && userFormData.value.pswd == localStorage.getItem('password')){
      console.log("user valid");
      this._router.navigate(['/dashboard']);
    }
  }

}

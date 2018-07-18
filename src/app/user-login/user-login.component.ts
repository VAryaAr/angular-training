import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  usrObj: object;

  constructor( private _router: Router) {
    this.usrObj =[ 
      {
      "username": 'admin',
      'password': 'admin123',
      'id': '123',
      'email': 'admin@gmail.com',
      "department": "Dept1"
      },
      {
        "username": 'john',
        'password': 'john124',
        'id': '124',
        'email': 'john@gmail.com',
        "department": "Dept2"
      }
  ];
    localStorage.setItem('users', JSON.stringify(this.usrObj));
  }

  ngOnInit() {
    
  }

  loginUser(userFormData: NgForm) : void{
    var retrievedObject = JSON.parse(localStorage.getItem('users'));
    console.log(retrievedObject);
    for (var key in retrievedObject){
      console.log(retrievedObject[key]);
      console.log(userFormData.value.pswd);
      if(userFormData.value.email == retrievedObject[key].username && userFormData.value.pswd == retrievedObject[key].password){
      console.log("user valid");
      this._router.navigate(['/dashboard']);
      }
    }
  }

}

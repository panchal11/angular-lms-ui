import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  signUp= new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  })
   
  onSignup(){
  console.log(this.signUp.value);
  }
  get username(){
    return this.signUp.get('username');
  }
  get password(){
    return this.signUp.get('password');
  }
}

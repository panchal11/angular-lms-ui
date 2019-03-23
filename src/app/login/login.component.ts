import { Component } from '@angular/core';
import {FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor() { }

signUp= new FormGroup({
  username: new FormControl('', Validators.required),
  password: new FormControl('',[Validators.required,Validators.minLength(6)])
})
 
onSignup(){

}
get username(){
  return this.signUp.get('username');
}
get password(){
  return this.signUp.get('password');
}



}

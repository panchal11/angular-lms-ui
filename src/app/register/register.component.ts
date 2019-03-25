import { Component } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
semester=["Semester","one","two","three"];
branch=["Branch","CS","IS","ECE"];
gender=["Gender","Male","Female","Other"];
  myform= new FormGroup({
    fullName:new FormControl('',Validators.required),
    usn:new FormControl('',Validators.required),
    gender:new FormControl(this.gender[0],Validators.required),
    branch:new FormControl(this.branch[0],Validators.required),
    emailId:new FormControl('',[Validators.required,
Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')
]),
    semester:new FormControl(this.semester[0],Validators.required),
    mobileNo:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]{10}')]),
    date:new FormControl('',Validators.required)
});

onSubmit(){
console.log(this.myform.value);
}

}

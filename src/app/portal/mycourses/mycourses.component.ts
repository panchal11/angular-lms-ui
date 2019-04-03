import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  courses: Array<any> = [];
  constructor() {
    this.courses = [
      {text: 'C Programming For Beginners - Master the C Language', modules: 8 , hours: 12 ,src: 'assets/images/c-programming.png' ,percentage:'60%'},
      {text: 'JAVA Programming For Beginners - Master the Java Language', modules: 15 , hours: 18 ,src: 'assets/images/java-programming.png' ,percentage:'40%'}
    ]
   }

  ngOnInit() {
  }

}

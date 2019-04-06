import { Component, OnInit } from '@angular/core';
import { CoursesserviceService } from '../services/courses/coursesservice.service';


@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  courses: Array<any> = [];
  constructor( private courseservice: CoursesserviceService) {
   }

  ngOnInit() {
    this.courseservice.getcourses().subscribe(function(data){
      this.courses = data;
      console.log(this.courses);
    })
  }

}

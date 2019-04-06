import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesserviceService {
   courses: any = 'http://5ca8624dc91d3d0014d7cd7d.mockapi.io/portal/course';
  constructor(private httpclient: HttpClient) {
   }
   getcourses(){
     return this.httpclient.get(this.courses);
     }
  }

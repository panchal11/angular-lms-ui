import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  heroes=[
    { src: 'assets/images/my-courses.png', title: 'My Courses', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { src: 'assets/images/cloud-lab.png', title: 'Cloud Lab', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { src: 'assets/images/aptitude.png', title: 'Aptitude', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { src: 'assets/images/coding-challenge.png', title: 'Coding Challenge', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { src: 'assets/images/competitive-programming.png', title: 'Competetive Programming', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { src: 'assets/images/hackathon.png', title: 'Hackathon', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  ];

}

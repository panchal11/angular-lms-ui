import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-carousel',
  templateUrl: './dashboard-carousel.component.html',
  styleUrls: ['./dashboard-carousel.component.scss']
})
export class DashboardCarouselComponent implements OnInit {

  items: Array<any> = []

  constructor() {
    this.items = [
      { name: 'Dashboard', stats: 'Lorem Ipsum', src: 'assets/images/dashboard-icon.png' },
      { name: 'My Courses', stats: 'Lorem Ipsum', src: 'assets/images/my-courses-icon.png' },
      { name: 'Progress', stats: 'Lorem Ipsum', src: 'assets/images/progress-icon.png' },
      { name: 'Recent Activity', stats: 'Lorem Ipsum', src: 'assets/images/recent-activity-icon.png' },
      { name: 'Leader Board', stats: 'Lorem Ipsum', src: 'assets/images/leader-board-icon.png' },
      { name: 'Time Line', stats: 'Lorem Ipsum', src: 'assets/images/time-line-icon.png' },
      { name: 'Aptitude', stats: 'Lorem Ipsum', src: 'assets/images/aptitude-icon.png' },
      { name: 'Coding Challenge', stats: 'Lorem Ipsum', src: 'assets/images/coding-challenge-icon.png' },
      { name: 'Competitive Programming', stats: 'Lorem Ipsum', src: 'assets/images/competitive-programming-icon.png' },
      { name: 'Hackathon', stats: 'Lorem Ipsum', src: 'assets/images/hackathon-icon.png' },
    ]
  }

  ngOnInit() {
  }

}

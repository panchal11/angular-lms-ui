import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/core/services/sidenav.service';

@Component({
  selector: 'mycoursesidenav',
  templateUrl: './mycoursesidenav.component.html',
  styleUrls: ['./mycoursesidenav.component.css']
})
export class MycoursesidenavComponent implements OnInit {
  debugger;
  Datas=[];
  constructor(private _SidenavService:SidenavService) { }
  
  ngOnInit() {
    debugger
   this.Datas= this._SidenavService. getLocaleDateFormat()
  }

}

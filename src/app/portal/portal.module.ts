import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { CloudlabComponent } from './cloudlab/cloudlab.component';
import { CoursesserviceService } from './services/courses/coursesservice.service';

@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  declarations: [PortalComponent, DashboardComponent, MycoursesComponent, CloudlabComponent
  ],
  providers: [
   CoursesserviceService
]
})
export class PortalModule { }

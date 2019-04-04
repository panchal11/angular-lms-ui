import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { CloudlabComponent } from './cloudlab/cloudlab.component';


@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule,
    CoreModule
  ],
  declarations: [PortalComponent, DashboardComponent, MycoursesComponent, CloudlabComponent]
})
export class PortalModule { }

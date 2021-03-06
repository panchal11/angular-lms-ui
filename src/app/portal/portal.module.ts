import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { CloudlabComponent } from './cloudlab/cloudlab.component';
import { DashboardCarouselComponent } from './dashboard/dashboard-carousel/dashboard-carousel.component';


@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule,
    CoreModule
  ],
  declarations: [PortalComponent, DashboardComponent, MycoursesComponent, CloudlabComponent, DashboardCarouselComponent]
})
export class PortalModule { }

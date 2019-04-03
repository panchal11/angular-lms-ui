import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { CloudlabComponent } from './cloudlab/cloudlab.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: PortalComponent,
		children: [
			{ path: '', component: DashboardComponent }
		]
  },
  {
		path: 'courses',
		component: PortalComponent,
		children: [
			{ path: '', component: MycoursesComponent }
		]
	},
	{
		path: 'cloudeLab',
		component: PortalComponent,
		children: [
			{ path: '', component: CloudlabComponent }
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }

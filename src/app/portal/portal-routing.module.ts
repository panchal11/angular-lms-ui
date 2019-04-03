import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MycoursesComponent } from './mycourses/mycourses.component';

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
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }

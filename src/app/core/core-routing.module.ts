import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'portal',
      pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginpageComponent
  },
  {
      path: 'portal',
      canActivate: [AuthGuardService],
      loadChildren: '../portal/portal.module#PortalModule'
  },
  {
      path: 'admin',
      loadChildren: '../admin/admin.module#AdminModule'
  },
  {
      path: '**',
      component: NotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CoreRoutingModule { }

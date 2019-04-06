import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { RouterModule } from '@angular/router';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { MastertemplateComponent } from './mastertemplate/mastertemplate.component';

// import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MainnavComponent } from './mainnav/mainnav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  imports: [
      CommonModule,
      CoreRoutingModule,
      Ng2CarouselamosModule,
  ],
  declarations: [
     LoginpageComponent,
     MastertemplateComponent, 
     RegistrationComponent, 
     NotFoundComponent,
     MainnavComponent, 
     FooterComponent, 
     TopnavComponent
    ],
  exports: [
      RouterModule,
      MastertemplateComponent,
      MainnavComponent,
      FooterComponent,
      TopnavComponent
  ],
  providers: [
      AuthenticationService,
      AuthGuardService
  ]
})
export class CoreModule { }



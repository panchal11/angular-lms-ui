import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core.1/core.module';

import { AppRoutingModule } from './app-routing.module';
// import { LoginpageComponent } from '../components/ loginpage/loginpage.component';
import { MasterpageComponent } from './common/masterpage/masterpage.component';
import { TopnavComponent } from './common/masterpage/topnav/topnav.component';
import { MainnavComponent } from './common/masterpage/mainnav/mainnav.component';
import { FooterComponent } from './common/masterpage/footer/footer.component';
import { SideNavComponent } from './common/masterpage/side-nav/side-nav.component';
import { MaterialModule } from './material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,

    // MasterpageComponent,
    // TopnavComponent,
    // MainnavComponent,
    // FooterComponent,
    // SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

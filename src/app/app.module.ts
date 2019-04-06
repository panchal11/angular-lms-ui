import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CoreModule } from './core/core.module';
import { PortalModule } from './portal/portal.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PortalModule,
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    DashBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }



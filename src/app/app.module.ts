import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module'
import { JobsModule } from './jobs/jobs.module'
import { ProjectModule } from './project/project.module'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    UsersModule,
    ProjectModule,
    JobsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

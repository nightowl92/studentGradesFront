import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { HttpClientModule } from '@angular/common/http';
import { AddInfoComponent } from './add-info/add-info.component';
import { GetInfoComponent } from './get-info/get-info.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDataComponent,
    AddInfoComponent,
    GetInfoComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

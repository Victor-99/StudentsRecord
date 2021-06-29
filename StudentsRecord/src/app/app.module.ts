import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentTabComponent } from './components/student-tab/student-tab.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToppersListComponent } from './components/toppers-list/toppers-list.component';
import { FormsModule } from '@angular/forms';
import { EditFormComponent } from './components/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTabComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    NavBarComponent,
    ToppersListComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

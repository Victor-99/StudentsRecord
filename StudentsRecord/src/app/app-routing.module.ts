import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentTabComponent } from './components/student-tab/student-tab.component';

const routes: Routes = [
  {path:'',component:StudentTabComponent, pathMatch:'full'},
  {path:'addStudent',component:AddStudentComponent,pathMatch:'full'},
  {path:'edit/:id',component:EditFormComponent,pathMatch:'full'},
  {path:':id', component:StudentDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

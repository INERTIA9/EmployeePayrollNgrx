import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';


const routes: Routes = [
  {
     path: '', redirectTo: 'list', pathMatch: 'full' ,
  },
  {
    path: 'addemp',
    component: AddEmpComponent
  },
  {
    path:'list',
    component:ListEmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from '../new-employee/new-employee.component';
import { ErrorPageComponent } from '../error/error.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'new-employee', component: EmployeeDetailComponent },
  { path: '**', redirectTo: '/404'},
  { path: '404', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

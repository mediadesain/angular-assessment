import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './public/auth/auth.component';

const routes: Routes = [
  { path: 'account', component: LoginComponent },
  { path: '', loadChildren: () => import('./public/employee/employee.module').then(m => m.EmployeeModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
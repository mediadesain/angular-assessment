import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from '../new-employee/new-employee.component';

@NgModule({
  declarations: [EmployeeComponent, EmployeeDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }

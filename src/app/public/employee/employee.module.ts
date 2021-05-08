import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';

import { FilterMultiPipe } from '../../pipes/filter.pipe';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from '../new-employee/new-employee.component';
import { LoginComponent } from '../auth/auth.component';

@NgModule({
  declarations: [EmployeeComponent, EmployeeDetailComponent, LoginComponent, FilterMultiPipe],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }

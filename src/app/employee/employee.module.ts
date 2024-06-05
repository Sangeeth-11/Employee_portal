import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmplistComponent,
    AddempComponent,
    EditempComponent,
    SearchPipe
   
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    HttpClientModule

  ]
})
export class EmployeeModule { }

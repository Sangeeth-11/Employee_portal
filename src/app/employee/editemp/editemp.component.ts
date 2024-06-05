import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { EmployeeSchema } from '../Schemas/employeeSchema';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit{
  empId:any=""
  emp:EmployeeSchema={}
  constructor(private ar:ActivatedRoute,private api:ApiService,private toastr:ToastrService,private router:Router){
    this.ar.params.subscribe((res:any)=>{
      this.empId = res.id
    })
  }
  ngOnInit(): void {
    this.api.getEmployee(this.empId).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getData(res)
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  getData(data:any){
    this.emp.id=data.id
    this.emp.username=data.username
    this.emp.email=data.email
    this.emp.status=data.status
  }
  handleSubmit(){
    this.api.editEmployee(this.empId,this.emp).subscribe({
      next:(res:any)=>{
        this.toastr.success("edit successfull")
        this.router.navigateByUrl('employee')
      },
      error:(err:any)=>{
        this.toastr.error(err)
      }
    })
  }
  onCancel(){
    this.router.navigateByUrl('employee')
  }
}

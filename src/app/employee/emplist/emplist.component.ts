import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent  implements OnInit{
  searchKey:string=''
  employees:any=[]
  constructor(private api:ApiService,private toastr:ToastrService){
    console.log(this.employees);
    
  }
  cdate:any = new Date()
  ngOnInit(): void {
    this.api.getEmployees().subscribe({
      next:(res:any)=>{
        console.log(res);

        this.getData(res)
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
  getData(emp:any){
    this.employees = emp
    console.log(this.employees);
    
  }
  deleteEmployee(id:any){
    this.api.deleteEmployee(id).subscribe({
      next:(res:any)=>{
        this.toastr.success("deleted successfully")
        this.ngOnInit()
      },
      error:(err:any)=>{
        this.toastr.error(err)
      }
    })
  }

 
}

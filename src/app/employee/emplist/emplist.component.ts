import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent  implements OnInit{
  employees:any=[]
  constructor(private api:ApiService){
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

 
}

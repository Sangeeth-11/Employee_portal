import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit{
  empId:any=""
  constructor(private ar:ActivatedRoute,private api:ApiService){
    this.ar.params.subscribe((res:any)=>{
      this.empId = res.id
    })
  }
  ngOnInit(): void {
    this.api.getEmployee(this.empId).subscribe({
      next:(res:any)=>{
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}

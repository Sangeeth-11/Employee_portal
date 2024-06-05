import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  server_url:string ="http://localhost:3000"
  constructor(private http:HttpClient) { }

  getAdmin(){
    return this.http.get(`${this.server_url}/users/1`)
  }
  updateAdmin(data:any){
    return this.http.put(`${this.server_url}/users/1`,data)
  }
  isLoggedIn(){
    return !!sessionStorage.getItem('admin')
  }
}

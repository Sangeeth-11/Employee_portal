import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employee: any[], key: string) {
 
    
    if (!employee) return []
    if (!key) return employee
    key=key.toLowerCase()
    employee=employee.filter((item:any)=>(item.username.toLowerCase().includes(key)))
    return employee;
  }

}

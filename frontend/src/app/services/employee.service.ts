import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;

  readonly SERVER_PORT = '3000';
  readonly SERVER_API = 'http://localhost:' + this.SERVER_PORT;
  readonly URL_API = this.SERVER_API + `/api/employees`;

  employees: Employee[];

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
  }

  getEmployees() {
    return this.http.get(this.URL_API);
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  updateEmployee(employee: Employee) {
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

import { Employee, State,City,Country } from './../../employee';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:59465/Api/Employee';

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + '/AllEmployeeDetails');
  }

  getEmployeeById(employeeId: string): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/GetEmployeeDetailsById/' + employeeId);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Employee>(this.url + '/InsertEmployeeDetails/',
      employee, httpOptions);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.put<Employee>(this.url + '/UpdateEmployeeDetails/',
      employee, httpOptions);
  }

  deleteEmployeeById(employeeid: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' + employeeid,
      httpOptions);
  }

  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url + '/Country');
  }

  getState(CountryId: string): Observable<State[]> {
    return this.http.get<State[]>(this.url + '/Country/' + CountryId + '/State');
  }

  getCity(StateId: string): Observable<City[]> {
    return this.http.get<City[]>(this.url + '/State/' + StateId + '/City');
  }

  deleteData(user: Employee[]): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<string>(this.url + '/DeleteRecord/', user, httpOptions);
  }
}

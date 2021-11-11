import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/login';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  unAuthorized: boolean = true;
  constructor(private http: HttpClient) { }


  LoginAPI(customer: LoginModel) {
    // console.log(customer);
    
    return this.http.post(
      'https://induk-bank.azurewebsites.net/api/Customer/Login',
      customer
    );
  }


  GetUserById(id: number) {
    return this.http.get(`https://induk-bank.azurewebsites.net/api/Customer/${id}`);
  }

  LoginAdminAPI(customer: LoginModel) {
    console.log(customer);
    
    return this.http.post(
      'https://induk-bank.azurewebsites.net/api/Employee/Login',
      customer
    );
  }


 

logOut() {
  localStorage.removeItem('induk-bank-user');
  console.log("tttt");
  
  if (localStorage.getItem('induk-bank-user')) {
    this.unAuthorized = false;
  } else {
    this.unAuthorized = true;
  }
  return this.unAuthorized;
}



getAccountsByUser(id:any, token:any) {
  var header = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token?.toString(),
  });

  return this.http
    .get(`https://induk-bank.azurewebsites.net/api/Account/GetAccounts/${id}`, { headers: header })
    ;
}

}
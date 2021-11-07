import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/login';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  unAuthorized: boolean = true;
  constructor(private http: HttpClient) { }


  LoginAPI(customer: LoginModel) {
    return this.http.post(
      'https://induk-bank.azurewebsites.net/api/Customer/Login',
      customer
    );
  }


  GetUserById(id: number) {
    return this.http.get(`https://induk-bank.azurewebsites.net/api/Customer/${id}`);
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
}
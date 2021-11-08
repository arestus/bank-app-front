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


private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `,
      error.error
    );
  }
  // Return an observable with a user-facing error message.
  return throwError('Something bad happened; please try again later.');
}

getAccountsByUser(id:any, token:any) {
  var header = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token?.toString(),
  });

  return this.http
    .get(`https://induk-bank.azurewebsites.net/api/Account/GetAccounts/${id}`, { headers: header })
    .pipe(catchError(this.handleError));
}

}
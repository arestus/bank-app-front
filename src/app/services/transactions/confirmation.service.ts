import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private http: HttpClient) { }

  transferTransaction(transaction: any) {
    console.log("works!")
    return this.http.post('https://induk-bank.azurewebsites.net/api/Transaction/Transfer', transaction);
  }
}

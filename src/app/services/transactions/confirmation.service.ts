import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from 'src/app/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private http: HttpClient) { }

  transferTransaction(transaction: Transaction) {
    console.log("============================================");
    console.log("============================================");
    console.log("============================================");
    console.log("============================================");
    console.log(transaction)
    return this.http.post('https://induk-bank.azurewebsites.net/api/TransactionHistory/Transfer', transaction);

  }
}

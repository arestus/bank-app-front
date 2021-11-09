import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionTransfer } from 'src/app/models/transactionTransfer';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private http: HttpClient) { }

  transferTransaction(transaction: TransactionTransfer) {
    console.log(transaction)
    return this.http.post('https://induk-bank.azurewebsites.net/api/TransactionHistory/Transfer', transaction);
  }

  depositTransaction(transaction: TransactionTransfer) {
    console.log(transaction)
    return this.http.post('https://induk-bank.azurewebsites.net/api/TransactionHistory/Deposit', transaction);
  }

  withdrawTransaction(transaction: TransactionTransfer) {
    console.log(transaction)
    return this.http.post('https://induk-bank.azurewebsites.net/api/TransactionHistory/Withdraw', transaction);
  }
}

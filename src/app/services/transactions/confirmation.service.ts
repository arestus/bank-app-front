import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionService } from './transaction.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private http: HttpClient, public currentTransaction: TransactionService) { }

  transferTransaction(currentTransaction:any) {
    return this.http.post(`https://induk-bank.azurewebsites.net/api/TransactionHistory/${currentTransaction.type}`, currentTransaction);
  }
}

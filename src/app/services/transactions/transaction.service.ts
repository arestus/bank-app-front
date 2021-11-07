import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  public currentTransaction:any;

  constructor() { }

  setNewTransaction(transaction: Transaction) {
    this.currentTransaction = transaction;
  }

}

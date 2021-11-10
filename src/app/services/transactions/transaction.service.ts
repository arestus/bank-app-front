import { Injectable } from '@angular/core';
import { TransactionTransfer } from 'src/app/models/transactionTransfer';
import { Transaction } from 'src/app/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  public currentTransaction:any;

  constructor() { }

  setNewTransactionTransfer(transaction: TransactionTransfer) {
    this.currentTransaction = transaction;
  }

  setNewTransaction(transaction: Transaction) {
    this.currentTransaction = transaction;
  }

}

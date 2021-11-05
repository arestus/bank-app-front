import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transactions/transaction.service';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  transaction!: Transaction;

  constructor() { }

  ngOnInit():void {
  //  this.transaction = this.TransactionService.currentTransaction;
  }

}

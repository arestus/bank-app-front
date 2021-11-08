import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transactions/transaction.service';
import { ConfirmationService } from 'src/app/services/transactions/confirmation.service';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  currentTransaction!: Transaction;


  constructor(
    private transactionService: TransactionService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit():void {
    this.currentTransaction = this.transactionService.currentTransaction;
  }

  confirmTransaction() {
    if (this.currentTransaction.type === "transfer") {
      this.confirmationService.transferTransaction(this.currentTransaction).subscribe((transData) => {
        console.log(transData);
      });
    }
  }
}

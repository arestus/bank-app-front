import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transactions/transaction.service';
import { ConfirmationService } from 'src/app/services/transactions/confirmation.service';
import { TransactionTransfer } from 'src/app/models/transactionTransfer';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  currentTransaction!: TransactionTransfer;


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
    } else if (this.currentTransaction.type === "deposit") {
      this.confirmationService.depositTransaction(this.currentTransaction).subscribe((transData) => {
        console.log(transData);
      });
    } else if (this.currentTransaction.type === "withdraw") {
      this.confirmationService.withdrawTransaction(this.currentTransaction).subscribe((transData) => {
        console.log(transData);
      }, err => {
        console.log(err)
      });
    }
  }
}

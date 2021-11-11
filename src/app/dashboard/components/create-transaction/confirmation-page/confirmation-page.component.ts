import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transactions/transaction.service';
import { ConfirmationService } from 'src/app/services/transactions/confirmation.service';
import { TransactionTransfer } from 'src/app/models/transactionTransfer';
import { Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  currentTransaction!: TransactionTransfer;


  constructor(
    private transactionService: TransactionService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private _location: Location
  ) { }

  ngOnInit():void {
    this.currentTransaction = this.transactionService.currentTransaction;
  }

  confirmTransaction() {
      this.confirmationService.transferTransaction(this.currentTransaction).subscribe((transData) => {
        console.log(transData);
      });
      this.router.navigate(["customer/confirmation-result"]);
  }
  goBack() {
    this._location.back();
  }
}

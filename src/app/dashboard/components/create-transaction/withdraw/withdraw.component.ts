import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transactions/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  transaction!: Transaction;

  withdrawForm = new FormGroup({
    from: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.max(1000), Validators.min(2)]),
    desc: new FormControl('', Validators.required)
  });

  get from(): any {
    return this.withdrawForm.get('from');
  }
  get amount(): any {
    return this.withdrawForm.get('amount');
  }
  get desc(): any {
    return this.withdrawForm.get('desc');
  }

  constructor(
    private router: Router, private transactionService: TransactionService) {
   }

  ngOnInit(): void {
  }

  onFormSubmit() {
    const type = "Withdraw";
    const account = this.withdrawForm.get('from')!.value;
    const accountId = Number(account)
    const amount = this.withdrawForm.get('amount')!.value;
    const descriptions = this.withdrawForm.get('desc')!.value;
    
    const currentTransaction = new Transaction(type, accountId, amount, descriptions)

    this.transactionService.setNewTransaction(currentTransaction);
    
    this.router.navigate(["customer/confirmation"]);
  }

  reset = () => {
    this.withdrawForm.reset();
  }

}

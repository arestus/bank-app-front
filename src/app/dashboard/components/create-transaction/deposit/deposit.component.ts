import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transactions/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  transaction!: Transaction;

  depositForm = new FormGroup({
    to: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.max(1000), Validators.min(2)]),
    desc: new FormControl('', Validators.required)
  });

  get to(): any {
    return this.depositForm.get('to');
  }
  get amount(): any {
    return this.depositForm.get('amount');
  }
  get desc(): any {
    return this.depositForm.get('desc');
  }

  constructor(private router: Router, private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    const type = "deposit";
    const from = 0;
    const to = this.depositForm.get('to')!.value;
    const amount = this.depositForm.get('amount')!.value;
    const description = this.depositForm.get('desc')!.value;
    const currentTransaction = new Transaction(type, from, to, amount, description)

    this.transactionService.setNewTransaction(currentTransaction);
    this.router.navigate(["admin/confirmation"]);
  }

  reset = () => {
    this.depositForm.reset();
  }
}

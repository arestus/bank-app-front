import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(formDirective: FormGroupDirective){
    console.log('From:' + this.withdrawForm.get('to')!.value);
    console.log('Amount:' + this.withdrawForm.get('amount')!.value);
    console.log('Description:' + this.withdrawForm.get('desc')!.value);
    formDirective.resetForm();
    this.reset();
  }

  reset = () => {
    this.withdrawForm.reset();
  }

}

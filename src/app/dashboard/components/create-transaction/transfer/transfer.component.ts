import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  currentAmount:number = 5;
  transferForm = new FormGroup({
    to: new FormControl('', Validators.required),
    from: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.max(this.currentAmount), Validators.min(2)]),
    desc: new FormControl('', Validators.required)
  });

  get to(): any {
    return this.transferForm.get('to');
  }
  get from(): any {
    return this.transferForm.get('from');
  }
  get amount(): any {
    return this.transferForm.get('amount');
  }
  get desc(): any {
    return this.transferForm.get('desc');
  }

  constructor() { }

  onFormSubmit(formDirective: FormGroupDirective){
    console.log('To:' + this.transferForm.get('to')!.value);
    console.log('From:' + this.transferForm.get('from')!.value);
    console.log('Amount:' + this.transferForm.get('amount')!.value);
    console.log('Description:' + this.transferForm.get('desc')!.value);
    formDirective.resetForm();
    this.reset();
  }

  ngOnInit(): void {
  }

  reset = () => {
    this.transferForm.reset();
  }

}

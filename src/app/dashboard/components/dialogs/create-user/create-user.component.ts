import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { UserlistService } from 'src/app/services/userlist.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  maxDate: Date;
  hide = true;
  form!: FormGroup;

  constructor(
    public service: UserlistService,
    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {index:any,item: any},
  ) {
    this.maxDate = new Date();

    
      this.form = new FormGroup({
        // customerID: new FormControl(null),
        
          name: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required),
        //gender: new FormControl('1'),
        dateOfBirth: new FormControl(""),
        address: new FormControl(""),
        phone: new FormControl("",Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
        email: new FormControl("", [Validators.required,
        Validators.email]),
        aadhaarnumber: new FormControl(""),
        paNnumber: new FormControl("")
        ,
      });
   

    
  }

  ngOnInit(): void {
   
  }

  onClear() {
    this.form.reset();
  }

  onClose() {
    this.form.reset();
    this.dialogRef.close();

  }

  public checkError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };

  onSubmit() {

    // const invalid = [];
    // const controls = this.form.controls;
    // for (const name in controls) {
    //   if (controls[name].invalid) {
    //     invalid.push(name);
    //   }
    // }
    // console.log(invalid,'invalid');

    this.service.create(this.form.value);

    console.log(this.form.value, 'form');
    this.onClose();
  }

}

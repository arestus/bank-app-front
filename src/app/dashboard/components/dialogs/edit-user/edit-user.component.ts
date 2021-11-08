import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { UserlistService } from 'src/app/services/userlist.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  maxDate: Date;
  hide = true;
  form!: FormGroup;

  constructor(
    public service: UserlistService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {index:any,item: any},
  ) {
    this.maxDate = new Date();

    
      this.form = new FormGroup({
         customerID: new FormControl(null),
        
          name: new FormControl("", Validators.required),
        //password: new FormControl(""),
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

  public findInvalidControls() {
    const invalid = [];
    const controls = this.form.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    console.log(invalid) ;
}

  ngOnInit(): void {
   console.log(this.data,"data");
   console.log(this.form,"form");
   //this.form.setValue(this.data.item)
   this.form.patchValue(this.data.item)
   this.findInvalidControls()
   
   
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

    this.service.update(this.form.value.customerID,this.form.value);

    console.log(this.form.value, 'form');
    this.onClose();
  }

}

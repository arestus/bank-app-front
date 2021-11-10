import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  // state: any;
  // id: number;


  
  constructor(private router: Router,
     public tableService: TableService) {

    // const navigation = this.router.getCurrentNavigation();
    // this.state = navigation?.extras.state;
    // this.id = navigation?.extras.state?.customerID;
    //   console.log(this.tableService.state,'state-table');
      
  }

  ngOnInit(): void {
  }

 


  // navigate(id: number) {
  //   this.router.navigate([`admin/transaction-history/${id}`, { state: id }]);
  // }

  // applyDateFilter() {
    
  //   this.tableService.dataSource = this.tableService.dataSource.filter(e => 
  
  //     e.transactionDate >= this.form.value.fromDate.toISOString().replace(/.\d+Z$/g, "") && e.transactionDate <= this.form.value.toDate.toISOString().replace(/.\d+Z$/g, "")
  //   );
  //   console.log(this.tableService.dataSource, 'this.tableService.dataSource');
  // }
















  // onFormSubmitPeriod() {
  //   console.log('Is Form Invalid', this.dateRangeForm.invalid);
  //   console.log(this.dateRangeForm.value.fromDate, 'date');
  //   // this.dataSource = this.dataSource.filter((e: { transactionDate: number; date: number; }) => e.transactionDate >= this.dateRangeForm.value.fromDate && e.date <= this.dateRangeForm.value.toDate);
  // }

}

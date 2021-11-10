import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from 'src/app/services/table.service';
import { UserlistService } from 'src/app/services/userlist.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit  {
  state: any;
  id!: number;
  


  
  constructor(private router: Router,
     public tableService: TableService,
     public service: UserlistService,
     private route: ActivatedRoute,) {

    // const navigation = this.router.getCurrentNavigation();
    // this.state = navigation?.extras.state;
    // this.id = navigation?.extras.state?.customerID;
    //   console.log(this.tableService.state,'state-table');
      
  }

  ngOnInit(): void {
    // const navigation = this.router.getCurrentNavigation();

    this.route.queryParams.subscribe(params => {
      // this.name = params['name'];
      this.id = params['id']
      console.log(params,'params')
    });

    
    
    this.service.getById(String(this.id)).then(res=>{
      console.log(res,'reees')
      return this.state = res})

      this.tableService.getAll(String(this.id));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes,'card changes')
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

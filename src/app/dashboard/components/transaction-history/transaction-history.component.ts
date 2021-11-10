import { Router } from '@angular/router';
import {
  Component,
  ElementRef,
  OnInit,
  SimpleChanges,
  VERSION,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { TableService } from 'src/app/services/table.service';

import jsPDF from 'jspdf';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css'],
})
export class TransactionHistoryComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('htmlData') htmlData!: ElementRef;

  form = new FormGroup({
    fromDate: new FormControl(null, { validators: [Validators.required] }),
    toDate: new FormControl(null, { validators: [Validators.required] }),
  });

  
  

  displayedColumns: string[] = [
    'transactionId',
    'transactionDate',
    'transactionType',
    'fromAccount',
    'toAccount',
    'amount',
    'transactionStatus',
  ];
  constructor(private router: Router, public tableService: TableService) {}

  ngOnInit(): void {

    
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes,'changeees')
  }

  applyDateFilter() {
const fromDate = this.form.value.fromDate.toISOString().replace(/.\d+Z$/g, '');
const toDate = this.form.value.toDate.toISOString().replace(/.\d+Z$/g, '')

this.tableService.applyDateFilter(fromDate,toDate)

    console.log("filter")
    // this.tableService.dataSource = this.tableService.dataSource.filter(
    //   (e) =>
    //     e.transactionDate >=
    //       this.form.value.fromDate.toISOString().replace(/.\d+Z$/g, '') &&
    //     e.transactionDate <=
    //       this.form.value.toDate.toISOString().replace(/.\d+Z$/g, '')

    // );
    
  }

  // PDF
  name: string = 'Angular ' + VERSION.major;

  public openPDF(): void {
    const Data = this.htmlData.nativeElement;
    const doc = new jsPDF('p', 'px', 'a4');
    const doc2 = new jsPDF();
    doc.html(Data, {
      autoPaging: true,
      width: 20,
      x: 15,
      y: 10,
      windowWidth: 20,
      callback: function (doc) {
        doc.output('dataurlnewwindow');
      },
    });
  }

  public downloadPDF(): void {
    const data = this.htmlData.nativeElement;
    const doc = new jsPDF('p', 'px', 'a4');
    const handleElement = {
      '#editor'(element: any, renderer: any): boolean {
        return true;
      },
    };

    doc.html(data, {
      autoPaging: true,
      width: 20,
      x: 15,
      y: 10,
      windowWidth: 20,
      callback: function (doc) {
        doc.save('angular-demo.pdf');
      },
    });
  }
}

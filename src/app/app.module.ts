import { ConfirmationPageComponent } from './dashboard/components/create-transaction/confirmation-page/confirmation-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {DatePipe} from '@angular/common';


import { UserlistService } from './services/userlist.service';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  ErrorStateMatcher,
  MatOption,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { PaymentComponent } from './dashboard/components/payment/payment.component';
import { HistoryComponent } from './dashboard/components/history/history.component';
import { WrapperComponent } from './dashboard/components/wrapper/wrapper.component';
import { UserlistComponent } from './dashboard/components/userlist/userlist.component';
import { CreateUserComponent } from './dashboard/components/dialogs/create-user/create-user.component';
import { CreateTransactionComponent } from './dashboard/components/create-transaction/create-transaction.component';
import { TransferComponent } from './dashboard/components/create-transaction/transfer/transfer.component';
import { DepositComponent } from './dashboard/components/create-transaction/deposit/deposit.component';
import { WithdrawComponent } from './dashboard/components/create-transaction/withdraw/withdraw.component';
import { LoginComponent } from './login/login.component';

import { MatMenuModule } from '@angular/material/menu';
import { EditUserComponent } from './dashboard/components/dialogs/edit-user/edit-user.component';


import { WrapperComponentUser } from './dashboard/components/wrapper-user/wrapper-user.component';
import { UserCardComponent } from './dashboard/components/user-card/user-card.component';
import { TransactionHistoryComponent } from './dashboard/components/transaction-history/transaction-history.component';




@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    PaymentComponent,
    HistoryComponent,
    WrapperComponent,
    WrapperComponentUser,
    UserlistComponent,
    CreateUserComponent,
    EditUserComponent,
    CreateTransactionComponent,
    ConfirmationPageComponent,
    TransferComponent,
    DepositComponent,
    WithdrawComponent,
    UserCardComponent,
    TransactionHistoryComponent,
  ],
  imports: [MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [MatToolbarModule, MatTableModule, MatDialogModule],
  providers: [UserlistService,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

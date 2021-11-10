import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponentUser } from './components/wrapper-user/wrapper-user.component';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { ConfirmationPageComponent } from './components/create-transaction/confirmation-page/confirmation-page.component';
import { ConfirmationResultComponent } from './components/create-transaction/confirmation-page/confirmation-result/confirmation-result.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TransferComponent } from './components/create-transaction/transfer/transfer.component';
import { DepositComponent } from './components/create-transaction/deposit/deposit.component';
import { WithdrawComponent } from './components/create-transaction/withdraw/withdraw.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponentUser,
    children: [
      {
        path: 'create-transaction',
        component: CreateTransactionComponent,
        children: [{
            path : 'transfer',
            component: TransferComponent
           },
           {
            path : 'deposit',
            component: DepositComponent
           },
           {
            path : 'withdraw',
            component: WithdrawComponent
           },
        ]
      },
      {
        path: 'confirmation',
        component: ConfirmationPageComponent,
      },
      {
        path: 'confirmation-result',
        component: ConfirmationResultComponent,
      },
      {
        path: 'user-account',
        component: UserAccountComponent,
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingCustomerModule {}

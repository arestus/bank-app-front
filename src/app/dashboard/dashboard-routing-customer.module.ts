import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { WrapperComponentUser } from './components/wrapper-user/wrapper-user.component';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { ConfirmationPageComponent } from './components/create-transaction/confirmation-page/confirmation-page.component';
import { ConfirmationResultComponent } from './components/create-transaction/confirmation-page/confirmation-result/confirmation-result.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponentUser,
    children: [
      {
        path: 'history',
        component: HistoryComponent,
      },
      {
        path: 'create-transaction',
        component: CreateTransactionComponent,
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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingCustomerModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

// Set redirection Path
let redirection: (para: boolean) => string;
redirection = function (pass: boolean): string {
  if (pass) {
    return '/login';
  } else {
    return '/admin';
  }
};
//set Routes
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', redirectTo: redirection(false) }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

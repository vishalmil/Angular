import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreshInvestmentsComponent } from './fresh-investments/fresh-investments.component';
import { InvestmentsComponent } from './investments/investments.component';
import { FindMyInvestmentComponent } from './find-my-investment/find-my-investment.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component'

export const routes: Routes = [
    { path: '', redirectTo: '/my-dashboard', pathMatch: 'full' },
    { path: 'my-dashboard', component: MyDashboardComponent },
    { path: 'investments', component: InvestmentsComponent },
    { path: 'fresh-investments', component: FreshInvestmentsComponent },
    { path: 'find-my-investment', component: FindMyInvestmentComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
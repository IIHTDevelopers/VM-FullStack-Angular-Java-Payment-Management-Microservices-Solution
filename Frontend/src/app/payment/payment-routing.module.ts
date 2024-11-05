import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { PaymentCreateComponent } from './components/payment-create/payment-create.component';

const routes: Routes = [
  { path: '', component: PaymentListComponent },
  { path: 'create', component: PaymentCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }

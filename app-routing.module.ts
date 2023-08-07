import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewitemComponent } from './newitem/newitem.component';
import { ViewallitemsComponent } from './viewallitems/viewallitems.component';
import { NewadminComponent } from './newadmin/newadmin.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { DeleteitemComponent } from './deleteitem/deleteitem.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Router } from '@angular/router';

const routes: Routes = [
  {path:"additem",component:NewitemComponent},
  {path:"showitem",component:ViewallitemsComponent},
  {path:"NewAdmin",component:NewadminComponent},
  {path:"NewCustomer",component:NewCustomerComponent},
  {path:"showitems",component:DeleteitemComponent},
  {path:"HomePage",component:HomepageComponent}
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

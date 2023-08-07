import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewadminComponent } from './newadmin/newadmin.component';
import {FormsModule} from '@angular/forms';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { NewitemComponent } from './newitem/newitem.component';
import { DeleteitemComponent } from './deleteitem/deleteitem.component';
import { ViewallitemsComponent } from './viewallitems/viewallitems.component';
import { SearchcomponentComponent } from './searchcomponent/searchcomponent.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DeletecomponentitemnameComponent } from './deletecomponentitemname/deletecomponentitemname.component'

@NgModule({
  declarations: [
    AppComponent,
    NewadminComponent,
    NewCustomerComponent,
    NewitemComponent,
    DeleteitemComponent,
    ViewallitemsComponent,
    SearchcomponentComponent,
    HomepageComponent,
    DeletecomponentitemnameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

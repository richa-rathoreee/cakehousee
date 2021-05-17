import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HighlightDirective } from './highlight.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CakecardComponent } from './cakecard/cakecard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { ToastrModule } from 'ngx-toastr';


import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { LogInComponent } from './log-in/log-in.component';
import { SearchDirective } from './search.directive';
import { SearchCakesComponent } from './search-cakes/search-cakes.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { CakecartComponent } from './cakecart/cakecart.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { AdminComponent } from './admin/admin.component';
import { EditcakeFormComponent } from './editcake-form/editcake-form.component';
import { OrderComponent } from './order/order.component';
import { AddressComponent } from './address/address.component';
import { OrderSummeryComponent } from './order-summery/order-summery.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    AddUserComponent,
    HighlightDirective,
    NavbarComponent,
    CarouselComponent,
    CakecardComponent,
  
    SearchBarComponent,
       HomeComponent,
       LoginComponent,
       SignupComponent,
       ForgotPassComponent,
       LogInComponent,
       SearchDirective,
       SearchCakesComponent,
       CakedetailComponent,
       CakecartComponent,
       PlaceOrderComponent,
       AdminComponent,
       EditcakeFormComponent,
       OrderComponent,
       AddressComponent,
       OrderSummeryComponent,
       PaymentComponent,
       ConfirmOrderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import {GaurdService} from "./gaurd.service"


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
import { GaurdDeactivateService } from './gaurd-deactivate.service';
import { AddcakeComponent } from './addcake/addcake.component';
import { DiscountPipe } from './discount.pipe';

import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";
import {NgxPaginationModule} from 'ngx-pagination';
import {
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "#660022",
  bgsPosition: POSITION.centerCenter,
  bgsSize: 80,
  bgsOpacity:1,
  // bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 10, // progress bar thickness
  
};

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
       ConfirmOrderComponent,
       AddcakeComponent,
       DiscountPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderHttpModule, // import NgxUiLoaderHttpModule. By default, it will show background loader.
    // If you need to show foreground spinner, do as follow:
    // NgxUiLoaderHttpModule.forRoot({ showForeground: true })
    // Import NgxUiLoaderModule with custom configuration globally
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxPaginationModule
    
  ],



  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true},
     GaurdService,
     GaurdDeactivateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

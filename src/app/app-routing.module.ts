import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AddressComponent } from './address/address.component';
import { AdminComponent } from './admin/admin.component';
import { CakecartComponent } from './cakecart/cakecart.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { EditcakeFormComponent } from './editcake-form/editcake-form.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { GaurdDeactivateService } from './gaurd-deactivate.service';
import { GaurdService } from './gaurd.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderSummeryComponent } from './order-summery/order-summery.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchCakesComponent } from './search-cakes/search-cakes.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { UserTableComponent } from './user-table/user-table.component';



const routes: Routes = [
   {path:"", component: HomeComponent},
   {path:"search",component:SearchBarComponent},
   {path:"searchcakes", component:SearchCakesComponent},
   {path:"cakedetails",component:CakedetailComponent},
   {path:"cakecart",component:CakecartComponent},
   {path:"placeorder",component:PlaceOrderComponent,children: [
   
    {
      path: '',
      component: OrderSummeryComponent // another child route component that the router renders
    },
    {
      path: 'ordersummery',
      component: OrderSummeryComponent // another child route component that the router renders
    },
    {
      path: 'address', // child route path
      component:AddressComponent, // child route component that the router renders
    },
    {
      path: 'payment',
      component: PaymentComponent ,canDeactivate:[GaurdDeactivateService]// another child route component that the router renders
    },
    {
      path: 'confirmorder',
      component: ConfirmOrderComponent // another child route component that the router renders
    },
   
  ]},

   {path:"admin",loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
   
   {path:"cakeeditform/:cakeid",component:EditcakeFormComponent},
   {path:"myorder",component:OrderComponent},
   

  {path:"home",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent,canActivate:[GaurdService]},
  {path:"forgot",component:ForgotPassComponent},
  {path:"cakedetails/:cakeid",component:CakedetailComponent}


  // {path:"" Component:}
  // {path:"" Component:}
  // {path:"" Component:}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

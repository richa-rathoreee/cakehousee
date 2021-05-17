import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EditcakeFormComponent } from '../editcake-form/editcake-form.component';


const routes:Routes=[
  {path:"",component:AdminComponent},
  {path:"cakeeditform/:cakeid",component:EditcakeFormComponent}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]

})
export class AdminModule { }

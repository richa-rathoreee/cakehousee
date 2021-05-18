import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate } from '@angular/router';
import { PaymentComponent } from 'cakebakery/src/app/payment/payment.component';
export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}
@Injectable({
  providedIn: 'root'
})
export class GaurdDeactivateService implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component: CanComponentDeactivate) {
      return component.canDeactivate ? component.canDeactivate() : true;
    }
 
  

  constructor() { }
}

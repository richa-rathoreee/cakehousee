import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate } from '@angular/router';

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

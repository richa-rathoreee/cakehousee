import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GaurdService implements CanActivate {

  constructor(private route:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    console.log(route,state);
    // return true;
    if(state.url==="/login"){
      if(localStorage.token){
        this.route.navigate(['/home']);
        return false
      }else{
        return true;
      }
    }
    if(!localStorage.token){
      this.route.navigate(['/login']);
      return false;
    }
    else{
      return true;
    }
  }
}

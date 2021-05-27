import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { catchError } from 'rxjs/operators'

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResolveruService implements Resolve<any>{
  constructor(private http:HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.post("https://apifromashu.herokuapp.com/api/cakecart",{})
  
  }  
}

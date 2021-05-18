import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{CommonService} from '../common.service'

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  placeOrder:any={}

  cPlaceOrder(){
    let apiUrll="https://apibyashu.herokuapp.com/api/addcakeorder";
    this.http.post(apiUrll,this.placeOrder).subscribe(
      (res:any)=>{
        console.log(res);
      },
    (err)=>{
      console.log(err);
    })


}
  constructor(private cs:CommonService,private http:HttpClient) { 
    console.log("cssssssss  co",this.cs.confirmOrder)
    console.log("helo")
    this.placeOrder=this.cs.confirmOrder

   
  }

  ngOnInit(): void {
  }

}

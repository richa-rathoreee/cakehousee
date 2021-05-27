import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import{CommonService} from '../common.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  placeOrder:any={}
  item:any
  total:any
//place order on server
  cPlaceOrder(){
    let apiUrll="https://apibyashu.herokuapp.com/api/addcakeorder";
    //hit the post request
    this.http.post(apiUrll,this.placeOrder).subscribe(
      (res:any)=>{
        console.log(res);
        this.item=res.data
        if(res.messageg=="order placed"){
          this.toastr.success("order placed Successfully");
          this.cs.orderConfirmVar=false;
          this.cs.summery=false;
          this.cs.address=false
          this.router.navigate(['/home']);  
        }
        
      },
    (err)=>{
      console.log(err);
    })


}
  constructor(
    private cs:CommonService,
    private http:HttpClient ,
    private toastr:ToastrService,
    private router:Router ) { 

    console.log("cssssssss  co",this.cs.confirmOrder)
  
    this.item=this.cs.confirmOrder.cakes;
  //total of cakes price
    this.total = this.item.reduce((acc: any, item: any) => {
      return acc+ item.price * item.quantity 

      }, 0)
      console.log("totalll",this.total)
    this.placeOrder=this.cs.confirmOrder

   
  }

  ngOnInit(): void {
  }

}

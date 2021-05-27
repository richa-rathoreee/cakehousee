import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-order-summery',
  templateUrl: './order-summery.component.html',
  styleUrls: ['./order-summery.component.css']
})
export class OrderSummeryComponent implements OnInit {


  order:any
  total:any;

next(){
  this.route.navigate(['/placeorder/address']);
  this.cs.address=true;
  this.cs.summery=true;
}
  constructor(private http:HttpClient,private route:Router,private cs:CommonService) { 
    let apiUrl = "https://apibyashu.herokuapp.com/api/cakecart";
    this.http.post(apiUrl,{}).subscribe(
      (res:any)=>{
        console.log(res.data)
        this.order=res.data;
        this.total = this.order.reduce((acc: any, item: any) => {

          //  console.log(item.price, item.quantity)
            return acc+ item.price * item.quantity 
    
    
            // console.log("total",item)
    
          }, 0)

      }
    ,(err)=>{
      console.log(err);

    })
  }

  ngOnInit(): void {
  }

}

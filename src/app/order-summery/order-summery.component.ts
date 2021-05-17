import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summery',
  templateUrl: './order-summery.component.html',
  styleUrls: ['./order-summery.component.css']
})
export class OrderSummeryComponent implements OnInit {


  order:any


  constructor(private http:HttpClient) { 
    let apiUrl = "https://apibyashu.herokuapp.com/api/cakecart";
    this.http.post(apiUrl,{}).subscribe(
      (res:any)=>{
        console.log(res.data)
        this.order=res.data;

      }
    ,(err)=>{
      console.log(err);

    })
  }

  ngOnInit(): void {
  }

}

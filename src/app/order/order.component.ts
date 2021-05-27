import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderDetails: any
  toggle: any = true;

  showDetail(i: any) {// show details of order
    console.log(i);
    let id = document.querySelector(`#id${i}`);
    id?.classList.toggle("hidden");

  }


  constructor(private http: HttpClient) {
    let apiUrl = "https://apibyashu.herokuapp.com/api/cakeorders";
    this.http.post(apiUrl, {}).subscribe(
      (res: any) => {
        console.log(res);
        this.orderDetails = res.cakeorders
        this.orderDetails.forEach((ele: any) => {
          let date = new Date(ele.orderdate);
          ele.orderdate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

        });
        // console.log(this.orderDetails)
        // console.log(this.orderDetails[0].cakes[0].quantity)


      },
      (err) => {
        console.log(err);
      })
  }


  // hide(i:any) {
  //   this.toggle = true;
  //   document.querySelector(`#id${i}`)?.classList.add('hidden');
  // }

  ngOnInit(): void {
  }


}

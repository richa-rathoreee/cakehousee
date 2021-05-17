import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cakecart',
  templateUrl: './cakecart.component.html',
  styleUrls: ['./cakecart.component.css']
})
export class CakecartComponent implements OnInit {

  items: any;
  total: any;


  removeFromCart(item: any) {

    let apiUrl = "https://apibyashu.herokuapp.com/api/removecakefromcart"
    this.http.post(apiUrl, { cakeid: item.cakeid }).subscribe(
      (response: any) => {
        console.log("item removed", response);
        this.toastr.success("Item removed")
      }, (error) => {
        console.log(error);
      })

  }


  placeOrder() {


  }

  constructor(private http: HttpClient,
    private router: Router, private toastr: ToastrService) {

    let myHeaders = new HttpHeaders();
    let apiUrl = "https://apibyashu.herokuapp.com/api/cakecart";
//    console.log(apiUrl);
    myHeaders = myHeaders.set("authtoken", localStorage.token)
    this.http.post(apiUrl, {}, {
      headers: myHeaders

    }).subscribe(
      (response: any) => {
        console.log(response);
        this.items = response.data;
        console.log(this.items)
        this.total = this.items.reduce((acc: any, item: any) => {

        //  console.log(item.price, item.quantity)
          return acc+ item.price * item.quantity 


          // console.log("total",item)

        }, 0)
        console.log(this.total)

      },
      (err) => {
        console.log(err);
      })

}

  ngOnInit(): void {
  }

}

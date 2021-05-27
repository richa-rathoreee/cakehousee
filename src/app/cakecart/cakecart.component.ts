import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cakecart',
  templateUrl: './cakecart.component.html',
  styleUrls: ['./cakecart.component.css']
})
export class CakecartComponent implements OnInit {

  items: any;
  total: any;
  noData: any

  getCart() {
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
        if (response.message == "your cart is empty") {
          this.noData = true;
        }
        //console.log(this.items)
        this.total = this.items.reduce((acc: any, item: any) => {// to calculate total of cakes price
          return acc + item.price * item.quantity

        }, 0)
        console.log(this.total)

      },
      (err) => {
        console.log(err);
      })

  }
  removeFromCart(item: any) { // funtion to remove cake from cake cart

    let apiUrl = "https://apibyashu.herokuapp.com/api/removecakefromcart"
    this.http.post(apiUrl, { cakeid: item.cakeid }).subscribe(
      (response: any) => {
        console.log("item removed", response)
        this.router.navigate(["/cakecart"])
        this.toastr.success("Item removed")
        this.getCart();

      }, (error) => {
        console.log(error);
      })

  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute) {

    this.getCart()


  }

  ngOnInit(): void {
  }
  ngDoCheck() {

  }
}

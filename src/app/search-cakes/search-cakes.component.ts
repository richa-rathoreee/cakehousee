import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { CommonService } from '../common.service'

@Component({
  selector: 'app-search-cakes',
  templateUrl: './search-cakes.component.html',
  styleUrls: ['./search-cakes.component.css']
})
export class SearchCakesComponent implements OnInit {
  minPrice: any;
  maxPrice: any;
  teststring: any;
  //cakes:any=[...this.cs.cardCollection];

  cakes: any = {}
  noData:any={}


  constructor(private route: ActivatedRoute, public cs: CommonService, private http: HttpClient) {
    console.log("query params", this.route.snapshot.queryParams);

    let apiUrl = "https://apibyashu.herokuapp.com/api/searchcakes?q=";
    this.route.queryParams.subscribe((cakee: any) => {
      console.log(cakee);//query params 
      if (cakee.q) {// if value of query params is true
        console.log(cakee.q);
        this.http.get(apiUrl + cakee.q).subscribe((resposne: any) => {
          console.log(resposne)
          this.cakes = resposne.data;//saving res to this.cakesobject
          console.log(this.cakes.length==0);

          if(this.cakes.length==0){// if array of cakes length is zero
            this.noData=true;
          }
          else{
            this.noData=false;
          }
          
         
          
        },
          (error) => {
            console.log(error,)

          })
        }
  

    })
  }  
  priceFilter() {//filter the price 
    // console.log(this.minPrice, this.maxPrice);
    if (this.minPrice || this.maxPrice) {
      this.cakes = this.cakes.filter((e: any) =>
        (this.minPrice ? e.price >= this.minPrice : true) &&
        (this.maxPrice ? e.price <= this.maxPrice : true)
      );
      return;
    }
    this.cakes = [...this.cakes]

  }
 // caketype = this.cs.cardCollection;
  ngOnInit(): void {
  }

}






















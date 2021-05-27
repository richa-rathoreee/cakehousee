import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-cakecard',
  templateUrl: './cakecard.component.html',
  styleUrls: ['./cakecard.component.css']
})
export class CakecardComponent implements OnInit {
  p: number = 1;//pagination 

  cakescard: any
  //cakeCard = this.cs.cardCollection;
  getcakeid(cake: any) {  //function to get id of clicked cake

    console.log(cake.cakeid)
    this.route.navigate(['cakedetails/', cake.cakeid]);

  }

  constructor(
    public cs: CommonService,
    private route: Router,
    private http: HttpClient) {

    let apiUrl = "https://apibyashu.herokuapp.com/api/allcakes"
    // console.log(apiUrl)
    this.http.get(apiUrl).subscribe(  //to communicate with server that is api
      (response: any) => {
        console.log("response from cakes", response);
        this.cakescard = response.data;


      },
      (error) => {
        console.log("error from cakes", error)

      })
  }

  ngOnInit(): void {
  }

}

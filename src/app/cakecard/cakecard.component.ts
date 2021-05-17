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
 


  cakescard: any
  //cakeCard = this.cs.cardCollection;
  getcakeid(cake: any) {

    console.log(cake.cakeid)
    this.route.navigate(['cakedetails/', cake.cakeid]);

  }

  constructor(
    public cs: CommonService,
    private route: Router,
    private http: HttpClient) {
      
      // setTimeout(function(){
      //   alert("loading")
        
      // },100);

    let apiUrl = "https://apibyashu.herokuapp.com/api/allcakes"
    console.log(apiUrl)
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log("response from cakes", response)
        // console.log(response.data[0].name)
         console.log(response.data);
        this.cakescard = response.data;
        

      },
      (error) => {
        console.log("error from cakes", error)

      })
  }

  ngOnInit(): void {
  }

}

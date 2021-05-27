import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  cakes: any

  editCakeDetails(cake: any) {
    //console.log(cakeid);
    console.log("cliicked")
    this.router.navigate(['cakeeditform/', cake.cakeid])


  }

  constructor(private http: HttpClient, private router: Router) {

    let apiUrl = "https://apifromashu.herokuapp.com/api/allcakes"
    console.log(apiUrl);
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log("response from cakes", response)

        // console.log(response.data[0].name)
        // console.log(response.data);
        this.cakes = response.data;
        console.log(this.cakes);

      },
      (error) => {
        console.log("error from cakes", error)

      })
  }


  ngOnInit(): void {
  }

}

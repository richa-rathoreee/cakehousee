import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
  constructor(private http:HttpClient){
    let apiUrl="https://apibyashu.herokuapp.com/api/getuserdetails"
    this.http.get(apiUrl).subscribe(
      (res:any)=>{
         console.log("get userrrrrrrrr",res);
         
      },
      (err)=>{
        console.log(err)
        if(err.ok===false){
          localStorage.clear();
        }

    })
    console.log(apiUrl);


  }
}

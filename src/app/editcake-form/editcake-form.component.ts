import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcake-form',
  templateUrl: './editcake-form.component.html',
  styleUrls: ['./editcake-form.component.css']
})

export class EditcakeFormComponent implements OnInit {
  cake:any

  constructor(private http:HttpClient,private route:ActivatedRoute) { 
    console.log("hey/");
    let cakeid = (this.route.snapshot.params.cakeid);
    let apiUrl = `https://apifromashu.herokuapp.com/api/cake/${cakeid}`
    console.log(apiUrl);
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log(response.data);
        this.cake = response.data;
         console.log(this.cake)
         console.log("ownerrrrrrrrrrrr",this.cake.owner.name)
      },
      (error) => {
        console.log(error);
      })
  }
updateImage(event:any){
  let myHeader=new HttpHeaders()
  const file = event.target.files[0];
  let fd=new FormData();
  fd.append("fd",file);
  console.log(fd);


}
  saveChanges(){
    let objchanges={
      name:this.cake.name,
      ingrediants:this.cake.ingredients,
      price:this.cake.price,
      eggless:this.cake.eggless



    }
    console.log(objchanges)
  }

  ngOnInit(): void {
  }

}

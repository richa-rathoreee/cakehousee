import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service'
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cakedetail',
  templateUrl: './cakedetail.component.html',
  styleUrls: ['./cakedetail.component.css']
})
export class CakedetailComponent implements OnInit {
  cake: any = {}
  objCard: any
  file: any
  api: any

  addToCart(card: any) {

    if (!localStorage.userLog) {

      this.toastr.error("Please login First");
      this.router.navigate(['login/']);

    }
    else if (localStorage.userLog) {
      console.log(this.cake);
      this.objCard = {
        cakeid: this.cake.cakeid,
        name: this.cake.name,
        weight: this.cake.weight,
        image: this.cake.image,
        price: this.cake.price
      };
      console.log(this.objCard);
    }

    let myHeaders = new HttpHeaders();
    let apiUrl = "https://apibyashu.herokuapp.com/api/addcaketocart"

    myHeaders = myHeaders.set('authtoken', localStorage.token)
    this.http.post(apiUrl, this.objCard, {
      headers: myHeaders
    }).subscribe((response: any) => {
      console.log("headers", response)
      this.toastr.success("item added to cart sucssesfully");



    }, (error) => {
      console.log("error", error)

    })

  }
  // selectFile(event: any) {
  //   if (event.targer.files.length > 0) {
  //     this.file = event.target.files[0];
  //     //this.objCard.get("image").setValue("file");
  //   }

  // }


  // uplaodImg(event: any) {
  //   this.file = event.target.files[0];
  //   console.log(this.file)
  //   let apiUrl = "https://apibyashu.herokuapp.com/api/upload";

  //   let fd = new FormData();

  //   fd.append("file", this.file)
  //   this.http.post(apiUrl, fd)
  //     .subscribe(
  //       (response: any) => {
  //         console.log(response);

  //       },
  //       (error) => {
  //         console.log(error);

  //       })

  // }

  constructor(
    private route: ActivatedRoute,
    private cs: CommonService,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {//for carddetails data 

    console.log("hey/");
    let cakeid = (this.route.snapshot.params.cakeid);
    let apiUrl = `https://apibyashu.herokuapp.com/api/cake/${cakeid}`
    this.api = apiUrl;
    console.log(apiUrl);
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log(response.data);
        this.cake = response.data;
        // console.log(this.cake)
      },
      (error) => {
        console.log(error);
      })

  }
  getcake():
    Observable<any> {
    // We do not subscribe here! We let the resolver take care of that...
    return this.http.get(this.api);
  }

  ngOnInit(): void {
  }

}





































    // this.http.get(apiUrl).subscribe(
    //   (response: any) => {
    //     console.log("response from cakes", response)
    //     console.log(response.data[0].name)
    //     console.log(response.data);
    //     console.log(response.data[0].cakeid)
    //     this.cake=response.data;


    //   },
    //   (error) => {
    //     console.log("error from cakes", error)

    //   })
    //   console.log(this.cake)


    // let id=Number(this.route.snapshot.params.cakeid);
    // this.cake=this.cs.cardCollection.filter((e:any)=>e.cakeid==id)
    // console.log(this.cake)
    // console.log(this.cake[0].name);




    // console.log(id);
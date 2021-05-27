import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrls: ['./addcake.component.css']
})
export class AddcakeComponent implements OnInit {






  // cake:any={}
  // addCake(){
  //   let objAddCake={
  //     name:this.cake.name,
  //     ingrediants:this.cake.ingredients,
  //     price:this.cake.price,
  //     eggless:this.cake.eggless,
  //     description:this.cake.description,
  //     weight:this.cake.weight
  //   }
  //   console.log("hello add cake")
  //   console.log(objAddCake);
  // }
  // store the cake details
  cake: any = {};
  // store the cake ingrediants
  ingrediant: any = {};
  ingredients: any = [];
  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    private cs: CommonService,
    private router: Router ) {

  }

  ngOnInit(): void { }
  // add cake
  addcake() {

    // validate the cake input fields
    if (this.cs.validateCakeDetail(this.cake)) {
      //ingrediants array
      this.ingredients = Object.values(this.ingrediant);
      console.log(this.ingredients)
      // filter out the valid ingrediant valuess
      this.ingredients = [...this.ingredients].filter(
        (e: any) => {
          console.log(e);
          return e;
        }

      );
      //  ingredients array in the cake object
      this.cake.ingredients = [...this.ingredients];
      let apiUrl = "https://apibyashu.herokuapp.com/api/addcake";


      this.http.post(apiUrl, this.cake).subscribe(
        (res: any) => {
          // check if the cake added successful
          if (res.message === 'Success') {
            this.toastr.success(`Cake Added Successfully.`);
            this.router.navigate(['/admin']);
            return;
          }
         
        },
        (err) => {
          //display this server error
          this.toastr.error(err.message);
          console.log(err);
        }
      );

      return;
    }
    this.toastr.info('Please fill all input.');
  }

  // image upload method
  uploadImg(e: any) {
    //parent of tag
    e = e.target.parentElement;
    // select the file input tag
    const file: any = e.querySelector('#image'),
    
      //  formData object 
      formData: any = new FormData();

  
    if (!file.files[0]) {

      this.toastr.info('choose the image');
      return;
    }




    // append uploaded image to formData
    formData.append('file', file.files[0]);
    let apiUrll = "https://apibyashu.herokuapp.com/api/upload";

    // hit post request to uplaod image
    this.http.post(apiUrll, formData).subscribe(
      (res: any) => {
        // check if image uploaded
        if (res.imageUrl) {
          this.toastr.success('Image Uploaded Successfuly');

          this.cake.image = res.imageUrl;
        } else {

          this.toastr.warning('Image Upload failed!!');
        }
      },
      (err) => {
        // display the error message
        console.log(err);
        this.toastr.error('Image Upload failed!!');
      }
    );
  }
  // method to delete ingrediant
  deleteIng(i: any) {
  
    this.ingrediant.slice(i,1)
    this.ingredients = Object.values(this.ingrediant);
  }
  // method to add ingrediant
  addIng(e: any) {
    this.ingredients = Object.values(this.ingrediant);
    this.ingredients.push('');
  }
  // preview the image before uploading
  imgPre(ele: any) {
    // select the file input tag
    const file: any = ele.target,
      // select the image tag to preview the image
      img: any = document.querySelector('.preview');
    // create the url to preview image
    img.src = URL.createObjectURL(file.files[0]);
  }


}
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router"
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message: any;
  user: any = {}
  signUp() {//sign up method
    console.log(this.user);
    let apiUrl = "https://apibyashu.herokuapp.com/api/register"
    this.http.post(apiUrl, this.user).subscribe((response: any) => {//hit post hhtp reqst
      console.log("response from signUp", response)
      this.message = response.message
      if (response.message == "User Already Exists") {//check if user already exist
        this.toastr.error("User Already Exist");
        this.router.navigate(['/login'])// navigate it to login page

      }
    }, (error) => {
      console.log("error from sign up", error)

    })
  }

  constructor(private http: HttpClient, private router: Router,private toastr:ToastrService) {

  }

  ngOnInit(): void {
  }

}

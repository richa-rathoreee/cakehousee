import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message: any;
  user: any = {}
  signUp() {
    console.log(this.user);
    let apiUrl = "https://apibyashu.herokuapp.com/api/register"
    this.http.post(apiUrl, this.user).subscribe((response: any) => {
      console.log("response from signUp", response)
      this.message = response.message
      if (response.message == "User Already Exists") {
        this.router.navigate(['/login'])

      }
    }, (error) => {
      console.log("error from sign up", error)

    })
  }

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
  }

}

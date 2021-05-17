import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
  email: any

  forgotPass() {
    console.log(this.email)
    let apiUrl = "https://apibyashu.herokuapp.com/api/recoverpassword"
    this.http.post(apiUrl, { email: this.email }).subscribe(
      (response: any) => {
        console.log("response from signUp", response)

        alert("passward sent to your email")
        this.router.navigate(['/login'])


      }, (error) => {
        console.log("error in recover", error)

      })


  }

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

}

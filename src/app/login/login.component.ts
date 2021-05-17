import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonService} from '../common.service'
import{HttpClient} from '@angular/common/http'
import {SignupComponent} from "../signup/signup.component"
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:any;
  user:any={}
  
  
  login() {
    console.log(this.user);
    let apiUrl="https://apibyashu.herokuapp.com/api/login"
    console.log(apiUrl)
    this.http.post(apiUrl,this.user).subscribe(
      (response:any)=>{
        if(response.token){
          localStorage.setItem('userLog',JSON.stringify(response))
          console.log("response from token",response);

          localStorage.setItem('token',response.token)
  
          this.toastr.success("Login succesful");
          this.router.navigate(['/home'])
        }
        else{
          localStorage.removeItem("userLog");
          this.toastr.error("wrong credentials")
        }
      //console.log("response from login",response)
     
      
    },
    (error)=>{
      console.log("error from login",error)

    })
  }
  

  

  constructor(private router:Router,private cs:CommonService,private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

}

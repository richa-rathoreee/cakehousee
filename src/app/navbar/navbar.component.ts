import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchcakes: any;
  logBtn: any;
  admin:any;
  

  search() {
    if (this.searchcakes) {
    
      this.route.navigate(['/searchcakes'], { queryParams: { q: this.searchcakes } })
      //routing to the route searchcakes component with the value q=seachcakes
    }
  }
  logout() {
    localStorage.removeItem("userLog");// remove the userlog object from localstorage as user logout
    localStorage.removeItem("token")//remove token
  }

  constructor(private route: Router) {

  }
  ngOnInit(): void {
  }
  ngDoCheck() {
    (localStorage.userLog) ? (this.logBtn = false) : (this.logBtn = true);
     this.admin=localStorage.userLog?JSON.parse(localStorage.userLog).email:null;
   

    //if local storage has uselog obj then btn set to logout otherwise set to login
  }



}














//  // if (localStorage.userLog){ 
    //   this.logBtn = false;}
    // if (!localStorage.userLog) {
    //   this.logBtn = true}
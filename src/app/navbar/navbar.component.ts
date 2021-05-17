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

  search() {
    if (this.searchcakes) {
      console.log(this.route);
      console.log(this.searchcakes);
      this.route.navigate(['/searchcakes'], { queryParams: { q: this.searchcakes } })
      //routing to the route searchcakes component with the value q=seachcakes
    }
  }
  logout() {
    localStorage.removeItem("userLog");// remove the serlog object as user logout
  }

  constructor(private route: Router) {

  }
  ngOnInit(): void {
  }
  ngDoCheck() {
    (localStorage.userLog) ? (this.logBtn = false) : (this.logBtn = true);
    //if local storage has uselog obj then btn set to logout otherwise set to login
  }



}














//  // if (localStorage.userLog){ 
    //   this.logBtn = false;}
    // if (!localStorage.userLog) {
    //   this.logBtn = true}
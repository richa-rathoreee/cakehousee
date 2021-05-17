import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {CommonService} from '../common.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  add(){
     console.log(this.user)
      console.log(this.cs.userDetails.push(this.user));
      this.user={}
  }
  user:any={

  }
    constructor(private cs:CommonService) {
}

  ngOnInit(): void {

    // add(){
    //   if()
    // }
  }
  

}

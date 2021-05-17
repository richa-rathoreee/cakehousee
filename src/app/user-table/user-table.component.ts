import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  details=this.data.userDetails;//array
  
  delete(){

    

    
    
  }

  constructor(private data:CommonService) { }

  ngOnInit(): void {
  }

}

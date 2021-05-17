import { Component, OnInit } from '@angular/core';
import{CommonService} from '../common.service'

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  constructor(private cs:CommonService) { 
    console.log(this.cs.confirmOrder)
    console.log("helo")
  }

  ngOnInit(): void {
  }

}

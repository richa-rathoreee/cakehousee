import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../gaurd-deactivate.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements CanComponentDeactivate {
  canDeactivate(){
    return confirm("are you sure");
  }

  constructor() { }

  ngOnInit(): void {
  }
  
}

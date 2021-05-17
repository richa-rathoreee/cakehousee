import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  //slider:any
   slider:any=this.cs.cousousel

  constructor(private cs:CommonService) {
   
    
   }

  ngOnInit(): void {
   console.log(this.slider)

    

  }

}

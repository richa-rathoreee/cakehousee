import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

credentials:any={

}
confirmOrder:any={
  
}

  cousousel:any=[
    "https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //"https://i.pinimg.com/originals/ab/67/53/ab6753ec1cef75f1cc2052487b1f4059.jpg",
   // "/assets/cake1.jpeg",
   "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   //"https://images.pexels.com/photos/4987182/pexels-photo-4987182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/159887/pexels-photo-159887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/433527/pexels-photo-433527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  ]

  // cardCollection:any=[

  //   {
  //     id:1,
  //     image:"/assets/cake4.jpg",
  //     name:"Vanila",
  //     eggless:true,
  //     price:"100 Rs.",
  //     weight:".5 kg"
  //   },
  //   {
  //     id:2,
  //     image:"/assets/cake4.jpg",
  //     name:"Chocolate",
  //     eggless:false,
  //     price:"500 Rs.",
  //     weight:"2.5 kg"
      
  //   },
  //   { id:3,
  //     image:"/assets/cake2.jpg",
  //     name:"Butterscotch",
  //     eggless:true,
  //     price:"300 Rs.",
  //     weight:"1.5 kg"
  //   },
  //   { 
  //     id:4,
  //     image:"/assets/cake2.jpg",
  //     name:"Blackforest",
  //     eggless:true,
  //     price:"500 Rs.",
  //     weight:"3 kg"
  //   },
  //   { 
  //     id:5,
  //     image:"/assets/cake4.jpg",
  //     name:"Vanila",
  //     eggless:true,
  //     price:"300 Rs.",
  //     weight:"2 kg"
  //   },
  //   {
  //     id:6,
  //     image:"/assets/cake4.jpg",
  //     name:"Chocolate",
  //     eggless:false, 
  //      price:"100 Rs.",
  //     weight:"2 kg"
  //   },
  //   {
  //     id:7,
  //     image:"/assets/cake2.jpg",
  //     name:"Butterscotch",
  //     eggless:false,
  //     price:"100 Rs.",
  //     weight:".5 kg"
  //   },
  //   {
  //     id:8,
  //     image:"/assets/cake2.jpg",
  //     name:"Blackforest",
  //     eggless:true,
  //     price:"300 Rs.",
  //     weight:"2 kg"
  //   }

  // ]
  cardCollection:any=[];
 cakeCollection:any=this.cardCollection;

  
  userDetails:any=[];

  constructor() { }
  ValidateEmail(input:any) {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      
  
      return false;
  
    }

}
}


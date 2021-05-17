import { Directive ,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  htmlElement:any
  // @Input() enterColor:any
  // @Input() leaveColor:any
  // @Input() colors:any
  

  constructor(private element:ElementRef) {
   // console.log(this.element)
    this.htmlElement=this.element.nativeElement
    // this.htmlElement.style.color="yellow";
     //console.log("I am directive i will work");

   }
   @HostListener('mouseenter') redColor(){
    //  this.htmlElement.style.backgroundColor=this.enterColor
      this.htmlElement.classList.add("enter");
   }
   @HostListener('mouseleave') yellowColor(){
    // this.htmlElement.style.backgroundColor=this.leaveColor
    this.htmlElement.classList.remove("enter");
  }
  ngOnInit(){
    //console.log(this.colors);
  }

}

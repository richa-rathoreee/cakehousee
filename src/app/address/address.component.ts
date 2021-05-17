import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  order: any = {}
  objOrder:any
  total:any;
  item:any;




  placeOrder() {
    //console.log(this.order)
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let  forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event: any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })



    //console.log(this.order)
    let apiUrl = "https://apibyashu.herokuapp.com/api/cakecart";

    this.http.post(apiUrl, {}).subscribe((response: any) => {
      //console.log(response)
     // console.log({ order: this.order, res: response.data })
     this.item=response.data
     this.total = this.item.reduce((acc: any, item: any) => {

      //  console.log(item.price, item.quantity)
        return acc+ item.price * item.quantity 


        // console.log("total",item)

      }, 0)
      console.log(this.total)

      this.objOrder={
        
        name:this.order.userName,
        address:this.order.userAddress,
        city:this.order.userCity,
        pincode:this.order.userPin,
        price:this.total,
        cakes:response.data,
        phone:this.order.userPhone
        

        
      }
    

      console.log(this.objOrder)
      this.toastr.show("order placed")


    }, (error) => {
      console.log(error)

    })

    let apiUrll="https://apibyashu.herokuapp.com/api/addcakeorder";
    this.http.post(apiUrll,this.objOrder).subscribe(
      (res:any)=>{
        console.log(res);
      },
    (err)=>{
      console.log(err);
    })


    


  }


  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}

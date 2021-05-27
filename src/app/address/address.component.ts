import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service'


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  order: any = {}
  objOrder: any
  total: any;
  item: any;




  addDetail() {
    // console.log(",mkjhkhjgjmgjj")

    if (!this.order.name || !this.order.address ||
      !this.order.phone || !this.order.pincode || !this.order.city) {
        this.toastr.show("please fill all details");


      // // Fetch all the forms we want to apply custom Bootstrap validation styles to
      // let forms = document.querySelectorAll('.needs-validation')

      // // Loop over them and prevent submission
      // Array.prototype.slice.call(forms)
      //   .forEach(function (form) {
      //     form.addEventListener('submit', function (event: any) {
      //       if (!form.checkValidity()) {
      //         event.preventDefault()
      //         event.stopPropagation()
      //       }

      //       form.classList.add('was-validated')
      //     }, false)
      //   })

    }

    else {
      console.log("else")
      let apiUrl = "https://apibyashu.herokuapp.com/api/cakecart";
      this.http.post(apiUrl, {}).subscribe((response: any) => {
        this.item = response.data;
        this.total = this.item.reduce((acc: any, item: any) => {
          return acc + item.price * item.quantity
        }, 0)
        console.log(this.total)

        this.objOrder = {

          name: this.order.name,
          address: this.order.address,
          city: this.order.city,
          pincode: this.order.pincode,
          price: this.total,
          cakes: response.data,
          phone: this.order.phone
        }


        
        // this.toastr.show("Details added")
        console.log(this.cs.confirmOrder);
        this.cs.confirmOrder = this.objOrder;
        this.router.navigate(["/placeorder/confirmorder"])
        this.cs.orderConfirmVar = true;
        this.cs.address = true;


      }, (error) => {
        console.log(error)

      })
    }

  }


  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private cs: CommonService,
    private router: Router) {
    this.cs.confirmOrder = this.objOrder


  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import swal from 'sweetalert2';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers :[MessageService]
})
export class ProductComponent {
productList = [
  {id:'1', pdtName : 'Noodles' , pdtPrice: 14, pdtQty: 3 } , 
  {id:'2', pdtName : 'Cool Drink' , pdtPrice: 23, pdtQty: 2 } ,
  {id:'3', pdtName : 'Pasta' , pdtPrice: 14, pdtQty: 10 } ,
  {id:'4', pdtName : 'Mango' , pdtPrice: 14, pdtQty: 8 },
  {id:'5', pdtName : 'Dates' , pdtPrice: 12, pdtQty: 10 },
  {id:'6', pdtName : 'Mustard' , pdtPrice: 15, pdtQty: 19 }
];

constructor(private router : Router, private spinner: NgxSpinnerService , private messageService: MessageService){

}

gettotal(pdtPrice : number , pdtQty : number)  {
return pdtPrice*pdtQty;
}

deletepdt(i : number){
   swal.fire({
      position: 'center',
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think'
    }).then((result) => {
      if (result.value) {
        this.productList.splice(i,1);
        // swal.fire(
        //   'Removed!', 
        //   'Item removed successfully.',
        //   'success'
        // )
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Deleted Sucessfully'});
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire(
          'Cancelled',
          'Item is safe.)',
          'error'
        )
      }
    })
 }
spin(){
  this.spinner.show();

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 500);
}


back()
{
this.router.navigateByUrl('/');
}

}

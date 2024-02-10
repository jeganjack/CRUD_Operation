import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector:'app-cart',
templateUrl:'./cart.component.html',
styleUrls:['./cart.component.css']
})

export class CartComponent{
    pdtStatus : string = "Yet Not Created";
    productCount : number = 0;
isCreate = false;
isRemove =false;

    constructor(private router : Router){
        console.log('Cart Component Created.');
    }

addCartItems(){
    this.pdtStatus="Product Created ";
console.log('Add to cart button is working');
this.productCount += 1;
if(this.productCount == 5){ 
    this.isCreate = true;
}else{
    this.isRemove = false;
}
 }


removeCartItems(){
        console.log('remove from cart button is working');
        if(this.productCount > 0){
            this.productCount = this.productCount - 1; 
           this.isCreate = false;
        } else{
            this.pdtStatus = "Yet Not Created";
            this.isRemove = true;
         } 
}
// back(){
//     this.router.navigateByUrl('/productlist');
// }
}
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { EcomdataService } from 'src/app/shared/service/ecomdata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[] = []

  constructor( private _EcomdataService:EcomdataService ,
     private _CartService:CartService ,
      private _ToastrService:ToastrService ){}

  ngOnInit(): void {
    this._EcomdataService.getAllProducts().subscribe({
      next:(response)=>{
        // console.log(response);
        this.products = response.data
        console.log(this.products);
        
      }
    })
  }


  addCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message , "Fresh Cart") 
        this._CartService.cartNumber.next(response.numOfCartItems)
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { WhishlistService } from 'src/app/shared/services/whishlist.service';

@Component({
  selector: 'app-whislist',
  templateUrl: './whislist.component.html',
  styleUrls: ['./whislist.component.css']
})
export class WhislistComponent implements OnInit {

  products:Product[] = []
  wishListData:string[] = []

  constructor(private _WhishlistService:WhishlistService , 
    private _ToastrService:ToastrService,
    private _CartService:CartService
    ){}


  ngOnInit(): void {
      this._WhishlistService.getWhishList().subscribe({
        next:(response)=>{
          console.log(response);
          this.products = response.data
          const newData = response.data.map( (item:any)=>item._id )
          this.wishListData = newData
        }
      })
  }

  addWishList(productId:string):void{
    this._WhishlistService.addToWhishList(productId).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message)
        this.wishListData = response.data;
      }
    })
  }

  removeWishList(productId:string):void{
    this._WhishlistService.removeWhishList(productId).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message)
        this.wishListData = response.data;

        const newProductData = this.products.filter( (item:any)=> this.wishListData.includes(item._id) )
        this.products = newProductData;

        // this._WhishlistService.getWhishList().subscribe({
        //   next:(response)=>{
        //     this.products = response.data
        //   }
        // })
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

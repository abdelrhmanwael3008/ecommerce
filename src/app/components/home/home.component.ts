import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/service/ecomdata.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WhishlistService } from 'src/app/shared/services/whishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Product[] = []
  categories:any [] = []
  wishListData:string[] = []
  searchTerm:string = "";




  

  CategoriesOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true,
    autoplay:true
  }

  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
  items: 1,
    nav: true,
    autoplay:true
  }

  constructor( 
    private _EcomdataService:EcomdataService , 
    private _CartService:CartService , 
    private _ToastrService:ToastrService , 
    private _WhishlistService:WhishlistService ){}

  addCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message , "Fresh Cart") 
        this._CartService.cartNumber.next(response.numOfCartItems)
        console.log(this._CartService.cartNumber);
        
      },
      error:(err)=>{
        console.log(err);
        
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
      }
    })
  }


  ngOnInit(): void {

    //get All Products
      this._EcomdataService.getAllProducts().subscribe({
        next:(response)=>{
          // console.log(response);
          this.products = response.data
        }
      })

      //get Categories

      this._EcomdataService.getCategories().subscribe({
        next:(response)=>{
          console.log(response);
          this.categories = response.data
        }
      })

      this._WhishlistService.getWhishList().subscribe({
        next:(response)=>{
          console.log(response.data);
          const newData = response.data.map( (item:any)=>item._id )
          this.wishListData = newData
          console.log("newData" , newData);
        }
      })




  }




}

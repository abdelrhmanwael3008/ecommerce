import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/service/ecomdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  constructor( private _ActivatedRoute:ActivatedRoute , private _EcomdataService:EcomdataService ){}


  productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
  items: 1,
    nav: true,
    autoplay:true
  }


  productDetails:Product = {} as Product ;

  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:( params )=>{
          let idProduct:any = params.get('id')
          
          this._EcomdataService.getProductDetails(idProduct).subscribe({
            next:(response)=>{
              this.productDetails = response.data;
              console.log(this.productDetails);
            }
          })
          
        }
      })
  }

}

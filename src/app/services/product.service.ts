import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    console.log("service called")
   }

  //  to retain some data
  getProductData(){
    return[
      {name: 'IPhone', category:'mobile', price:12000},
      {name: 'Samsung S25', category:'mobile', price:11000},
      {name: 'Dell', category:'mobile', price:10000},
    ]
  }
}

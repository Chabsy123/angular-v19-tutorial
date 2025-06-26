import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
/**
  constructor() {
  // Logs when the service is instantiated by Angular's DI system
  console.log("service called");
}


 * Returns a static list of product objects.
 * This simulates fetching data — typically from an API.
 * 
 * Can be used across components due to Angular's singleton service pattern.
 
getProductData() {
  return [
    { name: 'IPhone', category: 'mobile', price: 12000 },
    { name: 'Samsung S25', category: 'mobile', price: 11000 },
    { name: 'Dell', category: 'mobile', price: 10000 },
  ];
}
*/

// Call REST API with Services

constructor(private http: HttpClient) {}

  /**
   * Fetches a list of products from the dummyjson API.
   * Returns an Observable to be subscribed to in the component.
   */
  productList() {
    const url = "https://dummyjson.com/products";
    return this.http.get(url);
  }
}

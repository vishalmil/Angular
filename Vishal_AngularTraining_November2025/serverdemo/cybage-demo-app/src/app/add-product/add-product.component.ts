import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../model/product';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productElement:Product;
  
  constructor(private httpClient:HttpClient){
    this.productElement={id:0, name:"", price:0};
  }

  addProductDetails(){
    this.httpClient.post("http://localhost:3000/products", this.productElement).subscribe(response =>{
      console.log("Product added successfully", response);
    });
    this.productElement={id:0, name:'', price:0};
  }
}

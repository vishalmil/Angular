import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-all-products',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './show-all-products.component.html',
  styleUrl: './show-all-products.component.css'
})
export class ShowAllProductsComponent {
  products: Product[] = [];

  constructor(private http: HttpClient) {
      
    }

  fetchAllProducts():void{
    console.log('The button is clicked!');
    this.http.get<any[]>('http://localhost:3000/products').subscribe(data =>{
        this.products = data;
      });
      console.log(this.products);
      
  }
}

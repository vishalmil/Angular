import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './find-product.component.html',
  styleUrl: './find-product.component.css'
})
export class FindProductComponent {
  pid: number = 0;
  product : Product[] = [];

  constructor(private http:HttpClient){

  }

  findProductDetails():void{
    console.log('The button is clicked!');
    this.http.get<any[]>(`http://localhost:3000/products/${this.pid}`).subscribe(data =>{
        this.product = data;
      });
      console.log(this.product);
      
  }
}

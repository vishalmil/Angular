import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowAllProductsComponent } from './show-all-products/show-all-products.component';
import { FindProductComponent } from "./find-product/find-product.component";

@Component({
  selector: 'cyb-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, HttpClientModule, AddProductComponent, ShowAllProductsComponent, FindProductComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string;
  message: string;
  elseMessage: string;
  productList: any[] = [];
  userList: any[] = [];
  status: boolean;
  status1: boolean;

  constructor(private http: HttpClient) {
    this.title = 'Developing Angular Application at Cybage';
    this.status = true;
    this.status1 = false;
    this.message = "welcome to Angular 14+ Standalone Components";
    this.elseMessage = 'No Message to display here.';
  }

  ngOnInit(){
    // this.http.get<any[]>('http://localhost:3000/products').subscribe(data =>{
    //   this.productList = data;
    // });
    // console.log(this.productList);
    // this.http.get<any[]>('http://localhost:3000/users').subscribe(data =>{
    //   this.userList = data;
    // });
  }

  printMessage():void{
    console.log('The button is clicked!');
    console.log(this.productList);
    this.http.get<any[]>('http://localhost:3000/products').subscribe(data =>{
        this.productList = data;
      });
      console.log(this.productList);
      this.http.get<any[]>('http://localhost:3000/users').subscribe(data =>{
        this.userList = data;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MainscreenComponent } from '../../../components/components/mainscreen/mainscreen.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MainscreenComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }
  productsList: any;
  isAdmin = localStorage.getItem('isAdmin');

  getProducts() {
    this.http.post('http://127.0.0.1:8000/api/getProducts', {})
      .subscribe({
        next: (response: any) => {

          this.productsList = response.data
          console.log(this.productsList)
        }, error: error => {
          console.log(error)
        }
      })
  }

  viewProduct(id: any) {
    var id = id
    this.router.navigate(['products/products/', id]);

  }
  createProduct(){
    this.router.navigate(['products/create']);
  }

}

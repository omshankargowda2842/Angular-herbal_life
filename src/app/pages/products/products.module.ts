import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes:Routes=[
  {
    path:'',component:ProductListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }

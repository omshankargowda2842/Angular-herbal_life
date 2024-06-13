import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { MainscreenComponent } from '../../components/components/mainscreen/mainscreen.component';
import { ComponentsModule } from '../../components/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsCreateComponent } from './products-create/products-create.component';

const routes:Routes=[
  {
    path:'',component:ProductListComponent
  },
  {
    path:'products/:id',component:ProductViewComponent
  },
  {
    path:'create',component:ProductsCreateComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MainscreenComponent,
    RouterModule,
    HttpClientModule

  ]
})
export class ProductsModule { }

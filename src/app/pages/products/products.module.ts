import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { MainscreenComponent } from '../../components/components/mainscreen/mainscreen.component';
import { ComponentsModule } from '../../components/components/components.module';

const routes:Routes=[
  {
    path:'',component:ProductListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MainscreenComponent,
    RouterModule
    
  ]
})
export class ProductsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';

const routes:Routes=[
  {
    path:'',component:ProfileViewComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class ProfileModule { }

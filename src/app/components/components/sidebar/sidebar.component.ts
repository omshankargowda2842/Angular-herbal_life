import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router:Router){}

  ngOnInit():void {
console.log('ngoninit')
  }


  

  profileClick(){
    this.router.navigate(['/profile'])

  }
  productsClick(){
    this.router.navigate(['/products'])

  }
  ordersClick(){
   
  }
logoutClick(){
  this.router.navigate(['/login'])
  localStorage.removeItem('token')
}



}

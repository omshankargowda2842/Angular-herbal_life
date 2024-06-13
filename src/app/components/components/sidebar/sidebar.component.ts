import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router:Router){}

  ngOnInit():void {
  }
  selected:string= localStorage.getItem('tab') || 'dashboard'




  selectedTab(tab:string){
    localStorage.setItem('tab',tab)
    this.selected=tab
    if(this.selected=='logout'){
      this.logoutClick();
    }

  }

logoutClick(){
  this.router.navigate(['/login'])
  localStorage.setItem('token','')
  localStorage.setItem('tab','dashboard')

  localStorage.setItem('isLoggedIn', 'false');

}



}

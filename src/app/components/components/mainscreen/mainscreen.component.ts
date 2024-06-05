import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-mainscreen',
  standalone: true,
  imports: [SidebarComponent,FooterComponent],
  templateUrl: './mainscreen.component.html',
  styleUrl: './mainscreen.component.css'
})
export class MainscreenComponent {

}

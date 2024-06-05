import { Component } from '@angular/core';
import { MainscreenComponent } from '../../../components/components/mainscreen/mainscreen.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MainscreenComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}

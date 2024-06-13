import { Component } from '@angular/core';
import { MainscreenComponent } from '../../../components/components/mainscreen/mainscreen.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [MainscreenComponent,CommonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

}

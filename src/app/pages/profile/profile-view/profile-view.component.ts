import { Component } from '@angular/core';
import { MainscreenComponent } from '../../../components/components/mainscreen/mainscreen.component';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [MainscreenComponent],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css'
})
export class ProfileViewComponent {

}

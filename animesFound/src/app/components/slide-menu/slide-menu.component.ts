import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-slide-menu',
  standalone: true,
  imports: [
    NavbarComponent,
    SideMenuComponent
  ],
  templateUrl: './slide-menu.component.html',
  styleUrl: './slide-menu.component.scss',

})
export class SlideMenuComponent {

}

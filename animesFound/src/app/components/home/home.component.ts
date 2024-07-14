import { Component , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SlideMenuComponent } from '../slide-menu/slide-menu.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SlideMenuComponent,
    SideMenuComponent,
    CarouselComponent,
    AccordionComponent,
    NewsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}

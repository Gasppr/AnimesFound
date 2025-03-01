import { Component , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SlideMenuComponent } from '../../components/slide-menu/slide-menu.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { NewsComponent } from '../../components/news/news.component';

@Component({
    selector: 'app-home',
    imports: [
        SlideMenuComponent,
        SideMenuComponent,
        CarouselComponent,
        AccordionComponent,
        NewsComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}

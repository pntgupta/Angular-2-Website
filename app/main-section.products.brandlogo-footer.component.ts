import {Component} from '@angular/core';

import {BrandLogoMock} from './Mocks/brand-logo.mock';
import {NavigationLinks_SliderImagesMock} from './Mocks/navigation-link_slider-images.mock';

@Component({
	selector: 'brandlogo_footer-app',
	templateUrl: 'app/html/main-section.products.brandlogo-footer.component.html',
	styleUrls:['app/css/main-section.products.brandlogo-footer.component.css']
})
export class MainSection_Products_BrandLogoFooterComponent{
	title = "Brands";
	brandLogoImagesArray;
	navigationLinks;

	ngOnInit(){
		this.brandLogoImagesArray = BrandLogoMock;
		this.navigationLinks = NavigationLinks_SliderImagesMock.links;
	}
}
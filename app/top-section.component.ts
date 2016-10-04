import {Component} from '@angular/core';

import {NavigationLinks_SliderImagesMock} from './Mocks/navigation-link_slider-images.mock';

@Component({
	selector: 'top-app',
	templateUrl: 'app/html/top-section.component.html',
	styleUrls: ['app/css/top-section.component.css']
})
export class TopSectionComponent{
	navigationLinks;
	SliderImagesArray;
	currentSliderImageIndex=0;

	checklast(value){
		return this.navigationLinks.map(function(obj){return obj.name}).indexOf(value) == this.navigationLinks.length-1
	}

	sliderNext(){
		//Checking if current slider image is last then start again from zero
		if(this.currentSliderImageIndex == this.SliderImagesArray.length-1)
			this.currentSliderImageIndex=0;
		else
			this.currentSliderImageIndex++;
	}

	sliderPrev(){
		//Checking if current slider image is first then make it last
		if(this.currentSliderImageIndex == 0)
			this.currentSliderImageIndex=this.SliderImagesArray.length-1;
		else
			this.currentSliderImageIndex--;
	}

	ngOnInit(){
		this.navigationLinks = NavigationLinks_SliderImagesMock.links;
		this.SliderImagesArray = NavigationLinks_SliderImagesMock.sliderImages;
	}
}
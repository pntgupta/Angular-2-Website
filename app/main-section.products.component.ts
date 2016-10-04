import {Component} from '@angular/core';

import {ProductDetailsService} from './product-details.service';

@Component({
	selector: 'main_products-app',
	templateUrl: 'app/html/main-section.products.component.html',
	styleUrls: ['app/css/main-section.products.component.css']
})
export class MainSection_ProductsComponent{
	GetShoesDetailsFromService;
	shoesDetails;
	tabsName;

	constructor(private productDetailsService : ProductDetailsService){}

	ngOnInit(){
		this.GetShoesDetailsFromService=this.productDetailsService.getProductDetails().shoesDetail;
		this.shoesDetails=this.GetShoesDetailsFromService;
		this.tabsName=this.productDetailsService.getProductDetails().tabsName;
	}

	UpdateData(tabname){
		//Which tab was previously active
		var prevIndex = this.tabsName.map(function(obj){return obj.status}).indexOf('active');

		//Tab on which clicked
		var currentIndex = this.tabsName.map(function(obj){return obj.name}).indexOf(tabname);
		
		if(prevIndex!=currentIndex)
		{
			//Updating current tab selection
			this.tabsName[prevIndex].status="default";
			this.tabsName[currentIndex].status="active";

			//Rendering all products
			this.shoesDetails=this.productDetailsService.getProductDetails().shoesDetail;

			switch(currentIndex)
			{
				case 0 :
					this.shoesDetails=this.shoesDetails.filter(function(obj){return obj.safety==true;})
					break;
				case 1 :
					this.shoesDetails=this.shoesDetails.filter(function(obj){return obj.sports==true;})
					break;
				default :
					break;

			}			
		}
	}
}
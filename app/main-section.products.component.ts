import {Component} from '@angular/core';

import {ProductDetailsService} from './product-details.service';

@Component({
	selector: 'main_products-app',
	templateUrl: 'app/html/main-section.products.component.html',
	styleUrls: ['app/css/main-section.products.component.css']
})
export class MainSection_ProductsComponent{
	//It stores values coming from json so that we don't need to extract these values again and again
	GetDetailsFromService;

	shoesDetails;
	tabsName;

	//Local variable used for cloning of status array as tabsName cannot be cloned coz its array of object
	tabStatusArray;

	constructor(private productDetailsService : ProductDetailsService){}

	ngOnInit(){
		this.GetDetailsFromService=this.productDetailsService.getProductDetails();

		this.shoesDetails=this.GetDetailsFromService.shoesDetail;
		this.tabsName=this.GetDetailsFromService.tabsName;
		this.tabStatusArray=this.tabsName.map(function(obj){return obj.status});
	}

	UpdateData(tabname){
		//Which tab was previously active
		var prevIndex = this.tabsName.map(function(obj){return obj.status}).indexOf('active');

		//Tab on which clicked
		var currentIndex = this.tabsName.map(function(obj){return obj.name}).indexOf(tabname);
		
		if(prevIndex!=currentIndex)
		{
			//Updating prev tab to original value but if in json it was default active then don't make it equal to original valus as there will be 2 active states now, make it default in that case
			this.tabsName[prevIndex].status=this.tabStatusArray[prevIndex]=="active" ? "default" : this.tabStatusArray[prevIndex];
			//Making current tab active
			this.tabsName[currentIndex].status="active";

			//Reverting all products to original values
			this.shoesDetails=this.GetDetailsFromService.shoesDetail;

			switch(currentIndex)
			{
				case 0 :
					//Creating new array by filter method so array is cloned not referenced
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
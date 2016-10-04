import {Injectable} from '@angular/core';
import {ProductDetails} from './Mocks/product-details.mock';

@Injectable()
export class ProductDetailsService{
	getProductDetails(){
		return ProductDetails;
	}
}
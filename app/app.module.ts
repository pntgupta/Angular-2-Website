import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TopSectionComponent} from './top-section.component';
import {MainSectionComponent} from './main-section.component';
import {MainSection_SearchComponent} from './main-section.search.component'
import {MainSection_ProductsComponent} from './main-section.products.component'
import {MainSection_Products_BrandLogoFooterComponent} from './main-section.products.brandlogo-footer.component'

import {ProductDetailsService} from './product-details.service';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent,TopSectionComponent,MainSectionComponent,MainSection_SearchComponent,MainSection_ProductsComponent,MainSection_Products_BrandLogoFooterComponent],
	bootstrap: [AppComponent],
	providers: [ProductDetailsService]
})

export class AppModule{}
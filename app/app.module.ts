import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TopSectionComponent} from './top-section.component';
import {MainSectionComponent} from './main-section.component';
import {MainSection_SearchComponent} from './main-section.search.component'

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent,TopSectionComponent,MainSectionComponent,MainSection_SearchComponent],
	bootstrap: [AppComponent]
})

export class AppModule{}
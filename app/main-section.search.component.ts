import {Component,OnChanges} from '@angular/core';

@Component({
	selector: 'main_search-app',
	templateUrl: 'app/html/main-section.search.component.html',
	styleUrls: ['app/css/main-section.search.component.css'],
	inputs:['CartValue']
})
export class MainSection_SearchComponent{
	CartValue : number;
}
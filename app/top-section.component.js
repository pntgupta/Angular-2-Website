"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var navigation_link_slider_images_mock_1 = require('./Mocks/navigation-link_slider-images.mock');
var TopSectionComponent = (function () {
    function TopSectionComponent() {
        this.currentSliderImageIndex = 0;
    }
    TopSectionComponent.prototype.checklast = function (value) {
        return this.navigationLinks.map(function (obj) { return obj.name; }).indexOf(value) == this.navigationLinks.length - 1;
    };
    TopSectionComponent.prototype.sliderNext = function () {
        //Checking if current slider image is last then start again from zero
        if (this.currentSliderImageIndex == this.SliderImagesArray.length - 1)
            this.currentSliderImageIndex = 0;
        else
            this.currentSliderImageIndex++;
    };
    TopSectionComponent.prototype.sliderPrev = function () {
        //Checking if current slider image is first then make it last
        if (this.currentSliderImageIndex == 0)
            this.currentSliderImageIndex = this.SliderImagesArray.length - 1;
        else
            this.currentSliderImageIndex--;
    };
    TopSectionComponent.prototype.ngOnInit = function () {
        this.navigationLinks = navigation_link_slider_images_mock_1.NavigationLinks_SliderImagesMock.links;
        this.SliderImagesArray = navigation_link_slider_images_mock_1.NavigationLinks_SliderImagesMock.sliderImages;
    };
    TopSectionComponent = __decorate([
        core_1.Component({
            selector: 'top-app',
            templateUrl: 'app/html/top-section.component.html',
            styleUrls: ['app/css/top-section.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TopSectionComponent);
    return TopSectionComponent;
}());
exports.TopSectionComponent = TopSectionComponent;
//# sourceMappingURL=top-section.component.js.map
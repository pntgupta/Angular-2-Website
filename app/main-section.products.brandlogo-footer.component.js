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
var brand_logo_mock_1 = require('./Mocks/brand-logo.mock');
var navigation_link_slider_images_mock_1 = require('./Mocks/navigation-link_slider-images.mock');
var MainSection_Products_BrandLogoFooterComponent = (function () {
    function MainSection_Products_BrandLogoFooterComponent() {
        this.title = "Brands";
    }
    MainSection_Products_BrandLogoFooterComponent.prototype.ngOnInit = function () {
        this.brandLogoImagesArray = brand_logo_mock_1.BrandLogoMock;
        this.navigationLinks = navigation_link_slider_images_mock_1.NavigationLinks_SliderImagesMock.links;
    };
    MainSection_Products_BrandLogoFooterComponent = __decorate([
        core_1.Component({
            selector: 'brandlogo_footer-app',
            templateUrl: 'app/html/main-section.products.brandlogo-footer.component.html',
            styleUrls: ['app/css/main-section.products.brandlogo-footer.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MainSection_Products_BrandLogoFooterComponent);
    return MainSection_Products_BrandLogoFooterComponent;
}());
exports.MainSection_Products_BrandLogoFooterComponent = MainSection_Products_BrandLogoFooterComponent;
//# sourceMappingURL=main-section.products.brandlogo-footer.component.js.map
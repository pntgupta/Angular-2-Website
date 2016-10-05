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
var product_details_service_1 = require('./product-details.service');
var MainSection_ProductsComponent = (function () {
    function MainSection_ProductsComponent(productDetailsService) {
        this.productDetailsService = productDetailsService;
        this.clickedOnProduct = new core_1.EventEmitter();
    }
    MainSection_ProductsComponent.prototype.ngOnInit = function () {
        this.GetDetailsFromService = this.productDetailsService.getProductDetails();
        this.shoesDetails = this.GetDetailsFromService.shoesDetail;
        this.tabsName = this.GetDetailsFromService.tabsName;
        this.tabStatusArray = this.tabsName.map(function (obj) { return obj.status; });
    };
    MainSection_ProductsComponent.prototype.UpdateData = function (tabname) {
        //Which tab was previously active
        var prevIndex = this.tabsName.map(function (obj) { return obj.status; }).indexOf('active');
        //Tab on which clicked
        var currentIndex = this.tabsName.map(function (obj) { return obj.name; }).indexOf(tabname);
        if (prevIndex != currentIndex) {
            //Updating prev tab to original value but if in json it was default active then don't make it equal to original valus as there will be 2 active states now, make it default in that case
            this.tabsName[prevIndex].status = this.tabStatusArray[prevIndex] == "active" ? "default" : this.tabStatusArray[prevIndex];
            //Making current tab active
            this.tabsName[currentIndex].status = "active";
            //Reverting all products to original values
            this.shoesDetails = this.GetDetailsFromService.shoesDetail;
            switch (currentIndex) {
                case 0:
                    //Creating new array by filter method so array is cloned not referenced
                    this.shoesDetails = this.shoesDetails.filter(function (obj) { return obj.safety == true; });
                    break;
                case 1:
                    this.shoesDetails = this.shoesDetails.filter(function (obj) { return obj.sports == true; });
                    break;
                default:
                    break;
            }
        }
    };
    MainSection_ProductsComponent.prototype.AddtoCart = function (shoeDetail) {
        this.clickedOnProduct.emit(shoeDetail.price);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MainSection_ProductsComponent.prototype, "clickedOnProduct", void 0);
    MainSection_ProductsComponent = __decorate([
        core_1.Component({
            selector: 'main_products-app',
            templateUrl: 'app/html/main-section.products.component.html',
            styleUrls: ['app/css/main-section.products.component.css']
        }), 
        __metadata('design:paramtypes', [product_details_service_1.ProductDetailsService])
    ], MainSection_ProductsComponent);
    return MainSection_ProductsComponent;
}());
exports.MainSection_ProductsComponent = MainSection_ProductsComponent;
//# sourceMappingURL=main-section.products.component.js.map
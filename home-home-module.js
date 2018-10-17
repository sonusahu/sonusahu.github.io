(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/layout/home/home-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/home/home-routing.module.ts ***!
  \****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/layout/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/layout/home/home.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \r\n\t<!-- Section Main Templet -->\r\n    <div class=\"layout-main\">\r\n        <div class=\"site-width home-bg\">\r\n        <div class=\"main-container\">        \r\n\t       <!-- Banner part start -->\r\n            <div class=\"banner-main clearfix\">\r\n                <div class=\"banner-img\">\r\n                </div>\r\n                <div class=\"banner-content\">\r\n                    <h2>LEADERSHIP</h2>\r\n                    <p>At PeopleStrong we endeavour to provide a formidable platform for professionals destined to be our change agents.</p>\r\n                    <button type=\"button\" class=\"btn btn-primary\">know more</button>\r\n                </div>\r\n                <div class=\"banner-signin\">\r\n                    <p>Already applied? Track your jobs' status</p>\r\n                    <a [routerLink]=\"['/login']\" class=\"btn btn-primary\">sign in</a>\r\n                    <div class=\"new-user clearfix\">\r\n                    \tNew User? <a [routerLink]=\"['/createaccount']\" class=\"link\">register</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"banner-drop-cv\">\r\n                    <p>Get started and be part of out database for all openings</p>\r\n                    <a [routerLink]=\"['/edit_profile']\"class=\"btn btn-primary\">drop your cv</a>\r\n                </div>\r\n            </div>\r\n            <!-- \\\\ End Banner part  -->\r\n            \r\n            <div class=\"container935\">\r\n                <h2 class=\"page-title\">SEARCH JOBS</h2>\r\n                <div class=\"search-form\">\r\n                    \r\n                    <form class=\"search-by-name-form\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Search job name or job code...\"/>\r\n                        <a href=\"job.html\" class=\"search-by-name-btn\"><img src=\"images/svg/search.svg\" alt=\"Search\" title=\"Search\"></a>\r\n                    </form>\r\n                    \r\n                    <form class=\"search-by-preference-form\">\r\n                        <label class=\"form-title\">Or search by preference</label>\r\n                        <div class=\"form-group row2\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"dropdown-11 list-block\">\r\n                                        <select class=\"selectpicker\">\r\n                                        <option>Role</option>\r\n                                        <option>01</option>\r\n                                        <option>02</option>\r\n                                        <option>03</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"dropdown-11 list-block\">\r\n                                        <select class=\"selectpicker\">\r\n                                        <option>Location</option>\r\n                                        <option>01</option>\r\n                                        <option>02</option>\r\n                                        <option>03</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"dropdown-11 list-block\">\r\n                                        <select class=\"selectpicker\">\r\n                                        <option>Experience</option>\r\n                                        <option>01</option>\r\n                                        <option>02</option>\r\n                                        <option>03</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <a href=\"job.html\" class=\"search-by-preference-btn btn\"><img src=\"images/svg/search.svg\" alt=\"Search\" title=\"Search\"><span>search</span></a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    \r\n                    <form class=\"search-by-department-form\">\r\n                        <label class=\"form-title\">Or search by department</label>\r\n                        <div class=\"form-group row2\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Human Resource\">\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Finance\">\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Marketing\">\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Information Technology\">\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Sales\">\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Consulting\">\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Corporate Community\">\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Research & Development\">\r\n                                </div>\r\n                                <!--\r\n                                <div class=\"col-sm-4\">\r\n                                    <button class=\"btn search-by-department\">Add skill set</button>\r\n                                </div>\r\n                                -->\r\n                                \r\n                            </div>\r\n                        </div>\r\n                    </form>                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <!-- \\\\ End Section Main Templet -->    \r\n  "

/***/ }),

/***/ "./src/app/layout/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(translate) {
        this.translate = translate;
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }
    HomeComponent.prototype.ngOnInit = function () {
        localStorage.setItem('user', "sonu");
        console.log(localStorage.getItem('user'));
    };
    HomeComponent.prototype.changeLang = function (language) {
        alert(language);
        this.translate.use(language);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/layout/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/layout/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/layout/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map
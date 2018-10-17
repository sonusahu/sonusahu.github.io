(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hiring-process-hiring-process-module"],{

/***/ "./src/app/layout/hiring-process/hiring-process-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/hiring-process/hiring-process-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: HiringProcessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiringProcessRoutingModule", function() { return HiringProcessRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hiring_process_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hiring-process.component */ "./src/app/layout/hiring-process/hiring-process.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _hiring_process_component__WEBPACK_IMPORTED_MODULE_2__["HiringProcessComponent"]
    }
];
var HiringProcessRoutingModule = /** @class */ (function () {
    function HiringProcessRoutingModule() {
    }
    HiringProcessRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HiringProcessRoutingModule);
    return HiringProcessRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/hiring-process/hiring-process.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/hiring-process/hiring-process.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/hiring-process/hiring-process.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/hiring-process/hiring-process.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hiring-process works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/hiring-process/hiring-process.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/hiring-process/hiring-process.component.ts ***!
  \*******************************************************************/
/*! exports provided: HiringProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiringProcessComponent", function() { return HiringProcessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HiringProcessComponent = /** @class */ (function () {
    function HiringProcessComponent() {
    }
    HiringProcessComponent.prototype.ngOnInit = function () {
    };
    HiringProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hiring-process',
            template: __webpack_require__(/*! ./hiring-process.component.html */ "./src/app/layout/hiring-process/hiring-process.component.html"),
            styles: [__webpack_require__(/*! ./hiring-process.component.css */ "./src/app/layout/hiring-process/hiring-process.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HiringProcessComponent);
    return HiringProcessComponent;
}());



/***/ }),

/***/ "./src/app/layout/hiring-process/hiring-process.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/hiring-process/hiring-process.module.ts ***!
  \****************************************************************/
/*! exports provided: HiringProcessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiringProcessModule", function() { return HiringProcessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _hiring_process_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hiring-process-routing.module */ "./src/app/layout/hiring-process/hiring-process-routing.module.ts");
/* harmony import */ var _hiring_process_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hiring-process.component */ "./src/app/layout/hiring-process/hiring-process.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HiringProcessModule = /** @class */ (function () {
    function HiringProcessModule() {
    }
    HiringProcessModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _hiring_process_routing_module__WEBPACK_IMPORTED_MODULE_2__["HiringProcessRoutingModule"]
            ],
            declarations: [_hiring_process_component__WEBPACK_IMPORTED_MODULE_3__["HiringProcessComponent"]]
        })
    ], HiringProcessModule);
    return HiringProcessModule;
}());



/***/ })

}]);
//# sourceMappingURL=hiring-process-hiring-process-module.js.map
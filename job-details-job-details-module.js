(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-details-job-details-module"],{

/***/ "./src/app/layout/job-details/job-details-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/job-details/job-details-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: JobDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsRoutingModule", function() { return JobDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-details.component */ "./src/app/layout/job-details/job-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _job_details_component__WEBPACK_IMPORTED_MODULE_2__["JobDetailsComponent"]
    }];
var JobDetailsRoutingModule = /** @class */ (function () {
    function JobDetailsRoutingModule() {
    }
    JobDetailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], JobDetailsRoutingModule);
    return JobDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/job-details/job-details.component.css":
/*!**************************************************************!*\
  !*** ./src/app/layout/job-details/job-details.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/job-details/job-details.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/job-details/job-details.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  job-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/job-details/job-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/job-details/job-details.component.ts ***!
  \*************************************************************/
/*! exports provided: JobDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsComponent", function() { return JobDetailsComponent; });
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

var JobDetailsComponent = /** @class */ (function () {
    function JobDetailsComponent() {
    }
    JobDetailsComponent.prototype.ngOnInit = function () {
    };
    JobDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-details',
            template: __webpack_require__(/*! ./job-details.component.html */ "./src/app/layout/job-details/job-details.component.html"),
            styles: [__webpack_require__(/*! ./job-details.component.css */ "./src/app/layout/job-details/job-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JobDetailsComponent);
    return JobDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/job-details/job-details.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/job-details/job-details.module.ts ***!
  \**********************************************************/
/*! exports provided: JobDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsModule", function() { return JobDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _job_details_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-details-routing.module */ "./src/app/layout/job-details/job-details-routing.module.ts");
/* harmony import */ var _job_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-details.component */ "./src/app/layout/job-details/job-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobDetailsModule = /** @class */ (function () {
    function JobDetailsModule() {
    }
    JobDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _job_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobDetailsRoutingModule"]
            ],
            declarations: [_job_details_component__WEBPACK_IMPORTED_MODULE_3__["JobDetailsComponent"]]
        })
    ], JobDetailsModule);
    return JobDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=job-details-job-details-module.js.map
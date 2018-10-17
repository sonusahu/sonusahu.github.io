(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-details-view-job-details-view-module"],{

/***/ "./src/app/layout/job-details-view/job-details-view-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/job-details-view/job-details-view-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: JobDetailsViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsViewRoutingModule", function() { return JobDetailsViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_details_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-details-view.component */ "./src/app/layout/job-details-view/job-details-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _job_details_view_component__WEBPACK_IMPORTED_MODULE_2__["JobDetailsViewComponent"]
    }
];
var JobDetailsViewRoutingModule = /** @class */ (function () {
    function JobDetailsViewRoutingModule() {
    }
    JobDetailsViewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], JobDetailsViewRoutingModule);
    return JobDetailsViewRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/job-details-view/job-details-view.component.css":
/*!************************************************************************!*\
  !*** ./src/app/layout/job-details-view/job-details-view.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/job-details-view/job-details-view.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/job-details-view/job-details-view.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  job-details-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/job-details-view/job-details-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/job-details-view/job-details-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: JobDetailsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsViewComponent", function() { return JobDetailsViewComponent; });
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

var JobDetailsViewComponent = /** @class */ (function () {
    function JobDetailsViewComponent() {
    }
    JobDetailsViewComponent.prototype.ngOnInit = function () {
    };
    JobDetailsViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-details-view',
            template: __webpack_require__(/*! ./job-details-view.component.html */ "./src/app/layout/job-details-view/job-details-view.component.html"),
            styles: [__webpack_require__(/*! ./job-details-view.component.css */ "./src/app/layout/job-details-view/job-details-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JobDetailsViewComponent);
    return JobDetailsViewComponent;
}());



/***/ }),

/***/ "./src/app/layout/job-details-view/job-details-view.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/job-details-view/job-details-view.module.ts ***!
  \********************************************************************/
/*! exports provided: JobDetailsViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsViewModule", function() { return JobDetailsViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _job_details_view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-details-view-routing.module */ "./src/app/layout/job-details-view/job-details-view-routing.module.ts");
/* harmony import */ var _job_details_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-details-view.component */ "./src/app/layout/job-details-view/job-details-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobDetailsViewModule = /** @class */ (function () {
    function JobDetailsViewModule() {
    }
    JobDetailsViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _job_details_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobDetailsViewRoutingModule"]
            ],
            declarations: [_job_details_view_component__WEBPACK_IMPORTED_MODULE_3__["JobDetailsViewComponent"]]
        })
    ], JobDetailsViewModule);
    return JobDetailsViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=job-details-view-job-details-view-module.js.map
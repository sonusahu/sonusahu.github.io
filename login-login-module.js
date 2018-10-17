(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/layout/login/login-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/login/login-routing.module.ts ***!
  \******************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/layout/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/layout/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Login start -->\n  <div class=\"login-bg\">\n\t\t<img src=\"https://altmessenger.peoplestrong.com/CandidatePortal/images/bg_login_red.jpg\" alt=\"background image\"/>\n\t</div>\n    <div class=\"login-page\">\n    \t<div class=\"section-login-inner\">\n    \t\t<div class=\"section-login\">\n        \t<!-- Login Details-->\n            <div class=\"login-details login-block\">\n                <div class=\"section-logo client-no-logo\">\n                    <div class=\"logo-ps\"><img src=\"https://altmessenger.peoplestrong.com/CandidatePortal/images/svg/PeopleStrong.svg\" alt=\"PeopleStrong\" /></div>\n                 </div>\n                 <div  class=\"section-logo\"  style=\"display:none;\">\n                     <div class=\"logo-ps\"><img src=\"https://altmessenger.peoplestrong.com/CandidatePortal/images/svg/alt_recruit.svg\" alt=\"Alt recruit\" /></div>\n                     <div class=\"logo-client\"><img src=\"https://altmessenger.peoplestrong.com/CandidatePortal/images/client_logo.png\" alt=\"client logo\"/></div>\n                 </div>   \n                <div class=\"social-block social-icons-lg\">\n                   <a  (click)=\"socialSignIn('facebook')\" class=\"icon-smd fb-icon\">facebook</a> \n                   <a href=\"#\" target=\"_blank\" (click)=\"socialSignIn('google')\" class=\"icon-smd gp-icon\">Google Plus</a> \n                   <a href=\"#\" target=\"_blank\" (click)=\"socialSignIn('linkedIn')\" class=\"icon-smd li-icon\">linked in</a> \n                   <a href=\"#\" target=\"_blank\" class=\"icon-smd tw-icon\">Twitter</a> \n               </div>\n               <span class=\"or-text\">or</span>\n                <div class=\"login-form\">\n                    <form role=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onLoggedin()\" novalidate>\n                        <div class=\"form-flied\">\n                            <label for=\"userName\" class=\"sr-only\">user name</label>\n                            <input id=\"userName\" type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Enter your email id\" [pattern]=\"emailPattern\" required />   \n                            <div *ngIf=\"loginForm.controls['username'].invalid && (loginForm.controls['username'].dirty || loginForm.controls['username'].touched)\" class=\"is-invalid\">\n                              <span class=\"error\" *ngIf=\"loginForm.controls['username'].errors.required\">\n                              Email is required.\n                              </span>\n                            <span class=\"error\" *ngIf=\"loginForm.controls['username'].errors.pattern && loginForm.controls['username'].touched\"> \n                               Email not valid.\n                            </span>\t\n                          </div>         \n                        </div>\n                        <div class=\"form-flied margin-none\">\n                            <label for=\"password\" class=\"sr-only\">password</label>\n                            <input id=\"password\"  formControlName=\"password\"  type=\"password\" class=\"form-control\" placeholder=\"Password\"  [pattern]=\"passwordPattern\" required/>\n                            <div *ngIf=\"loginForm.controls['password'].invalid && (loginForm.controls['password'].dirty || loginForm.controls['password'].touched)\" class=\"is-invalid\">\n                              <span class=\"error\" *ngIf=\"loginForm.controls['password'].errors.required\">\n                              Password is required.\n                              </span>\n                            <span class=\"error\" *ngIf=\"loginForm.controls['password'].errors.pattern && loginForm.controls['password'].touched\"> \n                              password not valid.\n                            </span>\t\n                           \n                          </div>\n                        </div>\n                        <div class=\"form-flied remember-row clearfix\">\n                            <div class=\"check-box checkbox remember-text\">\n                                <input id=\"jobboards\" type=\"checkbox\" class=\"styled\" >\n                                <label for=\"jobboards\">Remember me</label>\n                            </div>\n                            <a [routerLink]=\"['/forgotpassword']\" class=\"link forgot-click\" title=\"Forgot your password?\">Forgot your password?</a>\n                        </div>\n                        <div class=\"form-button\">\n                            <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"loginForm.invalid\">Sign in</button>\n                        </div>\n                        <div class=\"login-account\">\n                            <span class=\"have-text\">Don’t have an account?</span>\n                            <a [routerLink]=\"['/createaccount']\" class=\"link sign-up-click\" title=\"Sign up\">Sign up</a>\n                        </div>\n                    </form>\n                </div>\n           </div>\n            <!-- \\\\ End Login Details-->\n           </div>\n        </div>\n        <div class=\"login-section-footer\">\n            <div class=\"login-footer-logo\"><img src=\"https://altmessenger.peoplestrong.com/CandidatePortal/images/svg/people_strongalt_white.svg\" alt=\"alt logo\"></div>\n            <div class=\"copy-right\">&copy; 2018 PeopleStrong</div>\n        </div>\n    </div> "

/***/ }),

/***/ "./src/app/layout/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, socialAuthService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.isDisabled = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.passwordPattern = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "linkedIn") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["LinkedinLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            // Now sign-in with userData
            // ...
        });
    };
    LoginComponent.prototype.onLoggedin = function () {
        console.log(this.loginForm);
        if (this.loginForm.value.username == "sonu.jjbytes@gmail.com" && this.loginForm.value.password == "123456") {
            alert("welcome");
            this.router.navigateByUrl("/dashboard");
        }
        localStorage.setItem('isLoggedin', 'true');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/layout/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/layout/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/layout/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/layout/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/layout/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map
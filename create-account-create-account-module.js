(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-account-create-account-module"],{

/***/ "./src/app/layout/create-account/create-account-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/create-account/create-account-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: CreateAccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountRoutingModule", function() { return CreateAccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-account.component */ "./src/app/layout/create-account/create-account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _create_account_component__WEBPACK_IMPORTED_MODULE_2__["CreateAccountComponent"] }
];
var CreateAccountRoutingModule = /** @class */ (function () {
    function CreateAccountRoutingModule() {
    }
    CreateAccountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CreateAccountRoutingModule);
    return CreateAccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/create-account/create-account.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/create-account/create-account.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/create-account/create-account.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/create-account/create-account.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Login start -->\n<div class=\"login-bg\">\n  <img src=\"images/bg_login_red.jpg\" alt=\"background image\"/>\n</div>\n  <div class=\"login-page\">\n    <div class=\"section-login-inner\">\n      <div class=\"section-login\">\n        <!-- Login Details-->\n          <div class=\"login-details login-block\" *ngIf=\"IsSignUP\">\n              <div class=\"section-logo client-no-logo\">\n                  <div class=\"logo-ps\"><img src=\"images/svg/PeopleStrong.svg\" alt=\"PeopleStrong\" /></div>\n               </div>\n               <div  class=\"section-logo\"  style=\"display:none;\">\n                   <div class=\"logo-ps\"><img src=\"images/svg/alt_recruit.svg\" alt=\"Alt recruit\" /></div>\n                   <div class=\"logo-client\"><img src=\"images/client_logo.png\" alt=\"client logo\"/></div>\n               </div>   \n               <div class=\"social-block social-icons-lg\">\n                    <a  (click)=\"socialSignIn('facebook')\" class=\"icon-smd fb-icon\">facebook</a> \n                    <a href=\"#\" target=\"_blank\" (click)=\"socialSignIn('google')\" class=\"icon-smd gp-icon\">Google Plus</a> \n                    <a href=\"#\" target=\"_blank\" (click)=\"socialSignIn('linkedIn')\" class=\"icon-smd li-icon\">linked in</a> \n                    <a href=\"#\" target=\"_blank\" class=\"icon-smd tw-icon\">Twitter</a> \n                </div>\n             <span class=\"or-text\">or</span>\n              <div class=\"login-form\">\n                  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSignUp()\" novalidate>\n                      <div class=\"form-flied\">\n                          <label for=\"userName\" class=\"sr-only\">user name</label>\n                          <input id=\"userName\" type=\"text\" class=\"form-control\" formControlName=\"email\"  [pattern]=\"emailPattern\" required placeholder=\"Enter your email id\" />   \n                          <div *ngIf=\"userForm.controls['email'].invalid && (userForm.controls['email'].dirty || userForm.controls['email'].touched)\" class=\"is-invalid\">\n                                <span  class=\"error\"  *ngIf=\"userForm.controls['email'].errors.required\">\n                                Email is required.\n                                </span>\n                              <span  class=\"error\"  *ngIf=\"userForm.controls['email'].errors.pattern && userForm.controls['email'].touched\"> \n                                 Email not valid.\n                              </span>\t\n                            </div>         \n                      </div>\n                      <div class=\"form-flied\">\n                          <label for=\"number\" class=\"sr-only\">number</label>\n                          <input id=\"number\" type=\"text\" class=\"form-control\" formControlName=\"mobileNo\"  [pattern]=\"mobilePattern\"  placeholder=\"Enter your mobile number\" required/>\n                          <div *ngIf=\"userForm.controls['mobileNo'].invalid && (userForm.controls['mobileNo'].dirty || userForm.controls['mobileNo'].touched)\" class=\"is-invalid\">\n                                <span  class=\"error\"  *ngIf=\"userForm.controls['mobileNo'].errors.required\">\n                                Mobile Number is required.\n                                </span>\n                              <span  class=\"error\"  *ngIf=\"userForm.controls['mobileNo'].errors.pattern && userForm.controls['mobileNo'].touched\"> \n                                    Mobile Number  not valid.\n                              </span>\t\n                            </div> \n                      </div>\n                      <div class=\"form-flied\">\n                          <label for=\"password\" class=\"sr-only\">password</label>\n                          <input id=\"password\" type=\"password\" class=\"form-control\" formControlName=\"password\" [pattern]=\"passwordPattern\"  placeholder=\"Password\" required/>\n                          <div *ngIf=\"userForm.controls['password'].invalid && (userForm.controls['password'].dirty || userForm.controls['password'].touched)\" class=\"is-invalid\">\n                                <span  class=\"error\"  *ngIf=\"userForm.controls['password'].errors.required\">\n                                password is required.\n                                </span>\n                                <span class=\"error\" *ngIf=\"userForm.controls['password'].errors.pattern && userForm.controls['password'].touched\"> \n                                        password not valid.\n                                 </span>\t\n                                \n                            </div>\n                      </div>\n                      <div class=\"form-flied\">\n                          <label for=\"confirmPassword\" class=\"sr-only\">confirm password</label>\n                          <input id=\"confirmPassword\" type=\"password\" class=\"form-control\"  formControlName=\"confirmPassword\" placeholder=\"Confirm Password\" required/>\n                          <div *ngIf=\"userForm.controls['confirmPassword'].invalid && (userForm.controls['confirmPassword'].dirty || userForm.controls['confirmPassword'].touched)\" class=\"is-invalid\">\n                                <span  class=\"error\"  *ngIf=\"userForm.controls['confirmPassword'].errors.required\">\n                               confirm password is required.\n                                </span>\n                              <span class=\"error\" *ngIf=\"userForm.controls['password'].value !== userForm.controls['confirmPassword'].value && userForm.controls['confirmPassword'].touched\">\n                                    confirm password is not matched with password.\n                              </span>\n                                \n                            </div>\n                      </div>\n                      <div class=\"form-button\">\n                            <button class=\"btn btn-default\"  [disabled]=\"!userForm.valid\">Sign up</button>\n                        \n                      </div>                        \n                  </form>\n              </div>\n         </div>\n          <!-- \\\\ End Login Details-->\n          <!-- Sign Up-->\n          <div class=\"login-details login-block block-virify\" *ngIf=\"IsVerify\">\n              <div class=\"section-logo client-no-logo\">\n                  <div class=\"logo-ps\"><img src=\"images/svg/PeopleStrong.svg\" alt=\"PeopleStrong\" /></div>\n               </div>\n               <div  class=\"section-logo\"  style=\"display:none;\">\n                   <div class=\"logo-ps\"><img src=\"images/svg/alt_recruit.svg\" alt=\"Alt recruit\" /></div>\n                   <div class=\"logo-client\"><img src=\"images/client_logo.png\" alt=\"client logo\"/></div>\n               </div>   \n              \n             <span class=\"or-text\">verify your details</span>\n              <div class=\"login-form\">\n                  <form action=\"method\">\n                      <div class=\"form-flied\">\n                          <label for=\"userName\" class=\"sr-only\">user name</label>\n                          <input id=\"userName\" type=\"text\" class=\"form-control\" placeholder=\"Enter your email verification URL\" />            \n                      </div>\n                      <div class=\"form-flied\">\n                          <label for=\"password\" class=\"sr-only\">number</label>\n                          <input id=\"number\" type=\"text\" class=\"form-control\" placeholder=\"Enter the OTP received on your mobile number\"/>\n                      </div>\n             \n                      <div class=\"form-button\">\n\n                          <a href=\"index.html\" title=\"log in\" class=\"btn btn-default forgot-click\" (click)=\"verifyAccount($event);false\">Verify</a>\n                      </div>                        \n                  </form>\n              </div>\n         </div>    \n          <!-- \\\\ End Sign Up-->\n\n   \n      </div>\n      </div>\n      <div class=\"login-section-footer\">\n          <div class=\"login-footer-logo\"><img src=\"images/svg/people_strongalt_white.svg\" alt=\"alt logo\"></div>\n          <div class=\"copy-right\">&copy; 2018 PeopleStrong</div>\n      </div>\n  </div> \n  <!-- \\\\ End Login start -->  "

/***/ }),

/***/ "./src/app/layout/create-account/create-account.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/create-account/create-account.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function() { return CreateAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../password.validation */ "./src/app/password.validation.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateAccountComponent = /** @class */ (function () {
    function CreateAccountComponent(formBuilder, router, socialAuthService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.IsSignUP = true;
        this.IsVerify = false;
    }
    CreateAccountComponent.prototype.ngOnInit = function () {
        this.passwordPattern = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.mobilePattern = "[1-9]{1}[0-9]{9}";
        this.userForm = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)],
            mobileNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.mobilePattern)],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: _password_validation__WEBPACK_IMPORTED_MODULE_3__["PasswordValidation"].MatchPassword // your validation method
        });
    };
    Object.defineProperty(CreateAccountComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateAccountComponent.prototype.socialSignIn = function (socialPlatform) {
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "linkedIn") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["LinkedinLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            // Now sign-in with userData
            // ...
        });
    };
    CreateAccountComponent.prototype.onSignUp = function () {
        console.log(this.userForm.valid);
        // if(this.userForm.value.email !== '' && this.userForm.value.password !== '' && this.userForm.value.cpassword !== ''){
        alert("Register Successfully");
        this.IsSignUP = false;
        this.IsVerify = true;
        //  }
    };
    CreateAccountComponent.prototype.verifyAccount = function () {
        this.router.navigate(['/login']);
    };
    CreateAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-account',
            template: __webpack_require__(/*! ./create-account.component.html */ "./src/app/layout/create-account/create-account.component.html"),
            styles: [__webpack_require__(/*! ./create-account.component.css */ "./src/app/layout/create-account/create-account.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CreateAccountComponent);
    return CreateAccountComponent;
}());



/***/ }),

/***/ "./src/app/layout/create-account/create-account.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/create-account/create-account.module.ts ***!
  \****************************************************************/
/*! exports provided: CreateAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountModule", function() { return CreateAccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _create_account_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-account-routing.module */ "./src/app/layout/create-account/create-account-routing.module.ts");
/* harmony import */ var _create_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-account.component */ "./src/app/layout/create-account/create-account.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CreateAccountModule = /** @class */ (function () {
    function CreateAccountModule() {
    }
    CreateAccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _create_account_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateAccountRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_create_account_component__WEBPACK_IMPORTED_MODULE_3__["CreateAccountComponent"]]
        })
    ], CreateAccountModule);
    return CreateAccountModule;
}());



/***/ })

}]);
//# sourceMappingURL=create-account-create-account-module.js.map
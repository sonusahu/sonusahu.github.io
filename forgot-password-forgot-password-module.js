(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./src/app/layout/forgot-password/forgot-password-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/forgot-password/forgot-password-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ForgotPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordRoutingModule", function() { return ForgotPasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/layout/forgot-password/forgot-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"],
    }
];
var ForgotPasswordRoutingModule = /** @class */ (function () {
    function ForgotPasswordRoutingModule() {
    }
    ForgotPasswordRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ForgotPasswordRoutingModule);
    return ForgotPasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/forgot-password/forgot-password.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/layout/forgot-password/forgot-password.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/forgot-password/forgot-password.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/forgot-password/forgot-password.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Login start -->\n  <div class=\"login-bg\">\n\t\t<img src=\"https://altmessenger.peoplestrong.com/CandidatePortal/images/bg_login_red.jpg\" alt=\"background image\"/>\n\t</div>\n    <div class=\"login-page\">\n    \t<div class=\"section-login-inner\">\n    \t\t<div class=\"section-login\">\n        \n\t\t\t\n            <!-- Forgot password-->\n            <div class=\"login-details forgot-password\" *ngIf=\"forgotPassword\">\n                <div class=\"section-logo client-no-logo\">\n                    <div class=\"logo-ps\"><img src=\"images/svg/PeopleStrong.svg\" alt=\"PeopleStrong\"/></div>\n                 </div>\n                 <div  class=\"section-logo\" style=\"display:none;\">\n                     <div class=\"logo-ps\"><img src=\"images/svg/alt_recruit.svg\" alt=\"Alt recruit\"></div>\n                     <div class=\"logo-client\"><img src=\"images/client_logo.png\" alt=\"client logo\"/></div>\n                 </div>  \n                 <div class=\"forgot-details\">\n                 \t<h2 class=\"title\">FORGOT PASSWORD?</h2>\n                    <ul class=\"list-reset\">\n                    \t<li>Enter your email id or phone number</li>\n                        <li>Check for a recovery email / SMS</li>\n                        <li>Click on the Renew Password link to recover your account</li>\n                    </ul>\n                 </div> \n                 <div class=\"login-form\">\n                    <form [formGroup]=\"verifyForm\" (ngSubmit)=\"GetNewPassword(verifyForm.value)\" novalidate>\n                        <div class=\"form-flied\">\n                            <label for=\"Entermobile\" class=\"sr-only\">Enter your email id or mobile number</label>\n                            <input id=\"Entermobile\" formControlName=\"emailvarify\"  type=\"text\" class=\"form-control\" placeholder=\"Enter your email id or mobile number\"  [pattern]=\"emailMobilePattern\" required/>\n                            <div *ngIf=\"verifyForm.controls['emailvarify'].invalid && (verifyForm.controls['emailvarify'].dirty || verifyForm.controls['emailvarify'].touched)\" class=\"is-invalid\">\n                                    <span class=\"error\" *ngIf=\"verifyForm.controls['emailvarify'].errors.required\">\n                                    email or mobile is required.\n                                    </span>\n                                  <span  class=\"error\"  *ngIf=\"verifyForm.controls['emailvarify'].errors.pattern && verifyForm.controls['emailvarify'].touched\"> \n                                        Email or mobile not valid.\n                                     </span>\t\n                                </div>\n\n                        </div>\n                        <div class=\"form-button\">\n                       <button class=\"btn btn-default new-pwd\" [disabled]=\"!verifyForm.valid\">GET A NEW PASSWORD</button>\n                        </div>\n                    </form>\n            \t</div>\n           </div>\n           <!-- \\\\ End Forgot password-->\n            <!-- Change Password-->\n            <div class=\"login-details change-password\" *ngIf=\"changePassword\">\n                <div class=\"section-logo client-no-logo\">\n                    <div class=\"logo-ps\"><img src=\"images/svg/PeopleStrong.svg\" alt=\"ps logo\"/></div>\n                 </div>\n                 <div  class=\"section-logo\" style=\"display:none;\">\n                     <div class=\"logo-ps\"><img src=\"images/svg/alt_recruit.svg\" alt=\"Alt recruit\"></div>\n                     <div class=\"logo-client\"><img src=\"https://altmessenger.peoplestrong.com/CandidatePortal/images/client_logo.png\" alt=\"client logo\"/></div>\n                 </div>  \n                 <h2 class=\"title\">CHANGE PASSWORD</h2>\n                 <div class=\"login-form\">\n                    <form  [formGroup]=\"passForm\" (ngSubmit)=\"changePass(passForm.value)\" novalidate>\n                        <div class=\"form-flied\">\n                            <label for=\"CurrentPassword\" class=\"sr-only\">Current Password</label>\n                            <input id=\"CurrentPassword\" type=\"text\" class=\"form-control\" formControlName=\"currpassword\" placeholder=\"Current Password\"/>\n                            <div *ngIf=\"passForm.controls['currpassword'].invalid && (passForm.controls['currpassword'].dirty || passForm.controls['currpassword'].touched)\" class=\"is-invalid\">\n                                <span class=\"error\" *ngIf=\"passForm.controls['currpassword'].errors.required\">\n                                password is required.\n                                </span>\n                              \n                            </div>\n                        </div>\n                        <div class=\"form-flied\">\n                            <label for=\"NewPassword\" class=\"sr-only\">New Password</label>\n                            <input id=\"NewPassword\" type=\"text\" class=\"form-control\" formControlName=\"password\" [pattern]=\"passwordPattern\"  placeholder=\"New Password\"/>\n                            <div *ngIf=\"passForm.controls['password'].invalid && (passForm.controls['password'].dirty || passForm.controls['password'].touched)\"  class=\"is-invalid\">\n                                <span class=\"error\" *ngIf=\"passForm.controls['password'].errors.required\">\n                                password is required.\n                                </span>\n                              <span class=\"error\" *ngIf=\"passForm.controls['password'].errors.pattern && passForm.controls['password'].touched\"> \n                                password not valid.\n                              </span>\t\n                              \n                            </div>\n                        </div>\n                        <div class=\"form-flied\">\n                            <label for=\"ConfirmPassword1\" class=\"sr-only\">Confirm Password</label>\n                            <input id=\"ConfirmPassword1\" type=\"text\" class=\"form-control\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\"/>\n                            <div *ngIf=\"passForm.controls['confirmPassword'].invalid && (passForm.controls['confirmPassword'].dirty || passForm.controls['confirmPassword'].touched)\" class=\"is-invalid\">\n                                <span *ngIf=\"passForm.controls['confirmPassword'].errors.required\">\n                               confirm password is required.\n                                </span>\n                              <div class=\"error\" *ngIf=\"passForm.controls['password'].value !== passForm.controls['confirmPassword'].value && passForm.controls['confirmPassword'].touched\">\n                                confirm password is not matched with password.\n                               </div>\n                              \n                            </div>\n                        </div>\n                        <div class=\"form-button\">\n                            <button class=\"btn btn-default\" (click)=\"resetPassword()\" [disabled]=\"!passForm.valid\">RESET PASSWORD</button>\n                        </div>\n                    </form>\n            \t</div>\n                <div class=\"forgot-details\">\n                \t<h5>Password Policy:</h5>\n                    <ul class=\"list-reset\">\n                    \t<li>It must contain atleast 6 characters</li>\n                        <li>It should not contain spaces</li>\n                        <li>It should contain atleast one number</li>\n                        <li>It should contain atleast one special character</li>\n                    </ul>\n                </div>\n           </div>\n            <!-- \\\\ End Change password-->\n        </div>\n        </div>\n        <div class=\"login-section-footer\">\n            <div class=\"login-footer-logo\"><img src=\"https://altmessenger.peoplestrong.com/CandidatePortal/images/svg/people_strongalt_white.svg\" alt=\"alt logo\"></div>\n            <div class=\"copy-right\">&copy; 2018 PeopleStrong</div>\n        </div>\n    </div> "

/***/ }),

/***/ "./src/app/layout/forgot-password/forgot-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/forgot-password/forgot-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../password.validation */ "./src/app/password.validation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.changePassword = false;
        this.forgotPassword = true;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.emailMobilePattern = "^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$";
        this.passwordPattern = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";
        this.passForm = this.formBuilder.group({
            currpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: _password_validation__WEBPACK_IMPORTED_MODULE_3__["PasswordValidation"].MatchPassword // your validation method
        });
        this.verifyForm = this.formBuilder.group({
            emailvarify: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailMobilePattern)],
        });
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.passForm.controls, this.verifyForm.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.GetNewPassword = function () {
        this.forgotPassword = false;
        this.changePassword = true;
    };
    ForgotPasswordComponent.prototype.resetPassword = function () {
        this.router.navigate(['/login']);
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/layout/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/layout/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/layout/forgot-password/forgot-password.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/forgot-password/forgot-password.module.ts ***!
  \******************************************************************/
/*! exports provided: ForgotPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/layout/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/layout/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]]
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module.js.map
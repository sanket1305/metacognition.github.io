(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingcomponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingcomponents", function() { return routingcomponents; });
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document/document.component */ "./src/app/document/document.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _loginapp_loginapp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginapp/loginapp.component */ "./src/app/loginapp/loginapp.component.ts");
/* harmony import */ var _registrationapp_registrationapp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrationapp/registrationapp.component */ "./src/app/registrationapp/registrationapp.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");











const routes = [
    { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'Login', component: _loginapp_loginapp_component__WEBPACK_IMPORTED_MODULE_4__["LoginappComponent"] },
    { path: 'Register', component: _registrationapp_registrationapp_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationappComponent"] },
    { path: 'Quiz', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"] },
    { path: 'ContactUs', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__["ContactusComponent"] },
    { path: 'Sidebar', component: _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"] },
    { path: 'Document', component: _document_document_component__WEBPACK_IMPORTED_MODULE_0__["DocumentComponent"] },
    { path: '', redirectTo: '/Home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();
const routingcomponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _loginapp_loginapp_component__WEBPACK_IMPORTED_MODULE_4__["LoginappComponent"], _registrationapp_registrationapp_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationappComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AppComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.auth.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'immutables';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 4, consts: [["role", "heading", 1, "row"], ["routerLink", "/Home", "routerlinkActive", "active"], ["routerLink", "/ContactUs"], ["routerLink", "/Document"], [4, "ngIf"], ["routerLink", "/Register"], ["routerLink", "/Login"], ["routerLink", "/Logout", 3, "click"], ["routerLink", "/Login", 1, "profile-icon"], [1, "material-icons"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_li_11_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_li_12_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_li_13_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_li_15_Template, 4, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400[_ngcontent-%COMP%];500&family=Istok[_ngcontent-%COMP%] + Web[_ngcontent-%COMP%]:wght@400;700&family=Lora[_ngcontent-%COMP%]:ital, wght@0[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 600[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 400[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 600&family=Montserrat[_ngcontent-%COMP%]:wght@400;500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700[_ngcontent-%COMP%];800[_ngcontent-%COMP%];900&display=swap\")[_ngcontent-%COMP%];\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-family: \"Istok Web\", sans-serif;\n}\np[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-family: \"Hind Madurai\", sans-serif;\n}\nmat-toolbar[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);\n  background-color: #ffffff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 30px 10px;\n  z-index: 1;\n  position: relative;\n  font-family: \"Istok Web\", sans-serif;\n}\nmat-toolbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  text-decoration: none;\n  color: #0079D7;\n}\nmat-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 20px;\n}\nmat-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 20px;\n}\nmat-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: all 0.3s ease 0s;\n  outline: none;\n}\nmat-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\nmat-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-icon[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 20px;\n}\nmat-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmtldC9EZXNrdG9wL01ldGFjb2duaXRpb24vZ2l0L2ltbXV0YWJsZXMvUHJvamVjdC9pbW11dGFibGVzL3NyYy9hcHAvX2Jhc2Uuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc2Fua2V0L0Rlc2t0b3AvTWV0YWNvZ25pdGlvbi9naXQvaW1tdXRhYmxlcy9Qcm9qZWN0L2ltbXV0YWJsZXMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EsbU9BQUE7QUFhUjtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNaSjtBRGlCQTtFQUNJLG9DQWJZO0FDRGhCO0FEZ0JBO0VBQ0ksdUNBZFc7QUNDZjtBQ1RBO0VBQ0ksOENBQUE7RUFDQSx5QkFISztFQUlMLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0ZIWTtBQ2VoQjtBQ1hJO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBZks7QUQ0QmI7QUNWSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBRFlSO0FDWFE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QURhWjtBQ1pZO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0FEY2hCO0FDWlk7RUFDSSxZQUFBO0FEY2hCO0FDWlk7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0FEYWhCO0FDWFk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QURhaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RlZmluZSBhbGwgdGhlIHRoZSBjb2RlIGhlcmUgd2hpY2ggaXMgZ29pbmcgdG8gYmUgdXNlZCByZXBlYXRlZGx5XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IaW5kK01hZHVyYWk6d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9SXN0b2srV2ViOndnaHRANDAwOzcwMCZmYW1pbHk9TG9yYTppdGFsLHdnaHRAMCw1MDA7MCw2MDA7MSw0MDA7MSw1MDA7MSw2MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcblxuJG1haW4tY29sb3I6ICMwMDc5RDc7XG4kd2hpdGUgOiAjZmZmZmZmO1xuJGJnOiAjY2RlMGZmO1xuJGRhcmstZ3JleTogI0EzQkFDQztcbiR0ZXh0LWNvbG9yOiAjN0E3RTgxO1xuXG4kaGVhZGluZy1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4kaGVhZGluZzItZm9udDogJ0lzdG9rIFdlYicsIHNhbnMtc2VyaWY7XG4kc3ViLWhlYWRpbmctZm9udDogJ0xvcmEnLCBzZXJpZjsgXG4kY29udGVudC1mb250OiAnSGluZCBNYWR1cmFpJywgc2Fucy1zZXJpZjtcblxuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLy8gYm9keXtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4vLyB9XG5oMSxoMixoMyxoNHtcbiAgICBmb250LWZhbWlseTogJGhlYWRpbmcyLWZvbnQ7XG59XG5wLCBsYWJlbHtcbiAgICBmb250LWZhbWlseTogJGNvbnRlbnQtZm9udDtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGluZCtNYWR1cmFpOndnaHRAMzAwOzQwMDs1MDAmZmFtaWx5PUlzdG9rK1dlYjp3Z2h0QDQwMDs3MDAmZmFtaWx5PUxvcmE6aXRhbCx3Z2h0QDAsNTAwOzAsNjAwOzEsNDAwOzEsNTAwOzEsNjAwJmZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaDEsIGgyLCBoMywgaDQge1xuICBmb250LWZhbWlseTogXCJJc3RvayBXZWJcIiwgc2Fucy1zZXJpZjtcbn1cblxucCwgbGFiZWwge1xuICBmb250LWZhbWlseTogXCJIaW5kIE1hZHVyYWlcIiwgc2Fucy1zZXJpZjtcbn1cblxubWF0LXRvb2xiYXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMTBweDtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJJc3RvayBXZWJcIiwgc2Fucy1zZXJpZjtcbn1cbm1hdC10b29sYmFyIGxpLCBtYXQtdG9vbGJhciBhLCBtYXQtdG9vbGJhciBidXR0b24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwNzlENztcbn1cbm1hdC10b29sYmFyIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5tYXQtdG9vbGJhciB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAyMHB4O1xufVxubWF0LXRvb2xiYXIgdWwgbGkgYSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5tYXQtdG9vbGJhciB1bCBsaSBhOmhvdmVyIHtcbiAgb3BhY2l0eTogMC41O1xufVxubWF0LXRvb2xiYXIgdWwgbGkgLnByb2ZpbGUtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxubWF0LXRvb2xiYXIgdWwgbGkgLm1hdGVyaWFsLWljb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59IiwiQGltcG9ydCAnYmFzZSc7XG5cbiRtYWluLWNvbG9yOiAjMDA3OUQ3O1xuJHdoaXRlIDogI2ZmZmZmZjtcbm1hdC10b29sYmFye1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiAkaGVhZGluZzItZm9udDtcbiAgICBsaSwgYSwgYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xuICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgfVxuICAgIHVse1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXJ7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2ZpbGUtaWNvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnN7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _registrationapp_registrationapp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registrationapp/registrationapp.component */ "./src/app/registrationapp/registrationapp.component.ts");
/* harmony import */ var _loginapp_loginapp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loginapp/loginapp.component */ "./src/app/loginapp/loginapp.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/__ivy_ngcc__/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _fab_fab_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fab/fab.component */ "./src/app/fab/fab.component.ts");
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./document/document.component */ "./src/app/document/document.component.ts");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"], _authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ng_sidebar__WEBPACK_IMPORTED_MODULE_15__["SidebarModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _loginapp_loginapp_component__WEBPACK_IMPORTED_MODULE_10__["LoginappComponent"], _registrationapp_registrationapp_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationappComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"],
        _registrationapp_registrationapp_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationappComponent"],
        _loginapp_loginapp_component__WEBPACK_IMPORTED_MODULE_10__["LoginappComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__["ContactusComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"],
        _fab_fab_component__WEBPACK_IMPORTED_MODULE_17__["FabComponent"],
        _document_document_component__WEBPACK_IMPORTED_MODULE_18__["DocumentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_15__["SidebarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingcomponents"],
                    _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"],
                    _registrationapp_registrationapp_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationappComponent"],
                    _loginapp_loginapp_component__WEBPACK_IMPORTED_MODULE_10__["LoginappComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__["ContactusComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"],
                    _fab_fab_component__WEBPACK_IMPORTED_MODULE_17__["FabComponent"],
                    _document_document_component__WEBPACK_IMPORTED_MODULE_18__["DocumentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    ng_sidebar__WEBPACK_IMPORTED_MODULE_15__["SidebarModule"].forRoot()
                ],
                providers: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"], _authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    saveToken(token) {
        localStorage.setItem("userToken", token);
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem("userToken");
        }
        return this.token;
    }
    getUserDetails() {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    }
    isLoggedIn() {
        const user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    }
    register(user) {
        const base = this.http.post('/users/register', user);
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            if (data.token) {
                this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    }
    login(user) {
        // console.log("AYA")
        const base = this.http.post('/users/login', user);
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            if (data.token) {
                this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    }
    logout() {
        this.token = '';
        window.localStorage.removeItem("userToken");
        this.router.navigateByUrl('/');
    }
    email(user) {
        // console.log("AYA")
        const base = this.http.post('/users/email', user);
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            if (data.message) {
                return data;
            }
            return data;
        }));
        return request;
    }
    quiz() {
        const base = this.http.get('/quiz/sample2');
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            return data;
        }));
        return request;
    }
    pdfname(name) {
        const base = this.http.post('/pdf/pdfname', name);
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            return data;
        }));
        return request;
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _fab_fab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fab/fab.component */ "./src/app/fab/fab.component.ts");













function ContactusComponent_div_30_mat_hint_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactusComponent_div_30_mat_hint_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactusComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactusComponent_div_30_mat_hint_1_Template, 2, 0, "mat-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactusComponent_div_30_mat_hint_2_Template, 2, 0, "mat-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
function ContactusComponent_div_37_mat_hint_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Type message you want to give us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactusComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactusComponent_div_37_mat_hint_1_Template, 2, 0, "mat-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.message.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ContactusComponent {
    constructor(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.submitted = false;
        this.credentials = {
            phone: 0,
            name: "",
            email: "",
            message: "",
        };
    }
    ngOnInit() {
        this.contactus = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    get f() {
        return this.contactus.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.contactus.invalid) {
            return;
        }
        this.auth.email(this.credentials).subscribe((data) => {
            if (data.error) {
                alert(data.error);
            }
            else {
                alert(data.message);
                this.onReset();
            }
        }, error => {
            console.error(error);
        });
    }
    onReset() {
        this.submitted = false;
        this.contactus.reset();
    }
}
ContactusComponent.ɵfac = function ContactusComponent_Factory(t) { return new (t || ContactusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactusComponent, selectors: [["app-contactus"]], decls: 54, vars: 16, consts: [[1, "container"], [1, "para"], [1, "row"], [3, "formGroup", "ngSubmit"], [1, "first-input-fields"], ["appearance", "outline"], ["id", "name", "matInput", "", "placeholder", "Name", "formControlName", "name", 3, "ngClass", "ngModel", "ngModelChange"], ["matSuffix", "", 2, "color", "#0079D7"], ["matInput", "", "type", "tel", "formControlName", "phone", "placeholder", "Phone", "value", " ", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 1, "input-fields"], ["id", "email", "matInput", "", "type", "email", "placeholder", "Email", "formControlName", "email", 3, "ngClass", "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["matInput", "", "formControlName", "message", 3, "ngClass", "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "submit"], [1, "contact-info"], [1, "invalid-feedback"], ["style", "color: red;", 4, "ngIf"], [2, "color", "red"]], template: function ContactusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Drop a Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " chat_bubble_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dont't hesitate to contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ready for offers and cooperation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactusComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusComponent_Template_input_ngModelChange_17_listener($event) { return ctx.credentials.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusComponent_Template_input_ngModelChange_23_listener($event) { return ctx.credentials.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusComponent_Template_input_ngModelChange_29_listener($event) { return ctx.credentials.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ContactusComponent_div_30_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusComponent_Template_textarea_ngModelChange_36_listener($event) { return ctx.credentials.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ContactusComponent_div_37_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "How to Find Us?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "If you have any questions, just fill in the contact form, and we will answer you shortly. If you live in mumbai, you can visit to our headquarter DBIT, Kurla west.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Telephone: 01234-56789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Email: wewillrock@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-fab");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.submitted))("ngModel", ctx.credentials.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.f.email.errors))("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.f.message.errors))("ngModel", ctx.credentials.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.message.errors);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _fab_fab_component__WEBPACK_IMPORTED_MODULE_10__["FabComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400[_ngcontent-%COMP%];500&family=Istok[_ngcontent-%COMP%] + Web[_ngcontent-%COMP%]:wght@400;700&family=Lora[_ngcontent-%COMP%]:ital, wght@0[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 600[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 400[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 600&family=Montserrat[_ngcontent-%COMP%]:wght@400;500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700[_ngcontent-%COMP%];800[_ngcontent-%COMP%];900&display=swap\")[_ngcontent-%COMP%];\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-family: \"Istok Web\", sans-serif;\n}\np[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-family: \"Hind Madurai\", sans-serif;\n}\n.container[_ngcontent-%COMP%] {\n  width: 70%;\n  max-width: 1200px;\n  margin: 20px auto 0;\n  padding: 40px;\n  color: #0079D7;\n  background-color: #ffffff;\n  text-align: center;\n}\n.para[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\n.para[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1) {\n  font-size: 5em;\n  letter-spacing: 0.2;\n  font-family: \"Istok Web\", sans-serif;\n}\n.para[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  margin: 40px auto 0;\n}\n.para[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-style: italic;\n  margin-left: 40px;\n}\n.para[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 4em;\n}\n.para[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(2) {\n  font-size: 2em;\n  margin-top: 20px;\n}\nform[_ngcontent-%COMP%] {\n  font-family: \"Hind Madurai\", sans-serif;\n}\nform[_ngcontent-%COMP%]   .first-input-fields[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n}\nform[_ngcontent-%COMP%]   .first-input-fields[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: calc(75% / 2);\n}\nform[_ngcontent-%COMP%]   .first-input-fields[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]    + mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\nform[_ngcontent-%COMP%]   .input-fields[_ngcontent-%COMP%] {\n  display: block;\n  width: 75%;\n  margin: 0 auto;\n}\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  height: 100px;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Hind Madurai\", sans-serif;\n  color: #ffffff;\n  background-color: #0079D7;\n  width: 75%;\n  font-size: 1.2rem;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  color: #0079D7;\n}\n.contact-info[_ngcontent-%COMP%] {\n  max-width: 75%;\n  height: 10%;\n  margin: 20px auto 0;\n  font-size: 1.4em;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmtldC9EZXNrdG9wL01ldGFjb2duaXRpb24vZ2l0L2ltbXV0YWJsZXMvUHJvamVjdC9pbW11dGFibGVzL3NyYy9hcHAvX2Jhc2Uuc2NzcyIsInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NhbmtldC9EZXNrdG9wL01ldGFjb2duaXRpb24vZ2l0L2ltbXV0YWJsZXMvUHJvamVjdC9pbW11dGFibGVzL3NyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxtT0FBQTtBQWFSO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1pKO0FEaUJBO0VBQ0ksb0NBYlk7QUNEaEI7QURnQkE7RUFDSSx1Q0FkVztBQ0NmO0FDWkE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjRkhTO0VFSVQseUJGSEs7RUVJTCxrQkFBQTtBRGVKO0FDWkE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0FEZUo7QUNkSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9DRlBRO0FDdUJoQjtBQ2RJO0VBQ0ksMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QURnQlI7QUNmUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEaUJaO0FDZlE7RUFDSSxjQUFBO0FEaUJaO0FDYkk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QURlUjtBQ1hBO0VBQ0ksdUNGN0JXO0FDMkNmO0FDWkk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBRGNSO0FDYlE7RUFBbUIsb0JBQUE7QURnQjNCO0FDZlE7RUFDSSxnQkFBQTtBRGlCWjtBQ1pJO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FEY1I7QUNaSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FEY1I7QUNaSTtFQUNJLHVDRnBETztFRXFEUCxjRjdEQztFRThERCx5QkYvREs7RUVnRUwsVUFBQTtFQUNBLGlCQUFBO0FEY1I7QUNaSTtFQUNJLHlCRm5FQztFRW9FRCxjRnJFSztBQ21GYjtBQ1hBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURjSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RlZmluZSBhbGwgdGhlIHRoZSBjb2RlIGhlcmUgd2hpY2ggaXMgZ29pbmcgdG8gYmUgdXNlZCByZXBlYXRlZGx5XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IaW5kK01hZHVyYWk6d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9SXN0b2srV2ViOndnaHRANDAwOzcwMCZmYW1pbHk9TG9yYTppdGFsLHdnaHRAMCw1MDA7MCw2MDA7MSw0MDA7MSw1MDA7MSw2MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcblxuJG1haW4tY29sb3I6ICMwMDc5RDc7XG4kd2hpdGUgOiAjZmZmZmZmO1xuJGJnOiAjY2RlMGZmO1xuJGRhcmstZ3JleTogI0EzQkFDQztcbiR0ZXh0LWNvbG9yOiAjN0E3RTgxO1xuXG4kaGVhZGluZy1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4kaGVhZGluZzItZm9udDogJ0lzdG9rIFdlYicsIHNhbnMtc2VyaWY7XG4kc3ViLWhlYWRpbmctZm9udDogJ0xvcmEnLCBzZXJpZjsgXG4kY29udGVudC1mb250OiAnSGluZCBNYWR1cmFpJywgc2Fucy1zZXJpZjtcblxuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLy8gYm9keXtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4vLyB9XG5oMSxoMixoMyxoNHtcbiAgICBmb250LWZhbWlseTogJGhlYWRpbmcyLWZvbnQ7XG59XG5wLCBsYWJlbHtcbiAgICBmb250LWZhbWlseTogJGNvbnRlbnQtZm9udDtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGluZCtNYWR1cmFpOndnaHRAMzAwOzQwMDs1MDAmZmFtaWx5PUlzdG9rK1dlYjp3Z2h0QDQwMDs3MDAmZmFtaWx5PUxvcmE6aXRhbCx3Z2h0QDAsNTAwOzAsNjAwOzEsNDAwOzEsNTAwOzEsNjAwJmZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaDEsIGgyLCBoMywgaDQge1xuICBmb250LWZhbWlseTogXCJJc3RvayBXZWJcIiwgc2Fucy1zZXJpZjtcbn1cblxucCwgbGFiZWwge1xuICBmb250LWZhbWlseTogXCJIaW5kIE1hZHVyYWlcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA3MCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xuICBwYWRkaW5nOiA0MHB4O1xuICBjb2xvcjogIzAwNzlENztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFyYSB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucGFyYSBwOm50aC1vZi10eXBlKDEpIHtcbiAgZm9udC1zaXplOiA1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjI7XG4gIGZvbnQtZmFtaWx5OiBcIklzdG9rIFdlYlwiLCBzYW5zLXNlcmlmO1xufVxuLnBhcmEgLnJvdyB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XG59XG4ucGFyYSAucm93IHAge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5wYXJhIC5yb3cgbWF0LWljb24ge1xuICBmb250LXNpemU6IDRlbTtcbn1cbi5wYXJhIHA6bnRoLW9mLXR5cGUoMikge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuZm9ybSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhpbmQgTWFkdXJhaVwiLCBzYW5zLXNlcmlmO1xufVxuZm9ybSAuZmlyc3QtaW5wdXQtZmllbGRzIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5mb3JtIC5maXJzdC1pbnB1dC1maWVsZHMgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogY2FsYyg3NSUgLyAyKTtcbn1cbmZvcm0gLmZpcnN0LWlucHV0LWZpZWxkcyBtYXQtZm9ybS1maWVsZCArIG1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbmZvcm0gLmlucHV0LWZpZWxkcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmZvcm0gdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIGhlaWdodDogMTAwcHg7XG59XG5mb3JtIGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkhpbmQgTWFkdXJhaVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzlENztcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5mb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMDA3OUQ3O1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgbWF4LXdpZHRoOiA3NSU7XG4gIGhlaWdodDogMTAlO1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xuICBmb250LXNpemU6IDEuNGVtO1xuICBsaW5lLWhlaWdodDogMS41O1xufSIsIkBpbXBvcnQgJy4uL2Jhc2UnO1xuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzAlO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDA7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBjb2xvcjogJG1haW4tY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhcmF7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHA6bnRoLW9mLXR5cGUoMSl7XG4gICAgICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yO1xuICAgICAgICBmb250LWZhbWlseTogJGhlYWRpbmcyLWZvbnQ7XG4gICAgfVxuICAgIC5yb3d7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogNDBweCBhdXRvIDA7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICB9XG4gICAgICAgIG1hdC1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG4gICAgcDpudGgtb2YtdHlwZSgyKXtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxufVxuXG5mb3Jte1xuICAgIGZvbnQtZmFtaWx5OiAkY29udGVudC1mb250O1xuXG4gICAgLmZpcnN0LWlucHV0LWZpZWxkc3tcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hdC1mb3JtLWZpZWxkeyAgICB3aWR0aDogY2FsYyg3NSUgLyAyKSA7fVxuICAgICAgICBtYXQtZm9ybS1maWVsZCArIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAuaW5wdXQtZmllbGRze1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIHRleHRhcmVhe1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICAgIGJ1dHRvbnsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkY29udGVudC1mb250O1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7XG4gICAgfVxufVxuLmNvbnRhY3QtaW5mb3tcbiAgICBtYXgtd2lkdGg6IDc1JTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBtYXJnaW46IDIwcHggYXV0byAwO1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contactus',
                templateUrl: './contactus.component.html',
                styleUrls: ['./contactus.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/document/document.component.ts":
/*!************************************************!*\
  !*** ./src/app/document/document.component.ts ***!
  \************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class DocumentComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            name: ""
        };
    }
    ngOnInit() {
        this.drag();
    }
    updatePdfName(id) {
        this.credentials.name = document.getElementById(id).innerHTML;
        console.log(this.credentials.name);
        this.auth.pdfname(this.credentials).subscribe((data) => {
            var f = document.getElementById('Frame');
            f['src'] = f['src'];
        }, error => {
            alert("problem");
        });
    }
    updatePdfName2() {
        this.credentials.name = document.getElementById("2").innerHTML;
        console.log(this.credentials.name);
    }
    //#######################################Video#####################################
    //
    drag() {
        dragElement(document.getElementById("mydiv"));
        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                // if present, the header is where you move the DIV from:
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            }
            else {
                // otherwise, move the DIV from anywhere inside the DIV:
                elmnt.onmousedown = dragMouseDown;
            }
            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }
            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }
            function closeDragElement() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }
}
DocumentComponent.ɵfac = function DocumentComponent_Factory(t) { return new (t || DocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DocumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentComponent, selectors: [["app-document"]], decls: 10, vars: 0, consts: [["id", "1", 3, "click"], ["id", "2", 3, "click"], ["id", "mydiv"], ["id", "mydivheader"], ["width", "420", "height", "315", "src", "https://www.youtube.com/embed/tgbNymZ7vqY"]], template: function DocumentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentComponent_Template_label_click_1_listener() { return ctx.updatePdfName(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "1.pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentComponent_Template_label_click_4_listener() { return ctx.updatePdfName(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "compressed.tracemonkey-pldi-09.pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Click here to move");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#mydiv[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9;\n  background-color: #f1f1f1;\n  border: 1px solid #d3d3d3;\n  text-align: center;\n}\n\n#mydivheader[_ngcontent-%COMP%] {\n  padding: 10px;\n  cursor: move;\n  z-index: 10;\n  background-color: #2196F3;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmtldC9EZXNrdG9wL01ldGFjb2duaXRpb24vZ2l0L2ltbXV0YWJsZXMvUHJvamVjdC9pbW11dGFibGVzL3NyYy9hcHAvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215ZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAjbXlkaXZoZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG4gICAgY29sb3I6ICNmZmY7XG4gIH0iLCIjbXlkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI215ZGl2aGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBtb3ZlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbiAgY29sb3I6ICNmZmY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-document',
                templateUrl: './document.component.html',
                styleUrls: ['./document.component.scss']
            }]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/fab/fab.component.ts":
/*!**************************************!*\
  !*** ./src/app/fab/fab.component.ts ***!
  \**************************************/
/*! exports provided: FabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabComponent", function() { return FabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");




class FabComponent {
    constructor() { }
    ngOnInit() {
    }
    toggleFab() {
        const Btns = document.querySelector(".btns");
        const add = document.getElementById("add");
        const remove = document.getElementById("remove");
        const btn = document.querySelector(".btns").querySelectorAll("a");
        Btns.classList.toggle("open");
        if (Btns.classList.contains("open")) {
            remove.style.display = "block";
            add.style.display = "none";
            btn.forEach((e, i) => {
                setTimeout(() => {
                    var top = 50 * i;
                    e.style.top = top + "px";
                    console.log(e);
                }, 100 * i);
            });
        }
        else {
            add.style.display = "block";
            remove.style.display = "none";
            btn.forEach((e, i) => {
                e.style.top = "0px";
            });
        }
    }
}
FabComponent.ɵfac = function FabComponent_Factory(t) { return new (t || FabComponent)(); };
FabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FabComponent, selectors: [["app-fab"]], decls: 16, vars: 3, consts: [[1, "fab", 3, "click"], [1, "action"], ["id", "add", 1, "material-icons"], ["id", "remove", 1, "material-icons", 2, "display", "none"], [1, "btns"], ["routerLink", "/Quiz", "matTooltip", "Let's Study", 1, "btn", 3, "matTooltipPosition"], [1, "material-icons"], ["routerLink", "/Quiz", "matTooltip", "Let's Quiz", 1, "btn", 3, "matTooltipPosition"], ["routerLink", "/ContactUs", "matTooltip", "QNA", 1, "btn", 3, "matTooltipPosition"]], template: function FabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FabComponent_Template_div_click_0_listener() { return ctx.toggleFab(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu_book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "question_answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "left");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400[_ngcontent-%COMP%];500&family=Istok[_ngcontent-%COMP%] + Web[_ngcontent-%COMP%]:wght@400;700&family=Lora[_ngcontent-%COMP%]:ital, wght@0[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 600[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 400[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 600&family=Montserrat[_ngcontent-%COMP%]:wght@400;500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700[_ngcontent-%COMP%];800[_ngcontent-%COMP%];900&display=swap\")[_ngcontent-%COMP%];\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-family: \"Istok Web\", sans-serif;\n}\np[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-family: \"Hind Madurai\", sans-serif;\n}\n.fab[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 10px;\n  top: 80px;\n}\n.action[_ngcontent-%COMP%] {\n  background-color: #0079D7;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  box-shadow: 0 3px 5px 0 gray;\n  color: #ffffff;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translate(30%, 30%);\n  font-size: 2rem;\n  cursor: pointer;\n}\n.action[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  color: #0079D7;\n}\n.btns[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  margin-top: 10px;\n  height: 45px;\n  width: 45px;\n  transform: translateX(10%);\n  transition: 0.3s ease-in-out;\n  z-index: -1;\n}\n.btns.open[_ngcontent-%COMP%] {\n  top: 50px;\n}\n.btn[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background-color: #0079D7;\n  color: #ffffff;\n  border: 0;\n  outline: 0;\n}\n.btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 1.2rem;\n  transform: translate(55%, 55%);\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  color: #0079D7;\n  box-shadow: 0 3px 5px 0 gray;\n}\n  .mat-tooltip {\n  \n  \n  color: white;\n  background-color: #0079D7;\n  font-family: \"Istok Web\", sans-serif;\n  font-weight: 300;\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmtldC9EZXNrdG9wL01ldGFjb2duaXRpb24vZ2l0L2ltbXV0YWJsZXMvUHJvamVjdC9pbW11dGFibGVzL3NyYy9hcHAvX2Jhc2Uuc2NzcyIsInNyYy9hcHAvZmFiL2ZhYi5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NhbmtldC9EZXNrdG9wL01ldGFjb2duaXRpb24vZ2l0L2ltbXV0YWJsZXMvUHJvamVjdC9pbW11dGFibGVzL3NyYy9hcHAvZmFiL2ZhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxtT0FBQTtBQWFSO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1pKO0FEaUJBO0VBQ0ksb0NBYlk7QUNEaEI7QURnQkE7RUFDSSx1Q0FkVztBQ0NmO0FDWEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QURjSjtBQ1pBO0VBQ0kseUJGTFM7RUVNVCxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjRlRLO0VFVUwsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QURlSjtBQ2RJO0VBQ0ksa0JBQUE7RUFJQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FEYVI7QUNWQTtFQUNJLHlCRnpCSztFRTBCTCxjRjNCUztBQ3dDYjtBQ1ZBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FEYUo7QUNWQTtFQUNJLFNBQUE7QURhSjtBQ1hBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJGakRTO0VFa0RULGNGakRLO0VFa0RMLFNBQUE7RUFDQSxVQUFBO0FEY0o7QUNiSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFHQSw4QkFBQTtBRGFSO0FDVEE7RUFDSSx5QkY5REs7RUUrREwsY0ZoRVM7RUVpRVQsNEJBQUE7QURZSjtBQ1ZBO0VBQ0ksZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRnZFUztFRXdFVCxvQ0ZqRVk7RUVrRVosZ0JBQUE7RUFDQSxnQkFBQTtBRGFKIiwiZmlsZSI6InNyYy9hcHAvZmFiL2ZhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZGVmaW5lIGFsbCB0aGUgdGhlIGNvZGUgaGVyZSB3aGljaCBpcyBnb2luZyB0byBiZSB1c2VkIHJlcGVhdGVkbHlcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhpbmQrTWFkdXJhaTp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1Jc3RvaytXZWI6d2dodEA0MDA7NzAwJmZhbWlseT1Mb3JhOml0YWwsd2dodEAwLDUwMDswLDYwMDsxLDQwMDsxLDUwMDsxLDYwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xuXG4kbWFpbi1jb2xvcjogIzAwNzlENztcbiR3aGl0ZSA6ICNmZmZmZmY7XG4kYmc6ICNjZGUwZmY7XG4kZGFyay1ncmV5OiAjQTNCQUNDO1xuJHRleHQtY29sb3I6ICM3QTdFODE7XG5cbiRoZWFkaW5nLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiRoZWFkaW5nMi1mb250OiAnSXN0b2sgV2ViJywgc2Fucy1zZXJpZjtcbiRzdWItaGVhZGluZy1mb250OiAnTG9yYScsIHNlcmlmOyBcbiRjb250ZW50LWZvbnQ6ICdIaW5kIE1hZHVyYWknLCBzYW5zLXNlcmlmO1xuXG4qe1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4vLyBib2R5e1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICRiZztcbi8vIH1cbmgxLGgyLGgzLGg0e1xuICAgIGZvbnQtZmFtaWx5OiAkaGVhZGluZzItZm9udDtcbn1cbnAsIGxhYmVse1xuICAgIGZvbnQtZmFtaWx5OiAkY29udGVudC1mb250O1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IaW5kK01hZHVyYWk6d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9SXN0b2srV2ViOndnaHRANDAwOzcwMCZmYW1pbHk9TG9yYTppdGFsLHdnaHRAMCw1MDA7MCw2MDA7MSw0MDA7MSw1MDA7MSw2MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5oMSwgaDIsIGgzLCBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIklzdG9rIFdlYlwiLCBzYW5zLXNlcmlmO1xufVxuXG5wLCBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkhpbmQgTWFkdXJhaVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uZmFiIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA4MHB4O1xufVxuXG4uYWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzlENztcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggMCBncmF5O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmFjdGlvbiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUsIDMwJSk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6ICMwMDc5RDc7XG59XG5cbi5idG5zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmJ0bnMub3BlbiB7XG4gIHRvcDogNTBweDtcbn1cblxuLmJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OUQ3O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xufVxuLmJ0biBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTUlLCA1NSUpO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6ICMwMDc5RDc7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAwIGdyYXk7XG59XG5cbjo6bmctZGVlcCAubWF0LXRvb2x0aXAge1xuICAvKiB5b3VyIG93biBjdXN0b20gc3R5bGVzIGhlcmUgKi9cbiAgLyogZS5nLiAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc5RDc7XG4gIGZvbnQtZmFtaWx5OiBcIklzdG9rIFdlYlwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDAuOWVtO1xufSIsIkBpbXBvcnQgJy4uL2Jhc2UnO1xuXG4uZmFie1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDgwcHg7XG59XG4uYWN0aW9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDAgZ3JheTtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBzcGFue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8vY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgLy8gbGVmdDogMjAlO1xuICAgICAgICAvLyB0b3A6IDIwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlLCAzMCUpO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4uYWN0aW9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBjb2xvcjogJG1haW4tY29sb3I7XG59XG5cbi5idG5ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmJ0bnMub3BlbntcbiAgICB0b3A6IDUwcHg7XG59XG4uYnRue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgc3BhbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgLy9sZWZ0OiA1MCU7XG4gICAgICAgIC8vYm90dG9tOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDU1JSwgNTUlKTtcblxuICAgIH1cbn1cbi5idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggMCBncmF5O1xufVxuOjpuZy1kZWVwIC5tYXQtdG9vbHRpcCB7XG4gICAgLyogeW91ciBvd24gY3VzdG9tIHN0eWxlcyBoZXJlICovIFxuICAgIC8qIGUuZy4gKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XG4gICAgZm9udC1mYW1pbHk6ICRoZWFkaW5nMi1mb250O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fab',
                templateUrl: './fab.component.html',
                styleUrls: ['./fab.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");



class HomeComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    openDialog() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 46, vars: 0, consts: [[1, "box1", "box"], [1, "card-big"], [1, "social-icons"], ["href", ""], [1, "box2", "box"], [1, "card"], [1, "material-icons"], [1, "box3", "box"], [1, "box4", "box"], [1, "box5", "box"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MetaCognition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Know More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatum cupiditate molestias? Amet explicabo temporibus error adipisci laborum atque nemo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias ea pariatur rem ipsam id?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias ea pariatur rem ipsam id?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "equalizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias ea pariatur rem ipsam id?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "question_answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias ea pariatur rem ipsam id?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400[_ngcontent-%COMP%];500&family=Istok[_ngcontent-%COMP%] + Web[_ngcontent-%COMP%]:wght@400;700&family=Lora[_ngcontent-%COMP%]:ital, wght@0[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 600[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 400[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 600&family=Montserrat[_ngcontent-%COMP%]:wght@400;500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700[_ngcontent-%COMP%];800[_ngcontent-%COMP%];900&display=swap\")[_ngcontent-%COMP%];\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-family: \"Istok Web\", sans-serif;\n}\np[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-family: \"Hind Madurai\", sans-serif;\n}\nmain[_ngcontent-%COMP%] {\n  display: grid;\n  height: 91vh;\n  padding: 0 20px;\n  grid-template-areas: \"box1 box2 box3\" \"box1 box4 box5\";\n  background-color: #F3F6FB;\n}\nmain[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\nmain[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding: 20px;\n}\nmain[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .card-big[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  height: 100%;\n  border-radius: 20px;\n  padding: 60px 30px;\n  cursor: pointer;\n}\nmain[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .card-big[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0079D7;\n  font-size: 60px;\n  transform: translateX(-6px);\n}\nmain[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .card-big[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nmain[_ngcontent-%COMP%]   .card-big[_ngcontent-%COMP%] {\n  padding-top: 200px;\n  text-justify: inter-word;\n  text-align: justify;\n  cursor: default;\n}\nmain[_ngcontent-%COMP%]   .card-big[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\nmain[_ngcontent-%COMP%]   .card-big[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::first-letter {\n  font-size: 120%;\n  color: #0079D7;\n}\nmain[_ngcontent-%COMP%]   .card-big[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0079D7;\n  color: #ffffff;\n  border: 0;\n  border-radius: 100px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 10px 40px;\n  margin: 50px 0;\n  cursor: pointer;\n}\nmain[_ngcontent-%COMP%]   .card-big[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 10px 24px -12px rgba(0, 0, 0, 0.75);\n}\nmain[_ngcontent-%COMP%]   .card-big[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 40ch;\n  line-height: 24px;\n}\n.box1[_ngcontent-%COMP%] {\n  grid-area: box1;\n}\n.box2[_ngcontent-%COMP%] {\n  grid-area: box2;\n}\n.box3[_ngcontent-%COMP%] {\n  grid-area: box3;\n}\n.box4[_ngcontent-%COMP%] {\n  grid-area: box4;\n}\n.box5[_ngcontent-%COMP%] {\n  grid-area: box5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmtldC9EZXNrdG9wL01ldGFjb2duaXRpb24vZ2l0L2ltbXV0YWJsZXMvUHJvamVjdC9pbW11dGFibGVzL3NyYy9hcHAvX2Jhc2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc2Fua2V0L0Rlc2t0b3AvTWV0YWNvZ25pdGlvbi9naXQvaW1tdXRhYmxlcy9Qcm9qZWN0L2ltbXV0YWJsZXMvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EsbU9BQUE7QUFhUjtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNaSjtBRGlCQTtFQUNJLG9DQWJZO0FDRGhCO0FEZ0JBO0VBQ0ksdUNBZFc7QUNDZjtBQ21EQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNEQUNBO0VBRUEseUJBQUE7QURsREo7QUNtREk7RUFDSSxxQ0ZoRU87QUNlZjtBQ21ESTtFQUNJLGFBQUE7QURqRFI7QUNtREk7RUFDSSx5QkYzRUM7RUU0RUQsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEakRSO0FDa0RRO0VBQ0ksY0ZsRkM7RUVtRkQsZUFBQTtFQUNBLDJCQUFBO0FEaERaO0FDa0RRO0VBQ0ksZUFBQTtBRGhEWjtBQ21ESTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURqRFI7QUNrRFE7RUFDSSxvQkFBQTtBRGhEWjtBQ2tEUTtFQUNJLGVBQUE7RUFDQSxjRnBHQztBQ29EYjtBQ2tEUTtFQUNJLHlCRnZHQztFRXdHRCxjRnZHSDtFRXdHRyxTQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEaERaO0FDa0RRO0VBQ0ksbURBQUE7QURoRFo7QUNrRFE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRGhEWjtBQ3FEQTtFQUNJLGVBQUE7QURsREo7QUNvREE7RUFDSSxlQUFBO0FEakRKO0FDbURBO0VBQ0ksZUFBQTtBRGhESjtBQ2tEQTtFQUNJLGVBQUE7QUQvQ0o7QUNpREE7RUFDSSxlQUFBO0FEOUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZWZpbmUgYWxsIHRoZSB0aGUgY29kZSBoZXJlIHdoaWNoIGlzIGdvaW5nIHRvIGJlIHVzZWQgcmVwZWF0ZWRseVxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGluZCtNYWR1cmFpOndnaHRAMzAwOzQwMDs1MDAmZmFtaWx5PUlzdG9rK1dlYjp3Z2h0QDQwMDs3MDAmZmFtaWx5PUxvcmE6aXRhbCx3Z2h0QDAsNTAwOzAsNjAwOzEsNDAwOzEsNTAwOzEsNjAwJmZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XG5cbiRtYWluLWNvbG9yOiAjMDA3OUQ3O1xuJHdoaXRlIDogI2ZmZmZmZjtcbiRiZzogI2NkZTBmZjtcbiRkYXJrLWdyZXk6ICNBM0JBQ0M7XG4kdGV4dC1jb2xvcjogIzdBN0U4MTtcblxuJGhlYWRpbmctZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmcyLWZvbnQ6ICdJc3RvayBXZWInLCBzYW5zLXNlcmlmO1xuJHN1Yi1oZWFkaW5nLWZvbnQ6ICdMb3JhJywgc2VyaWY7IFxuJGNvbnRlbnQtZm9udDogJ0hpbmQgTWFkdXJhaScsIHNhbnMtc2VyaWY7XG5cbip7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbi8vIGJvZHl7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuLy8gfVxuaDEsaDIsaDMsaDR7XG4gICAgZm9udC1mYW1pbHk6ICRoZWFkaW5nMi1mb250O1xufVxucCwgbGFiZWx7XG4gICAgZm9udC1mYW1pbHk6ICRjb250ZW50LWZvbnQ7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhpbmQrTWFkdXJhaTp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1Jc3RvaytXZWI6d2dodEA0MDA7NzAwJmZhbWlseT1Mb3JhOml0YWwsd2dodEAwLDUwMDswLDYwMDsxLDQwMDsxLDUwMDsxLDYwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmgxLCBoMiwgaDMsIGg0IHtcbiAgZm9udC1mYW1pbHk6IFwiSXN0b2sgV2ViXCIsIHNhbnMtc2VyaWY7XG59XG5cbnAsIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiSGluZCBNYWR1cmFpXCIsIHNhbnMtc2VyaWY7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDkxdmg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJib3gxIGJveDIgYm94M1wiIFwiYm94MSBib3g0IGJveDVcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjZGQjtcbn1cbm1haW4gaDEsIG1haW4gaDIge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG5tYWluIC5ib3gge1xuICBwYWRkaW5nOiAyMHB4O1xufVxubWFpbiAuY2FyZCwgbWFpbiAuY2FyZC1iaWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDYwcHggMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWFpbiAuY2FyZCBzcGFuLCBtYWluIC5jYXJkLWJpZyBzcGFuIHtcbiAgY29sb3I6ICMwMDc5RDc7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpO1xufVxubWFpbiAuY2FyZCBwLCBtYWluIC5jYXJkLWJpZyBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxubWFpbiAuY2FyZC1iaWcge1xuICBwYWRkaW5nLXRvcDogMjAwcHg7XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxubWFpbiAuY2FyZC1iaWcgaDEge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbm1haW4gLmNhcmQtYmlnIGgxOjpmaXJzdC1sZXR0ZXIge1xuICBmb250LXNpemU6IDEyMCU7XG4gIGNvbG9yOiAjMDA3OUQ3O1xufVxubWFpbiAuY2FyZC1iaWcgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzlENztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xuICBtYXJnaW46IDUwcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWFpbiAuY2FyZC1iaWcgYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjRweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxubWFpbiAuY2FyZC1iaWcgcCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB3aWR0aDogNDBjaDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5ib3gxIHtcbiAgZ3JpZC1hcmVhOiBib3gxO1xufVxuXG4uYm94MiB7XG4gIGdyaWQtYXJlYTogYm94Mjtcbn1cblxuLmJveDMge1xuICBncmlkLWFyZWE6IGJveDM7XG59XG5cbi5ib3g0IHtcbiAgZ3JpZC1hcmVhOiBib3g0O1xufVxuXG4uYm94NSB7XG4gIGdyaWQtYXJlYTogYm94NTtcbn0iLCJAaW1wb3J0ICcuLi9iYXNlJztcblxuLy8gLmNvbnRhaW5lcntcbi8vICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4vLyAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbi8vICAgICB3aWR0aDogNzAlO1xuLy8gICAgIG1heC13aWR0aDogMTIwMHB4O1xuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICAgIHBhZGRpbmc6IDQwcHg7XG4vLyAgICAgLy8gY29sb3I6ICRtYWluLWNvbG9yO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGUwZmYyODtcbi8vICAgICB6LWluZGV4OiAtMTtcbi8vICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuLy8gICAgIGZvbnQtc2l6ZTogMXJlbTtcbi8vICAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgZ3JheTtcbi8vIH1cbi8vIC5oZWFkaW5ne1xuLy8gICAgIGZvbnQtZmFtaWx5OiAkaGVhZGluZzItZm9udDtcbi8vICAgICBmb250LXNpemU6IDNyZW07XG4vLyAgICAgbWFyZ2luLXRvcDogMXJlbTtcbi8vICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuLy8gICAgIGNvbG9yOiAjMDA3OUQ3O1xuLy8gfVxuLy8gLnBhcmEtb25le1xuLy8gICAgIGZvbnQtZmFtaWx5OiAkc3ViLWhlYWRpbmctZm9udDtcbi8vICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuLy8gICAgIGZvbnQtc2l6ZTogMnJlbTtcbi8vICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbi8vICAgICBsaW5lLWhlaWdodDogMWVtO1xuLy8gICAgIGNvbG9yOiAjMDA3OUQ3O1xuLy8gfVxuLy8gLnBhcmFze1xuLy8gICAgIGZvbnQtZmFtaWx5OiAkY29udGVudC1mb250O1xuLy8gICAgIG1hcmdpbjogMnJlbSAycmVtIGF1dG87XG4vLyAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuLy8gICAgIGZvbnQtc2l6ZTogMS40ZW07XG4vLyB9XG4vLyAuY2xvc2luZy1wYXJhe1xuLy8gICAgIGZvbnQtZmFtaWx5OiAkc3ViLWhlYWRpbmctZm9udDtcbi8vICAgICBmb250LXNpemU6IDEuM2VtO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgICAgbWFyZ2luOiAycmVtIDJyZW0gMDtcbi8vICAgICAvLyBwYWRkaW5nOiAxZW07XG4vLyAgICAgYm9yZGVyLXJhZGl1czogLjVlbTtcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlMGZmMjg7XG4vLyB9XG4vLyAucGFyYXMtY29udGFpbmVye1xuLy8gICAgIG1hcmdpbi10b3A6IDJyZW07XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuLy8gICAgLy9ib3JkZXI6IDFweCBzb2xpZCByZWQgO1xuLy8gICAgIGltZ3tcbi8vICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICAgICAgICB3aWR0aDogMzAwcHg7XG4vLyAgICAgICAgIGhlaWdodDogMzAwcHg7XG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbi8vICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1haW4tY29sb3I7XG4vLyAgICAgfVxuLy8gICAgIHB7XG4vLyAgICAgICAgIG1hcmdpbjogMCAycmVtO1xuLy8gICAgIH1cbi8vIH1cbm1haW57XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBoZWlnaHQ6IDkxdmg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwiYm94MSBib3gyIGJveDNcIlxuICAgIFwiYm94MSBib3g0IGJveDVcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNkZCO1xuICAgIGgxLCBoMntcbiAgICAgICAgZm9udC1mYW1pbHk6ICRoZWFkaW5nLWZvbnQ7XG4gICAgfVxuICAgIC5ib3h7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIC5jYXJkLCAuY2FyZC1iaWd7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDMwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KTtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkLWJpZ3tcbiAgICAgICAgcGFkZGluZy10b3A6IDIwMHB4O1xuICAgICAgICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgaDF7XG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBoMTo6Zmlyc3QtbGV0dGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA1MHB4IDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjRweCAtMTJweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiA0MGNoO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cbi5ib3gxe1xuICAgIGdyaWQtYXJlYTogYm94MTtcbn1cbi5ib3gye1xuICAgIGdyaWQtYXJlYTogYm94Mjtcbn1cbi5ib3gze1xuICAgIGdyaWQtYXJlYTogYm94Mztcbn1cbi5ib3g0e1xuICAgIGdyaWQtYXJlYTogYm94NDtcbn1cbi5ib3g1e1xuICAgIGdyaWQtYXJlYTogYm94NTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/loginapp/loginapp.component.ts":
/*!************************************************!*\
  !*** ./src/app/loginapp/loginapp.component.ts ***!
  \************************************************/
/*! exports provided: LoginappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginappComponent", function() { return LoginappComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function LoginappComponent_div_12_mat_hint_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginappComponent_div_12_mat_hint_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginappComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginappComponent_div_12_mat_hint_1_Template, 2, 0, "mat-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginappComponent_div_12_mat_hint_2_Template, 2, 0, "mat-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
function LoginappComponent_div_18_mat_hint_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginappComponent_div_18_mat_hint_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginappComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginappComponent_div_18_mat_hint_1_Template, 2, 0, "mat-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginappComponent_div_18_mat_hint_2_Template, 2, 0, "mat-hint", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.minlength);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginappComponent {
    constructor(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.submitted = false;
        this.credentials = {
            id: 0,
            name: "",
            email: "",
            password: ""
        };
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.auth.login(this.credentials).subscribe((data) => {
            if (data.token) {
                this.router.navigateByUrl('/Home');
            }
            else {
                alert(data.error);
            }
        }, err => {
            console.error(err);
        });
        // display form values on success
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
LoginappComponent.ɵfac = function LoginappComponent_Factory(t) { return new (t || LoginappComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginappComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginappComponent, selectors: [["app-loginapp"]], decls: 24, vars: 11, consts: [[1, "mat-display-2", "text-primary"], [2, "text-align", "center", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "placeholder", "Email", "formControlName", "email", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], [2, "text-align", "center", "margin-bottom", "10%", "margin-top", "5%"], ["mat-raised-button", "", "type", "submit", 1, "button"], [1, "mat-title", 2, "margin-bottom", "0"], [1, "invalid-feedback"], [4, "ngIf"]], template: function LoginappComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginappComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginappComponent_Template_input_ngModelChange_11_listener($event) { return ctx.credentials.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginappComponent_div_12_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginappComponent_Template_input_ngModelChange_17_listener($event) { return ctx.credentials.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginappComponent_div_18_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.email.errors))("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors))("ngModel", ctx.credentials.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  margin-left: 33%;\n  margin-right: 33%;\n  margin-top: 5%;\n  border-radius: 8%;\n}\n\n.mat-display-2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #0079D7;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n  font-size: medium;\n  padding-bottom: 0%;\n  width: 80%;\n  font-size: medium;\n  padding-bottom: 0%;\n  width: 80%;\n  font-size: medium;\n  padding-bottom: 0%;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 25%;\n  padding: 0;\n  background-color: #0079D7;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmtldC9EZXNrdG9wL01ldGFjb2duaXRpb24vZ2l0L2ltbXV0YWJsZXMvUHJvamVjdC9pbW11dGFibGVzL3NyYy9hcHAvbG9naW5hcHAvbG9naW5hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luYXBwL2xvZ2luYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQVcsaUJBQUE7RUFBa0Isa0JBQUE7RUFDakMsVUFBQTtFQUFXLGlCQUFBO0VBQWtCLGtCQUFBO0VBQzdCLFVBQUE7RUFBVyxpQkFBQTtFQUFrQixrQkFBQTtBQ083Qjs7QURKQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbmFwcC9sb2dpbmFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZHtcbiAgICBtYXJnaW4tbGVmdDogMzMlO1xuICAgIG1hcmdpbi1yaWdodDogMzMlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDglO1xufVxuXG4ubWF0LWRpc3BsYXktMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IzAwNzlENztcbn1cblxuLm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiA4MCU7Zm9udC1zaXplOiBtZWRpdW07cGFkZGluZy1ib3R0b206IDAlO1xud2lkdGg6IDgwJTtmb250LXNpemU6IG1lZGl1bTtwYWRkaW5nLWJvdHRvbTogMCU7XG53aWR0aDogODAlO2ZvbnQtc2l6ZTogbWVkaXVtO3BhZGRpbmctYm90dG9tOiAwJTtcbn1cblxuLmJ1dHRvbntcbiAgICB3aWR0aDogMjUlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzlENztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4iLCIubWF0LWNhcmQge1xuICBtYXJnaW4tbGVmdDogMzMlO1xuICBtYXJnaW4tcmlnaHQ6IDMzJTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDglO1xufVxuXG4ubWF0LWRpc3BsYXktMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDc5RDc7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OUQ3O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginappComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loginapp',
                templateUrl: './loginapp.component.html',
                styleUrls: ['./loginapp.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");











const MaterialComponents = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[MaterialComponents],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [MaterialComponents],
                exports: [MaterialComponents]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function QuizComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const count_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.select(count_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const count_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "question_no_link", count_r4 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](count_r4 + 1);
} }
function QuizComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tspan", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const count_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "option", count_r9 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "option", count_r9 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.numToSSColumn(count_r9 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r8, "");
} }
function QuizComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuizComponent_div_18_div_1_Template, 12, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.sques.o1);
} }
function QuizComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".a{fill:none;}.b{font-size:22px;font-family:Montserrat-Regular, Montserrat;}.c,.d{stroke:none;}");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tspan", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r11 = ctx.$implicit;
    const count_r12 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "option", count_r12 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "option", count_r12 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.numToSSColumn(count_r12 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r11, "");
} }
function QuizComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuizComponent_div_19_div_1_Template, 15, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.sques.o1);
} }
const qConst = [];
//   {
//     id: '0',
//     qNo: '1',
//     q: 'Which of the following statements should be used to obtain a remainder after dividing 3.14 by 2.1 ?',
//     o1: 'rem = 3.14 % 2.1;',
//     o2: 'rem = modf(3.14, 2.1);',
//     o3: 'rem = fmod(3.14, 2.1);',
//     o4: 'Remainder cannot be obtain in floating point division',
//   },
//   {
//     id: '1',
//     qNo: '2',
//     q: 'class Test { \n int i;\n } \n class Main { \n public static void main(String args[]) { \n Test t; \n     System.out.println(t.i); \n}' ,
//     o1: 'example00',
//     o2: 'example01',
//     o3: 'example02',
//     o4: 'example03',
//   },
//   {
//     id: '2',
//     qNo: '3',
//     q: 'what is anvcbcvxbvccd',
//     o1: 'example000',
//     o2: 'example001',
//     o3: 'example002',
//     o4: 'example003',
//   },
//   {
//     id: '3',
//     qNo: '4',
//     q: 'what is gfhfghfgh',
//     o1: 'example0000',
//     o2: 'example0001',
//     o3: 'example0002',
//     o4: 'example0003',
//   }
// ];
class QuizComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.ques = qConst;
        this.k = 0;
        this.sques = {
            no: 0,
            q: "",
            Question: "",
            Question_Type: "",
            o1: ["", "", "", ""]
        };
        this.ans = [];
    }
    ngOnInit() {
        if (this.ques.length == 0) {
            this.from_csv();
        }
        else {
            this.sques = qConst[this.k];
            //console.log(this.sques.Question)
            this.sques.Question = this.replaceAll(this.sques.Question, "\n", "<br>&nbsp;&nbsp;");
            this.pra = this.sques.Question;
            this.que_no = this.sques.no;
        }
    }
    replaceAll(string, search, replace) {
        string = string.split(search).join(replace);
        var k = 0;
        var str = "";
        var str2 = "";
        var i = 0;
        while (i < string.length) {
            if (string[i] == "{") {
                k += 3;
            }
            else if (string[i] == "}") {
                k -= 3;
            }
            if (string[i] == "<" && string[i + 1] == "b" && string[i + 2] == "r") {
                str += "<br>";
                i += 4;
                for (var j = 0; j < k; j++) {
                    str += "&nbsp;";
                }
                continue;
            }
            else if (string[i] == " ") {
                str += "&nbsp;";
            }
            else {
                str += string[i];
            }
            i += 1;
        }
        //console.log(str2)
        return str;
    }
    from_csv() {
        this.auth.quiz().subscribe((data) => {
            if (data.error) {
                alert(data.error);
            }
            else {
                var j = 1;
                for (var i = 0; i < 21; i++) {
                    var option = data[i]["Options"].split(',');
                    var x = {
                        no: (i + 1),
                        q: j.toString(),
                        Question: data[i]["Question"],
                        Question_Type: data[i]["Question Type"],
                        o1: option
                    };
                    qConst.push(x);
                    j++;
                }
                this.sques = qConst[this.k];
                //console.log(this.sques.Question)
                this.sques.Question = this.replaceAll(this.sques.Question, "\n", "<br> &nbsp;&nbsp;&nbsp;");
                this.pra = this.sques.Question;
                this.que_no = this.sques.no;
                //alert(this.sques.Question)
            }
        }, error => {
            console.error(error);
        });
    }
    select(qno) {
        // if(qno === 0)
        // {
        //   document.getElementById("back_button").style.display="none";
        //   this.sques = qConst[qno];
        // }
        // else{
        //   document.getElementById("back_button").style.display="";
        //   this.sques = qConst[qno];
        // }
        this.sques = qConst[parseInt(qno)];
        this.pra = this.sques.Question;
        this.k = parseInt(qno);
        this.que_no = parseInt(qno) + 1;
    }
    nextque() {
        if (this.k + 1 < this.ques.length) {
            this.k++;
            this.sques = qConst[this.k];
            this.pra = this.sques.Question;
            this.que_no = this.sques.no;
        }
        //console.log(this.sques.Question)
    }
    prevque() {
        if (this.k - 1 >= 0) {
            this.k--;
            this.sques = qConst[this.k];
            this.pra = this.sques.Question;
            this.que_no = this.sques.no;
        }
    }
    numToSSColumn(num) {
        var s = '';
        var t = 0;
        while (num > 0) {
            t = (num - 1) % 26;
            s = String.fromCharCode(65 + t) + s;
            num = (num - t) / 26 | 0;
        }
        return s || undefined;
    }
}
QuizComponent.ɵfac = function QuizComponent_Factory(t) { return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizComponent, selectors: [["app-quiz"]], decls: 24, vars: 5, consts: [[1, "outer_container"], [1, "left_panel"], [1, "question_no_links"], ["class", "question_no_button", "style", "display: inline-block;", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "quiz_container"], [1, "path"], [1, "question_container"], ["id", "question"], [3, "innerHTML"], ["id", "question_no", 3, "innerHTML"], ["class", "options", 4, "ngIf"], ["id", "back_button", 3, "click"], ["src", "icon-left.svg", "alt", "Back"], ["id", "next_button", 3, "click"], ["src", "icon-right.svg", "alt", "Next"], [1, "question_no_button", 2, "display", "inline-block", 3, "id", "click"], [1, "options"], ["class", "inputGroup", "id", "1", 4, "ngFor", "ngForOf"], ["id", "1", 1, "inputGroup"], ["value", "1", "name", "radio", "type", "radio", 3, "id"], [3, "for"], ["xmlns", "http://www.w3.org/2000/svg", "width", "42", "height", "42", "viewBox", "0 0 42 42"], ["id", "A_Container", "data-name", "A Container", "transform", "translate(-1102 -403)"], ["id", "BG_", "data-name", "BG ", "transform", "translate(1102 403)", "fill", "#f3f6fb"], ["d", "M 21 41.5 C 18.2322998046875 41.5 15.54765033721924 40.95804977416992 13.0206298828125 39.88920974731445 C 10.57956027984619 38.85673141479492 8.387160301208496 37.3785285949707 6.504310131072998 35.49568939208984 C 4.621469974517822 33.61283874511719 3.143270015716553 31.42044067382813 2.110790014266968 28.9793701171875 C 1.041949987411499 26.45235061645508 0.5 23.7677001953125 0.5 21 C 0.5 18.2322998046875 1.041949987411499 15.54765033721924 2.110790014266968 13.0206298828125 C 3.143270015716553 10.57956027984619 4.621469974517822 8.387160301208496 6.504310131072998 6.504310131072998 C 8.387160301208496 4.621469974517822 10.57956027984619 3.143270015716553 13.0206298828125 2.110790014266968 C 15.54765033721924 1.041949987411499 18.2322998046875 0.5 21 0.5 C 23.7677001953125 0.5 26.45235061645508 1.041949987411499 28.9793701171875 2.110790014266968 C 31.42044067382813 3.143270015716553 33.61283874511719 4.621469974517822 35.49568939208984 6.504310131072998 C 37.3785285949707 8.387160301208496 38.85673141479492 10.57956027984619 39.88920974731445 13.0206298828125 C 40.95804977416992 15.54765033721924 41.5 18.2322998046875 41.5 21 C 41.5 23.7677001953125 40.95804977416992 26.45235061645508 39.88920974731445 28.9793701171875 C 38.85673141479492 31.42044067382813 37.3785285949707 33.61283874511719 35.49568939208984 35.49568939208984 C 33.61283874511719 37.3785285949707 31.42044067382813 38.85673141479492 28.9793701171875 39.88920974731445 C 26.45235061645508 40.95804977416992 23.7677001953125 41.5 21 41.5 Z", "stroke", "none"], ["d", "M 21 1 C 18.29957962036133 1 15.68045997619629 1.528659820556641 13.21540069580078 2.5712890625 C 10.83394050598145 3.578559875488281 8.694950103759766 5.020778656005859 6.857860565185547 6.857860565185547 C 5.020778656005859 8.694950103759766 3.578559875488281 10.83394050598145 2.5712890625 13.21540069580078 C 1.528659820556641 15.68045997619629 1 18.29957962036133 1 21 C 1 23.70042037963867 1.528659820556641 26.31954002380371 2.5712890625 28.78459930419922 C 3.578559875488281 31.16606140136719 5.020778656005859 33.30504989624023 6.857860565185547 35.14213943481445 C 8.694950103759766 36.97922134399414 10.83394050598145 38.42144012451172 13.21540069580078 39.4287109375 C 15.68045997619629 40.47134017944336 18.29957962036133 41 21 41 C 23.70042037963867 41 26.31954002380371 40.47134017944336 28.78459930419922 39.4287109375 C 31.16606140136719 38.42144012451172 33.30504989624023 36.97922134399414 35.14213943481445 35.14213943481445 C 36.97922134399414 33.30504989624023 38.42144012451172 31.16606140136719 39.4287109375 28.78459930419922 C 40.47134017944336 26.31954002380371 41 23.70042037963867 41 21 C 41 18.29957962036133 40.47134017944336 15.68045997619629 39.4287109375 13.21540069580078 C 38.42144012451172 10.83394050598145 36.97922134399414 8.694950103759766 35.14213943481445 6.857860565185547 C 33.30504989624023 5.020778656005859 31.16606140136719 3.578559875488281 28.78459930419922 2.5712890625 C 26.31954002380371 1.528659820556641 23.70042037963867 1 21 1 M 21 0 C 32.59798049926758 0 42 9.402019500732422 42 21 C 42 32.59798049926758 32.59798049926758 42 21 42 C 9.402019500732422 42 0 32.59798049926758 0 21 C 0 9.402019500732422 9.402019500732422 0 21 0 Z", "stroke", "none", "fill", "#f3f6fb", 1, "svg_circle"], ["id", "Text_A", "data-name", "Text A", "transform", "translate(1115 409)", "font-size", "22", "font-family", "Montserrat-Regular, Montserrat", 1, "svg_alpha"], ["x", "0", "y", "22"], ["value", "1", "name", "radio", "type", "checkbox", 3, "id"], ["id", "check", 3, "for"], ["xmlns", "http://www.w3.org/2000/svg", "width", "44", "height", "44", "viewBox", "0 0 44 44"], ["transform", "translate(-438 -325)"], ["transform", "translate(438 325)", 1, "a"], ["fill", "#f3f6fb", "d", "M10,0H34A10,10,0,0,1,44,10V34A10,10,0,0,1,34,44H10A10,10,0,0,1,0,34V10A10,10,0,0,1,10,0Z", 1, "c"], ["fill", "#f3f6fb", "d", "M 10 1 C 5.037380218505859 1 1 5.037380218505859 1 10 L 1 34 C 1 38.96261978149414 5.037380218505859 43 10 43 L 34 43 C 38.96261978149414 43 43 38.96261978149414 43 34 L 43 10 C 43 5.037380218505859 38.96261978149414 1 34 1 L 10 1 M 10 0 L 34 0 C 39.52285003662109 0 44 4.477149963378906 44 10 L 44 34 C 44 39.52285003662109 39.52285003662109 44 34 44 L 10 44 C 4.477149963378906 44 0 39.52285003662109 0 34 L 0 10 C 0 4.477149963378906 4.477149963378906 0 10 0 Z", 1, "d", "svg_circle"], ["transform", "translate(452 332)", 1, "b", "svg_alpha"]], template: function QuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuizComponent_button_3_Template, 2, 2, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Topic Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sub Topic Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "] \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, QuizComponent_div_18_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, QuizComponent_div_19_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_Template_button_click_20_listener() { return ctx.prevque(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_Template_button_click_22_listener() { return ctx.nextque(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ques);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.que_no, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.pra, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sques.Question_Type === "SCQ" || ctx.sques.Question_Type === "T/F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sques.Question_Type === "MCQ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400[_ngcontent-%COMP%];500&family=Istok[_ngcontent-%COMP%] + Web[_ngcontent-%COMP%]:wght@400;700&family=Lora[_ngcontent-%COMP%]:ital, wght@0[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 600[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 400[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 600&family=Montserrat[_ngcontent-%COMP%]:wght@400;500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700[_ngcontent-%COMP%];800[_ngcontent-%COMP%];900&display=swap\")[_ngcontent-%COMP%];\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-family: \"Istok Web\", sans-serif;\n}\np[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-family: \"Hind Madurai\", sans-serif;\n}\n.outer_container[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f3faff6e;\n}\n.left_panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  width: 18%;\n  min-height: calc(100vh - 65px);\n  height: auto;\n  background-color: #ffffff;\n  padding: 15px;\n  border-right: 1px solid #cde0ff;\n  padding-top: 100px;\n}\n.left_panel[_ngcontent-%COMP%]   .question_no_links[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  align-content: center;\n  align-items: flex-start;\n  justify-content: center;\n}\n.left_panel[_ngcontent-%COMP%]   .question_no_links[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 30px;\n  width: 30px;\n  height: 30px;\n  margin: 5px;\n  border-radius: 50%;\n  border: 1px solid #A3BACC;\n  background-color: #ffffff;\n  color: #A3BACC;\n  outline: none;\n  font-family: \"Hind Madurai\", sans-serif;\n  cursor: pointer;\n}\n.left_panel[_ngcontent-%COMP%]   .question_no_links[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border: 1px solid #0079D7;\n  color: #0079D7;\n}\n.quiz_container[_ngcontent-%COMP%] {\n  width: 85%;\n  padding: 0 50px;\n  padding-right: 150px;\n}\n.quiz_container[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #0079D7;\n  font-family: \"Lora\", serif;\n  border: 2px solid #80808052;\n  padding: 0 20px;\n  display: block;\n  margin: 0;\n  border-radius: 100px;\n}\n.quiz_container[_ngcontent-%COMP%]   .question_container[_ngcontent-%COMP%] {\n  margin: 30px auto;\n}\n.quiz_container[_ngcontent-%COMP%]   .question_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #0079D7;\n  font-size: 1.2rem;\n  font-weight: 400;\n  line-height: 1.8rem;\n  letter-spacing: 0.005rem;\n}\n.quiz_container[_ngcontent-%COMP%]   .question_container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  margin: 50px 0;\n  display: block;\n}\n.quiz_container[_ngcontent-%COMP%]   .question_container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.quiz_container[_ngcontent-%COMP%]   .question_container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%] {\n  margin: 25px;\n}\n.quiz_container[_ngcontent-%COMP%]   .question_container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  padding: 10px 5px;\n  padding-right: 20px;\n  text-align: left;\n  color: #000;\n  cursor: pointer;\n  position: relative;\n  border-radius: 500px;\n  border: 1px solid #cde0ff;\n  min-width: 400px;\n  max-width: -webkit-max-content;\n  max-width: -moz-max-content;\n  max-width: max-content;\n  font-size: 1.05rem;\n  vertical-align: middle;\n}\n.quiz_container[_ngcontent-%COMP%]   .question_container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 2rem;\n  position: relative;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.quiz_container[_ngcontent-%COMP%]   .question_container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   #check[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.quiz_container[_ngcontent-%COMP%]   .question_container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\n  color: #0079D7;\n  border: 1px solid #0079D7;\n}\n.quiz_container[_ngcontent-%COMP%]   .question_container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]   .svg_alpha[_ngcontent-%COMP%], .quiz_container[_ngcontent-%COMP%]   .question_container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]   .svg_circle[_ngcontent-%COMP%] {\n  fill: #0079D7;\n}\n.quiz_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  height: 75px;\n  width: 75px;\n  outline: none;\n  border: none;\n  background-repeat: no-repeat;\n  background-color: rgba(0, 0, 0, 0);\n  background-image: url(\"icon-left.svg\");\n  cursor: pointer;\n  opacity: 0.5;\n}\n.quiz_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.quiz_container[_ngcontent-%COMP%]   #next_button[_ngcontent-%COMP%] {\n  float: right;\n  background-image: url(\"icon-right.svg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmtldC9EZXNrdG9wL01ldGFjb2duaXRpb24vZ2l0L2ltbXV0YWJsZXMvUHJvamVjdC9pbW11dGFibGVzL3NyYy9hcHAvX2Jhc2Uuc2NzcyIsIi9ob21lL3NhbmtldC9EZXNrdG9wL01ldGFjb2duaXRpb24vZ2l0L2ltbXV0YWJsZXMvUHJvamVjdC9pbW11dGFibGVzL3NyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWl6L3F1aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EsbU9BQUE7QUNBQSwrRUFBQTtBRGFSO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRVhKO0FGZ0JBO0VBQ0ksb0NBYlk7QUVBaEI7QUZlQTtFQUNJLHVDQWRXO0FFRWY7QURYQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBQ2NKO0FEWkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJEVEs7RUNVTCxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQ2VKO0FEZEk7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FDZVI7QURiUTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJEN0JIO0VDOEJHLGNENUJBO0VDNkJBLGFBQUE7RUFDQSx1Q0R4Qkc7RUN5QkgsZUFBQTtBQ2VaO0FEWlE7RUFDSSx5QkFBQTtFQUNBLGNEdkNDO0FFcURiO0FEUkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDV0o7QURWSTtFQUNJLHFCQUFBO0VBRUEsY0RwREs7RUNxREwsMEJEN0NXO0VDOENYLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUNXUjtBRFRJO0VBQ0ksaUJBQUE7QUNXUjtBRFRRO0VBQ0ksY0RoRUM7RUNpRUQsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNXWjtBRFJRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNVWjtBRFBZO0VBRUksYUFBQTtBQ1FoQjtBRE5ZO0VBQ0ksWUFBQTtBQ1FoQjtBRExZO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFFQSxrQkFBQTtFQUNBLHNCQUFBO0FDTWhCO0FESmdCO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ01wQjtBREZZO0VBQ0ksbUJBQUE7QUNJaEI7QURGWTtFQUNJLGNEakhIO0VDa0hHLHlCQUFBO0FDSWhCO0FERmdCO0VBQXlCLGFEcEg1QjtBRXlIYjtBRENJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDUjtBRENJO0VBQ0ksVUFBQTtBQ0NSO0FEQ0k7RUFDSSxZQUFBO0VBQ0EsdUNBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZGVmaW5lIGFsbCB0aGUgdGhlIGNvZGUgaGVyZSB3aGljaCBpcyBnb2luZyB0byBiZSB1c2VkIHJlcGVhdGVkbHlcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhpbmQrTWFkdXJhaTp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1Jc3RvaytXZWI6d2dodEA0MDA7NzAwJmZhbWlseT1Mb3JhOml0YWwsd2dodEAwLDUwMDswLDYwMDsxLDQwMDsxLDUwMDsxLDYwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xuXG4kbWFpbi1jb2xvcjogIzAwNzlENztcbiR3aGl0ZSA6ICNmZmZmZmY7XG4kYmc6ICNjZGUwZmY7XG4kZGFyay1ncmV5OiAjQTNCQUNDO1xuJHRleHQtY29sb3I6ICM3QTdFODE7XG5cbiRoZWFkaW5nLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiRoZWFkaW5nMi1mb250OiAnSXN0b2sgV2ViJywgc2Fucy1zZXJpZjtcbiRzdWItaGVhZGluZy1mb250OiAnTG9yYScsIHNlcmlmOyBcbiRjb250ZW50LWZvbnQ6ICdIaW5kIE1hZHVyYWknLCBzYW5zLXNlcmlmO1xuXG4qe1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4vLyBib2R5e1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICRiZztcbi8vIH1cbmgxLGgyLGgzLGg0e1xuICAgIGZvbnQtZmFtaWx5OiAkaGVhZGluZzItZm9udDtcbn1cbnAsIGxhYmVse1xuICAgIGZvbnQtZmFtaWx5OiAkY29udGVudC1mb250O1xufSIsIkBpbXBvcnQgJy4uL2Jhc2UnO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcblxuLm91dGVyX2NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2ZhZmY2ZTtcbn1cbi5sZWZ0X3BhbmVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDE4JTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjVweCk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRiZztcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgLnF1ZXN0aW9uX25vX2xpbmtze1xuICAgICAgICAvL2hlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGZsZXg6IDAgMCAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRkYXJrLWdyZXk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogJGRhcmstZ3JleTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGNvbnRlbnQtZm9udDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxufVxuLnF1aXpfY29udGFpbmVye1xuICAgIHdpZHRoOiA4NSU7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xuICAgIC5wYXRoe1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkc3ViLWhlYWRpbmctZm9udDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzgwODA4MDUyO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIH1cbiAgICAucXVlc3Rpb25fY29udGFpbmVye1xuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICAgICAgXG4gICAgICAgIHB7XG4gICAgICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDA1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm9wdGlvbnN7XG4gICAgICAgICAgICBtYXJnaW46IDUwcHggIDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIC8vIGZsZXgtZmxvdzogcm93IHdyYXA7XG5cbiAgICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgICAgIC8vIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlucHV0R3JvdXAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRiZztcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICAgICAgICBzdmd7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjY2hlY2t7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgfiBsYWJlbHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1haW4tY29sb3I7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnN2Z19hbHBoYSwgLnN2Z19jaXJjbGUge2ZpbGw6ICRtYWluLWNvbG9yO31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYnV0dG9ue1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaWNvbi1sZWZ0LnN2Z1wiKTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgI25leHRfYnV0dG9ue1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImljb24tcmlnaHQuc3ZnXCIpO1xuXG4gICAgfVxuXG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gLm91dGVyX2NvbnRhaW5lcntcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gfVxuLy8gLnNpZGVfcGFuZWx7XG4vLyAgICAgd2lkdGg6IDI1dnc7XG5cbi8vICAgICAucXVlc3Rpb25fbm9fbGlua3N7XG4vLyAgICAgICAgIG1hcmdpbjogMjAwcHggYXV0bztcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbi8vICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7ICAgIFxuLy8gICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbi8vICAgICAgICAgbWluLXdpZHRoOjE1NXB4O1xuLy8gICAgICAgICBtYXgtd2lkdGg6MTU1cHg7XG4vLyAgICAgICAgIHdpZHRoOiAxNTVweDtcbi8vICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1haW4tY29sb3I7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbi8vICAgICB9XG5cbi8vICAgICBidXR0b257XG4vLyAgICAgICAgIGZsZXg6IDAgMCAzMHB4O1xuLy8gICAgICAgICB3aWR0aDogMzBweDtcbi8vICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuLy8gICAgICAgICBtYXJnaW46IDEwcHg7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1haW4tY29sb3I7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbi8vICAgICB9XG4vLyAgICAgYnV0dG9uOmhvdmVye1xuLy8gICAgICAgICBvcGFjaXR5OiAwLjU7XG4vLyAgICAgfVxuLy8gICAgIGJ1dHRvbjphY3RpdmV7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xuLy8gICAgICAgICBjb2xvcjogJHdoaXRlO1xuLy8gICAgIH1cbi8vIH1cbi8vIC5jb250YWluZXJ7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcbi8vICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuLy8gICAgIG1hcmdpbjogMCBjYWxjKDEwMHZ3IC0gNzUlKTtcbi8vICAgICB3aWR0aDogNTB2dztcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4vLyAgICAgcGFkZGluZzogNDBweDtcbi8vICAgICAvL3otaW5kZXg6IC0xO1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLy8gICAgIGgxe1xuLy8gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xuLy8gICAgIH1cblxuLy8gICAgIHB7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAgICAgfVxuXG4vLyAgICAgLm9wdGlvbnN7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAgICAgICAgIHotaW5kZXg6ICs5OTk5O1xuLy8gICAgICAgICA6Om5nLWRlZXAgLm1hdC1yaXBwbGUtZWxlbWVudHtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xuLy8gICAgICAgICB9XG5cbi8vICAgICB9XG5cbi8vICAgICBidXR0b257XG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcbi8vICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbi8vICAgICB9XG4vLyB9XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGluZCtNYWR1cmFpOndnaHRAMzAwOzQwMDs1MDAmZmFtaWx5PUlzdG9rK1dlYjp3Z2h0QDQwMDs3MDAmZmFtaWx5PUxvcmE6aXRhbCx3Z2h0QDAsNTAwOzAsNjAwOzEsNDAwOzEsNTAwOzEsNjAwJmZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaDEsIGgyLCBoMywgaDQge1xuICBmb250LWZhbWlseTogXCJJc3RvayBXZWJcIiwgc2Fucy1zZXJpZjtcbn1cblxucCwgbGFiZWwge1xuICBmb250LWZhbWlseTogXCJIaW5kIE1hZHVyYWlcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm91dGVyX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2ZhZmY2ZTtcbn1cblxuLmxlZnRfcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDE4JTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY1cHgpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZGUwZmY7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbi5sZWZ0X3BhbmVsIC5xdWVzdGlvbl9ub19saW5rcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sZWZ0X3BhbmVsIC5xdWVzdGlvbl9ub19saW5rcyBidXR0b24ge1xuICBmbGV4OiAwIDAgMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0EzQkFDQztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6ICNBM0JBQ0M7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIkhpbmQgTWFkdXJhaVwiLCBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGVmdF9wYW5lbCAucXVlc3Rpb25fbm9fbGlua3MgYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNzlENztcbiAgY29sb3I6ICMwMDc5RDc7XG59XG5cbi5xdWl6X2NvbnRhaW5lciB7XG4gIHdpZHRoOiA4NSU7XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgcGFkZGluZy1yaWdodDogMTUwcHg7XG59XG4ucXVpel9jb250YWluZXIgLnBhdGgge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjMDA3OUQ3O1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjODA4MDgwNTI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG4ucXVpel9jb250YWluZXIgLnF1ZXN0aW9uX2NvbnRhaW5lciB7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuLnF1aXpfY29udGFpbmVyIC5xdWVzdGlvbl9jb250YWluZXIgcCB7XG4gIGNvbG9yOiAjMDA3OUQ3O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDA1cmVtO1xufVxuLnF1aXpfY29udGFpbmVyIC5xdWVzdGlvbl9jb250YWluZXIgLm9wdGlvbnMge1xuICBtYXJnaW46IDUwcHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucXVpel9jb250YWluZXIgLnF1ZXN0aW9uX2NvbnRhaW5lciAub3B0aW9ucyBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucXVpel9jb250YWluZXIgLnF1ZXN0aW9uX2NvbnRhaW5lciAub3B0aW9ucyAuaW5wdXRHcm91cCB7XG4gIG1hcmdpbjogMjVweDtcbn1cbi5xdWl6X2NvbnRhaW5lciAucXVlc3Rpb25fY29udGFpbmVyIC5vcHRpb25zIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkZTBmZjtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnF1aXpfY29udGFpbmVyIC5xdWVzdGlvbl9jb250YWluZXIgLm9wdGlvbnMgbGFiZWwgc3ZnIHtcbiAgaGVpZ2h0OiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5xdWl6X2NvbnRhaW5lciAucXVlc3Rpb25fY29udGFpbmVyIC5vcHRpb25zICNjaGVjayB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucXVpel9jb250YWluZXIgLnF1ZXN0aW9uX2NvbnRhaW5lciAub3B0aW9ucyBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xuICBjb2xvcjogIzAwNzlENztcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNzlENztcbn1cbi5xdWl6X2NvbnRhaW5lciAucXVlc3Rpb25fY29udGFpbmVyIC5vcHRpb25zIGlucHV0OmNoZWNrZWQgfiBsYWJlbCAuc3ZnX2FscGhhLCAucXVpel9jb250YWluZXIgLnF1ZXN0aW9uX2NvbnRhaW5lciAub3B0aW9ucyBpbnB1dDpjaGVja2VkIH4gbGFiZWwgLnN2Z19jaXJjbGUge1xuICBmaWxsOiAjMDA3OUQ3O1xufVxuLnF1aXpfY29udGFpbmVyIGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiA3NXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImljb24tbGVmdC5zdmdcIik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC41O1xufVxuLnF1aXpfY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucXVpel9jb250YWluZXIgI25leHRfYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpY29uLXJpZ2h0LnN2Z1wiKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiz',
                templateUrl: './quiz.component.html',
                styleUrls: ['./quiz.component.scss']
            }]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/registrationapp/_helpers/must-match.validator.ts":
/*!******************************************************************!*\
  !*** ./src/app/registrationapp/_helpers/must-match.validator.ts ***!
  \******************************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/registrationapp/registrationapp.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/registrationapp/registrationapp.component.ts ***!
  \**************************************************************/
/*! exports provided: RegistrationappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationappComponent", function() { return RegistrationappComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_helpers/must-match.validator */ "./src/app/registrationapp/_helpers/must-match.validator.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function RegistrationappComponent_div_17_mat_hint_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationappComponent_div_17_mat_hint_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationappComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationappComponent_div_17_mat_hint_1_Template, 2, 0, "mat-hint", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationappComponent_div_17_mat_hint_2_Template, 2, 0, "mat-hint", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
function RegistrationappComponent_div_23_mat_hint_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationappComponent_div_23_mat_hint_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationappComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationappComponent_div_23_mat_hint_1_Template, 2, 0, "mat-hint", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationappComponent_div_23_mat_hint_2_Template, 2, 0, "mat-hint", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.minlength);
} }
function RegistrationappComponent_div_29_mat_hint_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationappComponent_div_29_mat_hint_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationappComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationappComponent_div_29_mat_hint_1_Template, 2, 0, "mat-hint", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationappComponent_div_29_mat_hint_2_Template, 2, 0, "mat-hint", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.confirmPassword.errors.mustMatch);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class RegistrationappComponent {
    constructor(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.submitted = false;
        this.credentials = {
            id: 0,
            name: "",
            email: "",
            password: ""
        };
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_2__["MustMatch"])('password', 'confirmPassword')
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.auth.register(this.credentials).subscribe((data) => {
            if (data.error) {
                alert(data.error);
            }
            else {
                this.router.navigateByUrl('/Home');
            }
        }, error => {
            console.error(error);
        });
        // display form values on success
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
RegistrationappComponent.ɵfac = function RegistrationappComponent_Factory(t) { return new (t || RegistrationappComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegistrationappComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationappComponent, selectors: [["app-registrationapp"]], decls: 49, vars: 19, consts: [[1, "mat-display-2"], [2, "text-align", "center", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "type", "text", "formControlName", "name", "placeholder", "Name", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Email", "formControlName", "email", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "formControlName", "confirmPassword", "placeholder", "Password", 1, "form-control", 3, "ngClass"], [2, "text-align", "center", "margin-bottom", "10%", "margin-top", "5%"], ["mat-raised-button", "", "type", "submit", 1, "button"], [1, "mat-title", 2, "margin-bottom", "0"], [1, "hint"], ["href", "/Login"], [1, "img"], [2, "display", "inline-block", "margin-right", "5%"], ["mat-flat-button", "", 2, "background-color", "white", "padding", "0", "outline", "none"], ["src", "../../assets/google_PNG19635.png", "alt", "", "role", "button", "width", "50", "height", "50"], [2, "display", "inline-block"], ["src", "../../assets/facebook_logos_PNG19754.png", "alt", "", "role", "button", "width", "50", "height", "50"], [1, "invalid-feedback"], [4, "ngIf"]], template: function RegistrationappComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Registration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationappComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationappComponent_Template_input_ngModelChange_11_listener($event) { return ctx.credentials.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationappComponent_Template_input_ngModelChange_16_listener($event) { return ctx.credentials.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegistrationappComponent_div_17_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationappComponent_Template_input_ngModelChange_22_listener($event) { return ctx.credentials.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegistrationappComponent_div_23_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegistrationappComponent_div_29_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Already have account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submitted))("ngModel", ctx.credentials.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.email.errors))("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.password.errors))("ngModel", ctx.credentials.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.confirmPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.confirmPassword.errors);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  margin-left: 33%;\n  margin-right: 33%;\n  margin-top: 5%;\n  border-radius: 8%;\n}\n\n.mat-display-2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #0079D7;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n  font-size: medium;\n  padding-bottom: 0%;\n  width: 80%;\n  font-size: medium;\n  padding-bottom: 0%;\n  width: 80%;\n  font-size: medium;\n  padding-bottom: 0%;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 25%;\n  padding: 0;\n  background-color: #0079D7;\n  color: white;\n}\n\n.hint[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 5%;\n}\n\n.img[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmtldC9EZXNrdG9wL01ldGFjb2duaXRpb24vZ2l0L2ltbXV0YWJsZXMvUHJvamVjdC9pbW11dGFibGVzL3NyYy9hcHAvcmVnaXN0cmF0aW9uYXBwL3JlZ2lzdHJhdGlvbmFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaXN0cmF0aW9uYXBwL3JlZ2lzdHJhdGlvbmFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUFXLGlCQUFBO0VBQWtCLGtCQUFBO0VBQ2pDLFVBQUE7RUFBVyxpQkFBQTtFQUFrQixrQkFBQTtFQUM3QixVQUFBO0VBQVcsaUJBQUE7RUFBa0Isa0JBQUE7QUNPN0I7O0FESkE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ09KOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ01KOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uYXBwL3JlZ2lzdHJhdGlvbmFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZHtcbiAgICBtYXJnaW4tbGVmdDogMzMlO1xuICAgIG1hcmdpbi1yaWdodDogMzMlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDglO1xufVxuXG4ubWF0LWRpc3BsYXktMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IzAwNzlENztcbn1cblxuLm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiA4MCU7Zm9udC1zaXplOiBtZWRpdW07cGFkZGluZy1ib3R0b206IDAlO1xud2lkdGg6IDgwJTtmb250LXNpemU6IG1lZGl1bTtwYWRkaW5nLWJvdHRvbTogMCU7XG53aWR0aDogODAlO2ZvbnQtc2l6ZTogbWVkaXVtO3BhZGRpbmctYm90dG9tOiAwJTtcbn1cblxuLmJ1dHRvbntcbiAgICB3aWR0aDogMjUlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzlENztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuLmhpbnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uaW1ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn0iLCIubWF0LWNhcmQge1xuICBtYXJnaW4tbGVmdDogMzMlO1xuICBtYXJnaW4tcmlnaHQ6IDMzJTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDglO1xufVxuXG4ubWF0LWRpc3BsYXktMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDc5RDc7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OUQ3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oaW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationappComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registrationapp',
                templateUrl: './registrationapp.component.html',
                styleUrls: ['./registrationapp.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/__ivy_ngcc__/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class SidebarComponent {
    constructor() {
        this.opened = false;
    }
    ngOnInit() {
    }
    togglesidebar() {
        // this.opened = !this.opened;
        if (this.opened) {
            console.log("opened");
            this.onClose();
        }
        else {
            console.log("Closed");
            this.onOpen();
        }
    }
    onClose() {
        this.opened = false;
        setTimeout(() => {
            var x = document.getElementById("ngs");
            //x.style.transform = "translateX(" + (-300) + "px) ";
            x.style.width = "35px";
            //y.style.marginLeft = "-25px";
        }, 250);
        var y = document.getElementById("open-sidebar");
        y.style.transform = "translateX(" + (0) + "px) ";
        var arrowOpen = document.getElementById("arrow-Open");
        arrowOpen.style.display = "";
        var arrowClose = document.getElementById("arrow-Close");
        arrowClose.style.display = "none";
    }
    onOpen() {
        this.opened = true;
        var x = document.getElementById("ngs");
        //x.style.transform = "translateX(" + (300) + "px) ";
        x.style.width = "100%";
        var y = document.getElementById("open-sidebar");
        y.style.transform = "translateX(" + (300) + "px) ";
        //y.style.marginLeft = "275px";
        var arrowOpen = document.getElementById("arrow-Open");
        arrowOpen.style.display = "none";
        var arrowClose = document.getElementById("arrow-Close");
        arrowClose.style.display = "";
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 26, vars: 1, consts: [["id", "ngs"], ["id", "side", 3, "opened"], ["routerLink", "/Quiz"], ["ng-sidebar-content", ""], ["id", "open-sidebar", 1, "open-sidebar", 3, "click"], ["id", "arrow-Close", 1, "material-icons", 2, "display", "none"], ["id", "arrow-Open", 1, "material-icons"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-sidebar-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Topics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Classes and Objects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Polymorphism");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Inheritance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "MultiThreading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_21_listener() { return ctx.togglesidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " keyboard_arrow_left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.opened);
    } }, directives: [ng_sidebar__WEBPACK_IMPORTED_MODULE_1__["SidebarContainer"], ng_sidebar__WEBPACK_IMPORTED_MODULE_1__["Sidebar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400[_ngcontent-%COMP%];500&family=Istok[_ngcontent-%COMP%] + Web[_ngcontent-%COMP%]:wght@400;700&family=Lora[_ngcontent-%COMP%]:ital, wght@0[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 600[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 400[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 600&family=Montserrat[_ngcontent-%COMP%]:wght@400;500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700[_ngcontent-%COMP%];800[_ngcontent-%COMP%];900&display=swap\")[_ngcontent-%COMP%];\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-family: \"Istok Web\", sans-serif;\n}\np[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-family: \"Hind Madurai\", sans-serif;\n}\nng-sidebar-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  margin-top: 50px;\n  height: 100%;\n  width: 35px;\n  z-index: 0;\n}\nng-sidebar-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #0079D7;\n  cursor: pointer;\n}\nng-sidebar-container[_ngcontent-%COMP%]   .close-sidebar[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  border: 0;\n  background-color: #ffffff;\n  color: #0079D7;\n  float: right;\n}\nng-sidebar-container[_ngcontent-%COMP%]   .open-sidebar[_ngcontent-%COMP%] {\n  margin-top: 300px;\n  height: 50px;\n  width: 50px;\n  border: 0;\n  border-radius: 100px;\n  margin-left: -25px;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);\n  transition: all 0.3s cubic-bezier(0, 0, 0.3, 1);\n  z-index: 999;\n  position: relative;\n  border: 0;\n  outline: 0;\n}\nng-sidebar-container[_ngcontent-%COMP%]   .open-sidebar[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  color: #0079D7;\n}\nng-sidebar-container[_ngcontent-%COMP%]   #arrow-Open[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  margin-right: 0;\n}\nng-sidebar-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 20%;\n  text-align: center;\n  color: #0079D7;\n  font-size: 2rem;\n  font-family: \"Istok Web\", sans-serif;\n  font-weight: 700;\n}\nng-sidebar-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 2em 3em;\n  font-size: 1.2rem;\n  font-family: \"Hind Madurai\", sans-serif;\n  color: #0079D7;\n}\nng-sidebar-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\nng-sidebar-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: all 0.3s ease 0s;\n  outline: none;\n  color: #0079D7;\n  text-decoration: none;\n}\nng-sidebar-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n  .ng-sidebar {\n  background-color: #ffffff;\n  width: 300px;\n  box-shadow: 0 0 8px 0 rgba(122, 122, 122, 0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbmtldC9EZXNrdG9wL01ldGFjb2duaXRpb24vZ2l0L2ltbXV0YWJsZXMvUHJvamVjdC9pbW11dGFibGVzL3NyYy9hcHAvX2Jhc2Uuc2NzcyIsInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc2Fua2V0L0Rlc2t0b3AvTWV0YWNvZ25pdGlvbi9naXQvaW1tdXRhYmxlcy9Qcm9qZWN0L2ltbXV0YWJsZXMvc3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EsbU9BQUE7QUFhUjtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNaSjtBRGlCQTtFQUNJLG9DQWJZO0FDRGhCO0FEZ0JBO0VBQ0ksdUNBZFc7QUNDZjtBQ1hBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QURjSjtBQ2JJO0VBQ0ksY0ZOQztFRU9ELHlCRlJLO0VFU0wsZUFBQTtBRGVSO0FDWkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkZmQztFRWdCRCxjRmpCSztFRWtCTCxZQUFBO0FEY1I7QUNaSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFHQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRFlSO0FDVkk7RUFDSSx5QkZwQ0M7RUVxQ0QsY0Z0Q0s7QUNrRGI7QUNWSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRFlSO0FDVkk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRi9DSztFRWdETCxlQUFBO0VBQ0Esb0NGMUNRO0VFMkNSLGdCQUFBO0FEWVI7QUNWSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0Y5Q087RUUrQ1AsY0Z4REs7QUNvRWI7QUNYUTtFQUNJLGdCQUFBO0FEYVo7QUNaWTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGNGOURIO0VFK0RHLHFCQUFBO0FEY2hCO0FDWFk7RUFDSSxZQUFBO0FEYWhCO0FDSEE7RUFDSSx5QkY3RUs7RUU4RUwsWUFBQTtFQUNBLDhDQUFBO0FETUoiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RlZmluZSBhbGwgdGhlIHRoZSBjb2RlIGhlcmUgd2hpY2ggaXMgZ29pbmcgdG8gYmUgdXNlZCByZXBlYXRlZGx5XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IaW5kK01hZHVyYWk6d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9SXN0b2srV2ViOndnaHRANDAwOzcwMCZmYW1pbHk9TG9yYTppdGFsLHdnaHRAMCw1MDA7MCw2MDA7MSw0MDA7MSw1MDA7MSw2MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcblxuJG1haW4tY29sb3I6ICMwMDc5RDc7XG4kd2hpdGUgOiAjZmZmZmZmO1xuJGJnOiAjY2RlMGZmO1xuJGRhcmstZ3JleTogI0EzQkFDQztcbiR0ZXh0LWNvbG9yOiAjN0E3RTgxO1xuXG4kaGVhZGluZy1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4kaGVhZGluZzItZm9udDogJ0lzdG9rIFdlYicsIHNhbnMtc2VyaWY7XG4kc3ViLWhlYWRpbmctZm9udDogJ0xvcmEnLCBzZXJpZjsgXG4kY29udGVudC1mb250OiAnSGluZCBNYWR1cmFpJywgc2Fucy1zZXJpZjtcblxuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLy8gYm9keXtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4vLyB9XG5oMSxoMixoMyxoNHtcbiAgICBmb250LWZhbWlseTogJGhlYWRpbmcyLWZvbnQ7XG59XG5wLCBsYWJlbHtcbiAgICBmb250LWZhbWlseTogJGNvbnRlbnQtZm9udDtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGluZCtNYWR1cmFpOndnaHRAMzAwOzQwMDs1MDAmZmFtaWx5PUlzdG9rK1dlYjp3Z2h0QDQwMDs3MDAmZmFtaWx5PUxvcmE6aXRhbCx3Z2h0QDAsNTAwOzAsNjAwOzEsNDAwOzEsNTAwOzEsNjAwJmZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaDEsIGgyLCBoMywgaDQge1xuICBmb250LWZhbWlseTogXCJJc3RvayBXZWJcIiwgc2Fucy1zZXJpZjtcbn1cblxucCwgbGFiZWwge1xuICBmb250LWZhbWlseTogXCJIaW5kIE1hZHVyYWlcIiwgc2Fucy1zZXJpZjtcbn1cblxubmctc2lkZWJhci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzVweDtcbiAgei1pbmRleDogMDtcbn1cbm5nLXNpZGViYXItY29udGFpbmVyIGJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OUQ3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5uZy1zaWRlYmFyLWNvbnRhaW5lciAuY2xvc2Utc2lkZWJhciB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6ICMwMDc5RDc7XG4gIGZsb2F0OiByaWdodDtcbn1cbm5nLXNpZGViYXItY29udGFpbmVyIC5vcGVuLXNpZGViYXIge1xuICBtYXJnaW4tdG9wOiAzMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICBib3gtc2hhZG93OiAwIDAgNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbn1cbm5nLXNpZGViYXItY29udGFpbmVyIC5vcGVuLXNpZGViYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogIzAwNzlENztcbn1cbm5nLXNpZGViYXItY29udGFpbmVyICNhcnJvdy1PcGVuIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbm5nLXNpZGViYXItY29udGFpbmVyIHAge1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDc5RDc7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwiSXN0b2sgV2ViXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5uZy1zaWRlYmFyLWNvbnRhaW5lciB1bCB7XG4gIHBhZGRpbmc6IDJlbSAzZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LWZhbWlseTogXCJIaW5kIE1hZHVyYWlcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDc5RDc7XG59XG5uZy1zaWRlYmFyLWNvbnRhaW5lciB1bCBsaSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5uZy1zaWRlYmFyLWNvbnRhaW5lciB1bCBsaSBhIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMwMDc5RDc7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbm5nLXNpZGViYXItY29udGFpbmVyIHVsIGxpIGE6aG92ZXIge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbjo6bmctZGVlcCAubmctc2lkZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMTIyLCAxMjIsIDEyMiwgMC40KTtcbn0iLCJAaW1wb3J0ICcuLi9iYXNlJztcblxubmctc2lkZWJhci1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMzVweDtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJ1dHRvbntcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gXG4gICAgLmNsb3NlLXNpZGViYXJ7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgLm9wZW4tc2lkZWJhcntcbiAgICAgICAgbWFyZ2luLXRvcDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgIC8vIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgICAgLy8gcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IDAgcmdiYSgwLDAsMCwuNSk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLCAwLCAwLjMsIDEpO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbiAgICAub3Blbi1zaWRlYmFyOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICB9XG4gICAgI2Fycm93LU9wZW57XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTsgICAgICAgIFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBmb250LWZhbWlseTogJGhlYWRpbmcyLWZvbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICAgIHVse1xuICAgICAgICBwYWRkaW5nOiAyZW0gM2VtOyBcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkY29udGVudC1mb250O1xuICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7XG4gICAgICAgIGxpeyBcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVye1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cblxufVxuXG46Om5nLWRlZXAgLm5nLXNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMTIyLCAxMjIsIDEyMiwgMC40KTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sanket/Desktop/Metacognition/git/immutables/Project/immutables/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
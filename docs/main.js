"use strict";
(self["webpackChunkMiguel_Ib_ez_Web"] = self["webpackChunkMiguel_Ib_ez_Web"] || []).push([["main"],{

/***/ 2085:
/*!*******************************************!*\
  !*** ./src/app/Common/GlobalVariables.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frases": () => (/* binding */ frases),
/* harmony export */   "lenguajes": () => (/* binding */ lenguajes)
/* harmony export */ });
var lenguajes;
(function (lenguajes) {
  lenguajes["es"] = "es";
  lenguajes["en"] = "en";
})(lenguajes || (lenguajes = {}));
var frases;
(function (frases) {
  frases["es"] = "Cambiando al mundo una l\u00EDnea de c\u00F3digo a la vez.";
  frases["en"] = "Changing the world one line of code at a time.";
})(frases || (frases = {}));

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Common/GlobalVariables */ 2085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _social_network_social_network_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-network/social-network.component */ 6307);








class AppComponent {
  constructor(router, translate) {
    this.router = router;
    this.translate = translate;
    this.title = 'miguel-web ';
    let lenguajeNavegador = window.navigator.language;
    this.translate.addLangs([_Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__.lenguajes.es.toString(), _Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__.lenguajes.en.toString()]);
    this.translate.setDefaultLang('es');
    if (lenguajeNavegador.toString().indexOf("en") !== -1) {
      this.translate.use(_Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__.lenguajes.en.toString());
    } else {
      this.translate.use(_Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__.lenguajes.es.toString());
    }
  }
  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 6,
    vars: 0,
    consts: [["id", "v4-app-footer-container", "fxFlex", "40px", "fxFlex.lt-sm", "24px", "fxLayout", "row", "fxLayoutAlign", "center stretch"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-navbar")(2, "app-social-network")(3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _social_network_social_network_component__WEBPACK_IMPORTED_MODULE_3__.SocialNetworkComponent],
    styles: ["#v4-app-footer-container[_ngcontent-%COMP%] {\n    background-color: black;\n    padding: 0px;\n  }\n\n    footer {\n    > * {\n      width: 100%;\n    }\n  }\n\n  @media screen and (max-width: 1024px) {\n    footer[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFFQTtJQUNFO01BQ0UsV0FBVztJQUNiO0VBQ0Y7O0VBRUE7SUFDRTtRQUNJLGFBQWE7SUFDakI7O0FBRUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdjQtYXBwLWZvb3Rlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIDo6bmctZGVlcCBmb290ZXIge1xuICAgID4gKiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBmb290ZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxufVxuXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7RUFDRjs7RUFFQTtJQUNFO1FBQ0ksYUFBYTtJQUNqQjs7QUFFSjs7O0FBR0EsNHBCQUE0cEIiLCJzb3VyY2VzQ29udGVudCI6WyIjdjQtYXBwLWZvb3Rlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIDo6bmctZGVlcCBmb290ZXIge1xuICAgID4gKiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBmb290ZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ 4370);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing.module */ 3670);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7275);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _experiencie_experiencie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experiencie/experiencie.component */ 3898);
/* harmony import */ var _programming_programming_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./programming/programming.component */ 1126);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proyects/proyects.component */ 3108);
/* harmony import */ var _social_network_social_network_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./social-network/social-network.component */ 6307);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);


/*Componentes*/


















/**
 * Rutas de los archivos de los idiomas
 * @param http
 * @returns
 */
function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient]
      }
    }), _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__.ModalModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent, _experiencie_experiencie_component__WEBPACK_IMPORTED_MODULE_6__.ExperiencieComponent, _programming_programming_component__WEBPACK_IMPORTED_MODULE_7__.ProgrammingComponent, _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_8__.ProyectsComponent, _social_network_social_network_component__WEBPACK_IMPORTED_MODULE_9__.SocialNetworkComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__.ContactComponent],
    imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__.ModalModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule],
    exports: [_social_network_social_network_component__WEBPACK_IMPORTED_MODULE_9__.SocialNetworkComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__.ContactComponent]
  });
})();

/***/ }),

/***/ 3670:
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7275);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _experiencie_experiencie_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiencie/experiencie.component */ 3898);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proyects/proyects.component */ 3108);
/* harmony import */ var _programming_programming_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./programming/programming.component */ 1126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [{
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'profile',
  component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent
}, {
  path: 'experiencie',
  component: _experiencie_experiencie_component__WEBPACK_IMPORTED_MODULE_1__.ExperiencieComponent
}, {
  path: 'proyects',
  component: _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_3__.ProyectsComponent
}, {
  path: 'programming',
  component: _programming_programming_component__WEBPACK_IMPORTED_MODULE_4__.ProgrammingComponent
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
      useHash: true
    }), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 1563:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ContactComponent {
  constructor() {}
  ngOnInit() {}
  envioCorreo() {
    alert("Lo sentimos de momento no se puede enviar mensajes.");
  }
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 2,
    vars: 0,
    consts: [["href", "https://mail.google.com/mail/?view=cm&fs=1&to=miguel.ibanez.gon@gmail.com", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-envelope", "correo", "fa-2x"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["a[_ngcontent-%COMP%] {\n    display: inline-flex; \n    align-items: center;\n    justify-content: center; \n    width: 50px; \n    height: 50px; \n    border-radius: 50%; \n    background: #ffffff; \n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    text-decoration: none;\n}\n\na[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #b12525; \n    font-size: 28px; \n}\n\na[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n    background: #b12525; \n    color: #ffffff; \n    border-radius: 50%; \n    padding: 10px; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0VBQXdFO0lBQ3hFLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmEge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICB3aWR0aDogNTBweDsgXG4gICAgaGVpZ2h0OiA1MHB4OyBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7IFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEgaSB7XG4gICAgY29sb3I6ICNiMTI1MjU7IFxuICAgIGZvbnQtc2l6ZTogMjhweDsgXG59XG5cbmE6aG92ZXIgaSB7XG4gICAgYmFja2dyb3VuZDogI2IxMjUyNTsgXG4gICAgY29sb3I6ICNmZmZmZmY7IFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXG4gICAgcGFkZGluZzogMTBweDsgXG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdFQUF3RTtJQUN4RSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUEsb21DQUFvbUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmEge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICB3aWR0aDogNTBweDsgXG4gICAgaGVpZ2h0OiA1MHB4OyBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7IFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEgaSB7XG4gICAgY29sb3I6ICNiMTI1MjU7IFxuICAgIGZvbnQtc2l6ZTogMjhweDsgXG59XG5cbmE6aG92ZXIgaSB7XG4gICAgYmFja2dyb3VuZDogI2IxMjUyNTsgXG4gICAgY29sb3I6ICNmZmZmZmY7IFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXG4gICAgcGFkZGluZzogMTBweDsgXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3898:
/*!******************************************************!*\
  !*** ./src/app/experiencie/experiencie.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperiencieComponent": () => (/* binding */ ExperiencieComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1468);


class ExperiencieComponent {
  constructor(translate) {
    this.translate = translate;
    this.idiomaPagina = "es";
    this.listaTrabajos();
    this.translate.onLangChange.subscribe(event => {
      this.idiomaPagina = event.lang;
    });
  }
  ngOnInit() {
    this.idiomaPagina = this.translate.currentLang;
  }
  listaTrabajos() {}
  static #_ = this.ɵfac = function ExperiencieComponent_Factory(t) {
    return new (t || ExperiencieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExperiencieComponent,
    selectors: [["app-experiencie"]],
    decls: 0,
    vars: 0,
    template: function ExperiencieComponent_Template(rf, ctx) {},
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmllbmNpZS5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jaWUvZXhwZXJpZW5jaWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
  constructor() {
    this.date = "";
    this.getDate();
  }
  // Function to get Date
  getDate() {
    const fechaHora = new Date();
    this.date = fechaHora.toLocaleString();
    setInterval(() => {
      const fechaHora = new Date();
      this.date = fechaHora.toLocaleString();
    }, 1000);
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 7,
    vars: 0,
    consts: [[1, "footer"], [1, "left"], ["src", "assets/image/logo/logo.png", "width", "50", "height", "50", "alt", "Miguel Ib\u00E1\u00F1ez"], [1, "center"], ["href", "https://github.com/MiguelIbanezG/Portfolio", "target", "_blank", 1, "v4-footer-text-color"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A9 Miguel Ib\u00E1\u00F1ez Gonz\u00E1lez \u00A0|\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".footer[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: flex;\n  justify-content: space-between; \n  align-items: center;\n  padding: 0px;\n  background-color: black; \n}\n\n.footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  text-align: left; \n}\n\n.footer[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  margin: 0 auto; \n  text-align: center;\n}\n\n.footer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.v4-footer-text-color[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXG59XG5cbi5mb290ZXIgLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyBcbn1cblxuLmZvb3RlciAuY2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb290ZXIgLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi52NC1mb290ZXItdGV4dC1jb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLGc3QkFBZzdCIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXG59XG5cbi5mb290ZXIgLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyBcbn1cblxuLmZvb3RlciAuY2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb290ZXIgLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi52NC1mb290ZXItdGV4dC1jb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Common/GlobalVariables */ 2085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class HomeComponent {
  constructor(translate, router) {
    this.translate = translate;
    this.router = router;
    this.fraseHome = [_Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__.frases.es, _Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__.frases.en];
    this.idiomaPagina = "es";
    this.translate.onLangChange.subscribe(event => {
      this.idiomaPagina = event.lang;
    });
  }
  ngOnInit() {
    this.idiomaPagina = this.translate.currentLang;
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 40,
    vars: 18,
    consts: [[1, "section", "pt-0"], [1, "container"], [1, "cajaPadre", "has-text-centered", "is-hidden-touch"], [1, "cajaFoto"], [1, "image"], [1, "circular-border"], ["src", "assets/image/foto2.png", "alt", "Miguel Ib\u00E1\u00F1ez", 1, "is-rounded"], [1, "text-saludo"], [1, "saludo"], ["src", "assets/image/mano.png", "alt", "Icono de saludo", 1, "icono-saludo"], [1, "nombre"], [1, "puesto"], [1, "has-text-centered", "is-hidden-desktop"], [1, "columns"], [1, "column"], [1, "image", "is-3by4"], [1, "row"], [1, "has-text-centered", "is-size-4"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "figure", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 10)(14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 11)(18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "figure", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14)(27, "div", 16)(28, "h1", 17)(29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 17)(33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 17)(37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 6, "Saludo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 8, "Nombre"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 10, "Puesto"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 12, "Saludo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 14, "Nombre"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 16, "Puesto"));
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: black;\n}\n\n.cajaPadre[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.cajaFoto[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.is-rounded[_ngcontent-%COMP%] {\n    width: 150%;\n    height: 150%;\n    object-fit: cover; \n    border-radius: 50%; \n    margin-top: -50%;\n}\n\n.circular-border[_ngcontent-%COMP%] {\n    border: 3px solid black; \n    border-radius: 50%; \n    padding: 2px; \n    height: 45vh; \n    width: 45vh;\n    margin-top: 50px;\n    overflow: hidden; \n}\n\n.icono-saludo[_ngcontent-%COMP%] {\n    width: 70px; \n    height: 50px; \n    margin-right: 10px; \n    margin-bottom: -10px;\n}\n\n.text-saludo[_ngcontent-%COMP%]{\n    font-family: \"Roboto\";\n}\n\n.saludo[_ngcontent-%COMP%]{\n    font-size: 50px;\n    margin: 20px;\n}\n\n.nombre[_ngcontent-%COMP%]{\n    font-size: 30px;\n    margin: 0px;\n}\n\n.puesto[_ngcontent-%COMP%]{\n    font-size: 30px;\n    margin: 0px;\n} \n\nstrong[_ngcontent-%COMP%]{\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FqYVBhZHJlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYWphRm90byB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaXMtcm91bmRlZCB7XG4gICAgd2lkdGg6IDE1MCU7XG4gICAgaGVpZ2h0OiAxNTAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyOyBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxuICAgIG1hcmdpbi10b3A6IC01MCU7XG59XG5cbi5jaXJjdWxhci1ib3JkZXIge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrOyBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxuICAgIHBhZGRpbmc6IDJweDsgXG4gICAgaGVpZ2h0OiA0NXZoOyBcbiAgICB3aWR0aDogNDV2aDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47IFxufVxuXG4uaWNvbm8tc2FsdWRvIHtcbiAgICB3aWR0aDogNzBweDsgXG4gICAgaGVpZ2h0OiA1MHB4OyBcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IFxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuXG4udGV4dC1zYWx1ZG97XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG59XG5cbi5zYWx1ZG97XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLm5vbWJyZXtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5wdWVzdG97XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufSBcblxuc3Ryb25ne1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuXG5cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7Ozs7O0FBS0Esb2tFQUFva0UiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FqYVBhZHJlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYWphRm90byB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaXMtcm91bmRlZCB7XG4gICAgd2lkdGg6IDE1MCU7XG4gICAgaGVpZ2h0OiAxNTAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyOyBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxuICAgIG1hcmdpbi10b3A6IC01MCU7XG59XG5cbi5jaXJjdWxhci1ib3JkZXIge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrOyBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxuICAgIHBhZGRpbmc6IDJweDsgXG4gICAgaGVpZ2h0OiA0NXZoOyBcbiAgICB3aWR0aDogNDV2aDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47IFxufVxuXG4uaWNvbm8tc2FsdWRvIHtcbiAgICB3aWR0aDogNzBweDsgXG4gICAgaGVpZ2h0OiA1MHB4OyBcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IFxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuXG4udGV4dC1zYWx1ZG97XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG59XG5cbi5zYWx1ZG97XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLm5vbWJyZXtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5wdWVzdG97XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufSBcblxuc3Ryb25ne1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class NavbarComponent {
  constructor(translate) {
    this.translate = translate;
  }
  ngOnInit() {}
  deploy() {
    var iconMenu = document.querySelector(".burger");
    var menu = document.querySelector("#navBarMenu");
    iconMenu.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    if (document.getElementById("overlay").classList.contains("overlay")) {
      document.getElementById("overlay").classList.remove("overlay");
      document.getElementById("menuMovil").classList.remove("is-fixed-top");
    } else {
      document.getElementById("overlay").classList.add("overlay");
      document.getElementById("menuMovil").classList.add("is-fixed-top");
    }
    window.scrollTo(0, 0);
  }
  get() {
    var iconMenu = document.querySelector(".burger");
    var menu = document.querySelector("#navBarMenu");
    iconMenu.classList.remove("is-active");
    menu.classList.remove("is-active");
    document.getElementById("overlay").classList.remove("overlay");
    document.getElementById("menuMovil").classList.remove("is-fixed-top");
    window.scrollTo(0, 0);
  }
  selectLanguage(selectLenguage) {
    this.translate.use(selectLenguage.valueOf());
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    decls: 103,
    vars: 30,
    consts: [["role", "navigation", "aria-label", "main navigation", 1, "nose", "is-hidden-touch"], [1, "navbar-brand"], ["id", "logo", 1, "navbar-item", "has-text-white"], ["src", "assets/image/logo/logo.png", "width", "30", "height", "100%", "alt", "Miguel Ib\u00E1\u00F1ez"], [1, "has-text-white", "no-seleccion-texto"], [1, "navbar-menu"], [1, "navbar-start"], ["routerLink", "home", "routerLinkActive", "active", 1, "navbar-item", "has-text-white"], [1, "icon"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["routerLink", "profile", 1, "navbar-item", "has-text-white", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["routerLink", "experiencie", "routerLinkActive", "active", 1, "navbar-item", "has-text-white", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-briefcase"], ["routerLink", "proyects", "routerLinkActive", "activo", 1, "navbar-item", "has-text-white", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-code-fork"], ["routerLink", "programming", "routerLinkActive", "activo", 1, "navbar-item", "has-text-white", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-graduation-cap"], [1, "navbar-end"], [1, "logo-item", 3, "click"], ["src", "assets/image/logo/logo2.png", "alt", "Miguel Ib\u00E1\u00F1ez", 1, "logo"], [1, "vertical-bar"], ["data-tooltip", "Espa\u00F1ol / Spanish", 1, "button", "is-ghost", "is-inverted", "is-medium", "has-tooltip-bottom", "has-tooltip-white", 3, "click"], [1, "icon", "is-large", "idiomas"], ["src", "assets/image/languages/es.svg", "alt", "Idioma Espa\u00F1ol - Spanish language", 1, "language"], ["data-tooltip", "Ingl\u00E9s / English", 1, "button", "is-ghost", "is-inverted", "is-medium", "has-tooltip-bottom", "has-tooltip-white", 3, "click"], ["src", "assets/image/languages/en.svg", "alt", "Idioma Ingl\u00E9s - English language", 1, "language"], ["id", "menuMovil", "role", "navigation", "aria-label", "main navigation", 1, "navbar", "is-hidden-desktop"], ["src", "assets/image/logo/logo2.png", "width", "30", "height", "30", "alt", "Miguel Ib\u00E1\u00F1ez"], [1, "has-text-white", "no-seleccion-texto", "Nombremov"], ["role", "button", "aria-label", "menu", "aria-expanded", "false", "data-target", "navBarMenu", "id", "burger", 1, "navbar-burger", "burger", "menu-icon", 3, "click"], [1, "has-text-white"], ["id", "overlay", 1, ""], ["id", "navBarMenu", 1, "navbar-menu"], ["routerLink", "home", 1, "navbar-item", "has-text-white", 3, "click"], ["routerLink", "experiencie", "routerLinkActive", "activo", 1, "navbar-item", "has-text-white", 3, "click"], ["routerLink", "home", 1, "navbar-item", "force-center", "is-hidden-touch", 3, "click"], ["src", "assets/image/logo/7SIm.gif", "width", "30", "height", "100%", "alt", "Miguel Ib\u00E1\u00F1ez"], [1, "button", "is-ghost", "is-inverted", "is-medium", 3, "click"], ["src", "assets/image/languages/es.svg ", "alt", "Idioma Espa\u00F1ol - Spanish language "], ["src", "assets/image/languages/en.svg ", "alt", "Idioma Ingles - English language "]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Miguel Ib\u00E1\u00F1ez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "a", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_14_listener() {
          return ctx.get();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_20_listener() {
          return ctx.get();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_26_listener() {
          return ctx.get();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_32_listener() {
          return ctx.get();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18)(39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_39_listener() {
          return ctx.get();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Miguel Ib\u00E1\u00F1ez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_44_listener() {
          return ctx.selectLanguage("es");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "figure", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_47_listener() {
          return ctx.selectLanguage("en");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "figure", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nav", 27)(51, "div", 1)(52, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Miguel Ib\u00E1\u00F1ez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_56_listener() {
          return ctx.deploy();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 31)(58, "span", 31)(59, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 33)(62, "div", 18)(63, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_63_listener() {
          return ctx.get();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_69_listener() {
          return ctx.get();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_75_listener() {
          return ctx.get();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_81_listener() {
          return ctx.get();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Miguel Ib\u00E1\u00F1ez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_85_listener() {
          return ctx.get();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_91_listener() {
          return ctx.get();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_97_listener() {
          ctx.selectLanguage("es");
          return ctx.get();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "figure", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_100_listener() {
          ctx.selectLanguage("en");
          return ctx.get();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "figure", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, "Home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 12, "Profile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 14, "Experiencie"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 16, "Proyects"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 18, "Learn"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 20, "Home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 22, "Profile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 24, "Experiencie"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 26, "Proyects"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 28, "Learn"));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: [".navbar[_ngcontent-%COMP%] {\n    background-color: black;\n}\n\n.navbar-menu[_ngcontent-%COMP%] {\n    background-color: black;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n    transition: all .5s;\n}\n\n#logo[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    justify-content: center;\n    text-align: center;\n}\n\n.navbar-end[_ngcontent-%COMP%] {\n    justify-content: center;\n    text-align: center;\n    padding: 0;\n    margin-right: 18px;\n}\n\n.navbar-start[_ngcontent-%COMP%] {\n    padding: 0;\n}\n\n.no-seleccion-texto[_ngcontent-%COMP%] {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    user-select: none;\n}\n\nspan[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n    margin: 4px;\n    padding: 0;\n}\n\n.navbar-item[_ngcontent-%COMP%]:hover, .navbar-item[_ngcontent-%COMP%]:focus {\n    background-color: transparent;\n    border-radius: 50px;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    background-image: linear-gradient(currentColor, currentColor);\n    background-position: 10% 90%;\n    background-repeat: no-repeat;\n    background-size: 0% 0.2rem;\n    transition: background-size .3s;\n    border-bottom: 4px solid transparent;\n}\n\n.idiomas[_ngcontent-%COMP%] {\n    border-radius: 50px;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\na[_ngcontent-%COMP%]:hover {\n    background-size: 100% 0.2rem;\n}\n\n.logo[_ngcontent-%COMP%]{\n    margin-right: 5px;\n    width: 40px;\n    height: 40px;\n}\n\n.language[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    width: 30px;   \n    height: auto; \n} \n\n.Nombremov[_ngcontent-%COMP%]{\n    margin-right: -45px;\n}\n\n.navbar-brand[_ngcontent-%COMP%]{\n    background-color: black;\n}\n\n.logo-item[_ngcontent-%COMP%] {\n    display: flex;              \n    align-items: center;        \n}\n\n.vertical-bar[_ngcontent-%COMP%] {\n    width: 2px; \n    height: 30px; \n    background-color: white; \n    margin-top: 10px;\n    margin-right: 10px;\n    margin-left: 10px;\n    display: inline-block; \n    vertical-align: middle; \n}\n\n@media screen and (max-width: 1024px-1px) {\n    #logo[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .force-center[_ngcontent-%COMP%] {\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n    .navbar-end[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n    }\n\n}\n\n@media screen and (min-width: 1024px) {\n    .navbar-brand[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .navbar-end[_ngcontent-%COMP%]   .navbar-item[_ngcontent-%COMP%], .navbar-end[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n        margin: 10px;                 \n        padding: 5px;                 \n    }\n\n    .navbar-end[_ngcontent-%COMP%] {\n        max-height: 50px;\n    }\n\n    .navbar-start[_ngcontent-%COMP%] {\n        max-height: 50px;\n    }\n\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1299px) {\n    .logo-item[_ngcontent-%COMP%] {\n        display: none;          \n    }\n\n    .vertical-bar[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    span[_ngcontent-%COMP%] {\n        font-size: 20px;\n        font-weight: bold;\n        margin: 4px;\n        padding: 8px;\n    }\n\n    .language[_ngcontent-%COMP%] {\n        width: 30px;   \n    } \n}\n\n#menu-icon[_ngcontent-%COMP%], #menu-icon[_ngcontent-%COMP%]:before, #menu-icon[_ngcontent-%COMP%]:after {\n    background: #1d1f20;\n    border-radius: 0.05em;\n    height: 0.2em;\n    transition: all 0.2s ease-in-out;\n    width: 100%;\n}\n\n#menu-icon[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 0.4em 0;\n    max-width: 1em;\n    position: relative;\n}\n\nnav[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   #menu-icon[_ngcontent-%COMP%] {\n    float: right;\n}\n\n#menu-icon[_ngcontent-%COMP%]:before, #menu-icon[_ngcontent-%COMP%]:after {\n    content: '';\n    left: 0;\n    position: absolute;\n}\n\n.overlay[_ngcontent-%COMP%] {\n    background: #000000;\n    background: linear-gradient(to right, #ffffff, #424040);\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: -1;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%] {\n    box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBSXpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBRXJCLDZEQUE2RDtJQUM3RCw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdFQUF3RTtBQUM1RTs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWEsZUFBZSxnQkFBZ0I7SUFDNUMsbUJBQW1CLFNBQVMsc0NBQXNDO0FBQ3RFOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7SUFDM0I7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7O1FBRUksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBOzs7SUFHSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUVuQix1REFBdUQ7SUFDdkQsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ubmF2YmFyLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5uYXYgYSxcbm5hdiBhOmFmdGVyLFxubmF2IGE6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4jbG9nbyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5hdmJhci1lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMThweDtcbn1cblxuLm5hdmJhci1zdGFydCB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm5vLXNlbGVjY2lvbi10ZXh0byB7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5zcGFuIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm5hdmJhci1pdGVtOmhvdmVyLFxuLm5hdmJhci1pdGVtOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoY3VycmVudENvbG9yLCBjdXJyZW50Q29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChjdXJyZW50Q29sb3IsIGN1cnJlbnRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAlIDkwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMCUgMC4ycmVtO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAuM3M7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uaWRpb21hcyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbmE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAwLjJyZW07XG59XG5cbi5sb2dve1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmxhbmd1YWdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAzMHB4OyAgIFxuICAgIGhlaWdodDogYXV0bzsgXG59IFxuXG4uTm9tYnJlbW92e1xuICAgIG1hcmdpbi1yaWdodDogLTQ1cHg7XG59XG5cbi5uYXZiYXItYnJhbmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5sb2dvLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7ICAgICAgICAgICAgICAvKiBVc2EgRmxleGJveCAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgICAvKiBBbGluZWEgdmVydGljYWxtZW50ZSBlbiBlbCBjZW50cm8gKi9cbn1cblxuLnZlcnRpY2FsLWJhciB7XG4gICAgd2lkdGg6IDJweDsgXG4gICAgaGVpZ2h0OiAzMHB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4LTFweCkge1xuICAgICNsb2dvIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmZvcmNlLWNlbnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxuICAgIC5uYXZiYXItZW5kIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5uYXZiYXItZW5kIC5uYXZiYXItaXRlbSxcbiAgICAubmF2YmFyLWVuZCAuYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4OyAgICAgICAgICAgICAgICAgXG4gICAgICAgIHBhZGRpbmc6IDVweDsgICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIC5uYXZiYXItZW5kIHtcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcbiAgICB9XG5cbiAgICAubmF2YmFyLXN0YXJ0IHtcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTI5OXB4KSB7XG4gICAgLmxvZ28taXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7ICAgICAgICAgIFxuICAgIH1cblxuICAgIC52ZXJ0aWNhbC1iYXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgfVxuXG4gICAgLmxhbmd1YWdlIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7ICAgXG4gICAgfSBcbn1cblxuI21lbnUtaWNvbixcbiNtZW51LWljb246YmVmb3JlLFxuI21lbnUtaWNvbjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogIzFkMWYyMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjA1ZW07XG4gICAgaGVpZ2h0OiAwLjJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI21lbnUtaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMC40ZW0gMDtcbiAgICBtYXgtd2lkdGg6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbm5hdiBsYWJlbCAjbWVudS1pY29uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbiNtZW51LWljb246YmVmb3JlLFxuI21lbnUtaWNvbjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmLCAjNDI0MDQwKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYsICM0MjQwNDApO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4ubmF2YmFyIC5uYXZiYXItbWVudSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBSXpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBRXJCLDZEQUE2RDtJQUM3RCw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdFQUF3RTtBQUM1RTs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWEsZUFBZSxnQkFBZ0I7SUFDNUMsbUJBQW1CLFNBQVMsc0NBQXNDO0FBQ3RFOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7SUFDM0I7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7O1FBRUksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBOzs7SUFHSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUVuQix1REFBdUQ7SUFDdkQsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUZBLGdrT0FBZ2tPIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm5hdmJhci1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxubmF2IGEsXG5uYXYgYTphZnRlcixcbm5hdiBhOmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuI2xvZ28ge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXZiYXItZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG5cbi5uYXZiYXItc3RhcnQge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5uby1zZWxlY2Npb24tdGV4dG8ge1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5uYXZiYXItaXRlbTpob3Zlcixcbi5uYXZiYXItaXRlbTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGN1cnJlbnRDb2xvciwgY3VycmVudENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoY3VycmVudENvbG9yLCBjdXJyZW50Q29sb3IpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwJSA5MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAlIDAuMnJlbTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgLjNzO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmlkaW9tYXMge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG5hOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMC4ycmVtO1xufVxuXG4ubG9nb3tcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5sYW5ndWFnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMzBweDsgICBcbiAgICBoZWlnaHQ6IGF1dG87IFxufSBcblxuLk5vbWJyZW1vdntcbiAgICBtYXJnaW4tcmlnaHQ6IC00NXB4O1xufVxuXG4ubmF2YmFyLWJyYW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ubG9nby1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAgICAgICAgLyogVXNhIEZsZXhib3ggKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgLyogQWxpbmVhIHZlcnRpY2FsbWVudGUgZW4gZWwgY2VudHJvICovXG59XG5cbi52ZXJ0aWNhbC1iYXIge1xuICAgIHdpZHRoOiAycHg7IFxuICAgIGhlaWdodDogMzBweDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweC0xcHgpIHtcbiAgICAjbG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5mb3JjZS1jZW50ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cbiAgICAubmF2YmFyLWVuZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubmF2YmFyLWVuZCAubmF2YmFyLWl0ZW0sXG4gICAgLm5hdmJhci1lbmQgLmJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMTBweDsgICAgICAgICAgICAgICAgIFxuICAgICAgICBwYWRkaW5nOiA1cHg7ICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICAubmF2YmFyLWVuZCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgfVxuXG4gICAgLm5hdmJhci1zdGFydCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEyOTlweCkge1xuICAgIC5sb2dvLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBub25lOyAgICAgICAgICBcbiAgICB9XG5cbiAgICAudmVydGljYWwtYmFye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgIH1cblxuICAgIC5sYW5ndWFnZSB7XG4gICAgICAgIHdpZHRoOiAzMHB4OyAgIFxuICAgIH0gXG59XG5cbiNtZW51LWljb24sXG4jbWVudS1pY29uOmJlZm9yZSxcbiNtZW51LWljb246YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxZDFmMjA7XG4gICAgYm9yZGVyLXJhZGl1czogMC4wNWVtO1xuICAgIGhlaWdodDogMC4yZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNtZW51LWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAuNGVtIDA7XG4gICAgbWF4LXdpZHRoOiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5uYXYgbGFiZWwgI21lbnUtaWNvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jbWVudS1pY29uOmJlZm9yZSxcbiNtZW51LWljb246YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmZmZiwgIzQyNDA0MCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmLCAjNDI0MDQwKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLm5hdmJhciAubmF2YmFyLW1lbnUge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1468);


class ProfileComponent {
  static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
    return new (t || ProfileComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    decls: 302,
    vars: 87,
    consts: [[1, "section"], [1, "container"], [1, "title", "has-text-centered", "section-heading"], [1, "textoEncima", "title", "is-2", "is-uppercase"], [1, "line-title"], [1, "subtitle", "is-uppercase"], [1, "perfil", "box", "mt-6", "transparente"], [1, "content"], [1, "table", "has-text-centered"], [1, "box2"], ["href", "https://www.linkedin.com/in/miguel-ib%C3%A1%C3%B1ez/"], ["href", "https://github.com/MiguelIbanezG"], [1, "custom-hr"], [1, "container2"], [1, "line-title3"], [1, "sobre", "columns", "is-vcentered", "is-centered", "is-gapless"], [1, "column", "is-offset-2", "is-3"], [1, "image"], ["src", "https://i.postimg.cc/vmsHMDbB/FrontEnd.webp", "alt", "dev Castellanos Front End"], [1, "column", "transparente", "is-vcentered", "is-centered", "is-offset-2", "is-5"], [1, "box"], [1, "info"], [1, "skills"], [1, "trab", "textoEncima", "title", "is-2", "is-uppercase"], [1, "line-title2"], [1, "first", "textoEncima", "subtitle", "is-2", "is-uppercase"], [1, "lenguajes"], [1, "columns", "is-vcentered", "is-centered", "is-mobile"], [1, "column", "is-narrow", "has-text-centered"], ["src", "assets/image/php.png", "alt", "PHP", 1, "skill-image"], ["src", "assets/image/c.png", "alt", "C", 1, "skill-image"], ["src", "assets/image/java.png", "alt", "Java", 1, "skill-image"], ["src", "assets/image/python.png", "alt", "Python", 1, "skill-image"], ["src", "assets/image/kotlin.png", "alt", "Kotlin", 1, "skill-image"], ["src", "assets/image/javascript.png", "alt", "JavaScript", 1, "skill-image"], ["src", "assets/image/typescript.png", "alt", "Python", 1, "skill-image"], [1, "textoEncima", "subtitle", "is-2", "is-uppercase"], ["src", "assets/image/html.png", "alt", "HTML", 1, "skill-image2"], ["src", "assets/image/css.png", "alt", "CSS", 1, "skill-image"], ["src", "assets/image/android_studio.png", "alt", "Android Studio", 1, "skill-image2"], ["src", "assets/image/apache.png", "alt", "Apache", 1, "skill-image"], ["src", "assets/image/docker.png", "alt", "Docker", 1, "skill-image"], ["src", "assets/image/filezilla.png", "alt", "Filezilla", 1, "skill-image"], ["src", "assets/image/jquery.png", "alt", "jQuery", 1, "skill-image"], ["src", "assets/image/github.png", "alt", "GitHub", 1, "skill-image"], ["src", "assets/image/gitlab.png", "alt", "GitLab", 1, "skill-image"], ["src", "assets/image/nginx.png", "alt", "Nginx", 1, "skill-image"], ["src", "assets/image/postman.png", "alt", "Postman", 1, "skill-image"], ["src", "assets/image/eclipse.png", "alt", "Eclipse", 1, "skill-image"], ["src", "assets/image/visual_studio_code.png", "alt", " Visual Studio Code", 1, "skill-image"], ["src", "assets/image/angular.png", "alt", "Angular", 1, "skill-image2"], ["src", "assets/image/vue.png", "alt", "Vue", 1, "skill-image"], ["src", "assets/image/django.png", "alt", "Django", 1, "skill-image"], ["src", "assets/image/express.png", "alt", "Express", 1, "skill-image"], ["src", "assets/image/node.png", "alt", "Node", 1, "skill-image"], ["src", "assets/image/react.png", "alt", "React", 1, "skill-image"], ["src", "assets/image/mysql.png", "alt", "Mysql", 1, "skill-image2"], ["src", "assets/image/postgress.png", "alt", "PostgreSQL", 1, "skill-image"], ["src", "assets/image/mongoDB.png", "alt", "mongoDB", 1, "skill-image2"], ["src", "assets/image/neo4j.png", "alt", "Neo4j", 1, "skill-image"], ["id", "resume", 1, "section"], [1, "curriculumsec", "has-text-centered", "section-heading"], [1, "link"], ["href", "https://drive.google.com/file/d/1M5zK9awfH7FBhVXgdLJxfMsfgVUNUAHa/view?usp=drive_link", "target", "_blank", 1, "is-hidden-touch", "button", "is-outlined", "custom-button-black", "is-large", "mt-6"], [1, "icon"], [1, "fa", "fa-download"], [1, "is-uppercase", "has-text-centered"], ["href", "https://drive.google.com/file/d/1M5zK9awfH7FBhVXgdLJxfMsfgVUNUAHa/view?usp=drive_link", "target", "_blank", 1, "is-hidden-desktop", "button", "is-outlined", "custom-button-black", "is-normal", "mt-4", "mb-6"]],
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "table", 8)(13, "tbody", 9)(14, "tr")(15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr")(22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr")(29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr")(36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr")(43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr")(50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr")(57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td")(61, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "in/miguel-iba\u00F1ez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr")(64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td")(68, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "MiguelIbanezG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr")(71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "section", 0)(79, "div", 13)(80, "div", 2)(81, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 15)(86, "div", 16)(87, "figure", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 19)(90, "div", 20)(91, "div", 7)(92, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 22)(97, "div", 2)(98, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "hr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 26)(106, "div", 27)(107, "div", 28)(108, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 28)(113, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 28)(118, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 28)(123, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 28)(128, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Kotlin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 28)(133, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 28)(138, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 2)(143, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](145, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 26)(147, "div", 27)(148, "div", 28)(149, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 28)(154, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 2)(159, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](161, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 26)(163, "div", 27)(164, "div", 28)(165, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Android Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 28)(170, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Apache");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 28)(175, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 28)(180, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Filezilla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 28)(185, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "jQuery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 28)(190, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 28)(195, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "GitLab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 28)(200, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Nginx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 28)(205, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Postman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 28)(210, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Eclipse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 28)(215, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Visual Studio Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 2)(220, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](222, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 26)(224, "div", 27)(225, "div", 28)(226, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 28)(231, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Vue.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 28)(236, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Django");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 28)(241, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Express.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 28)(246, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 28)(251, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "React.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 2)(256, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](258, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 26)(260, "div", 27)(261, "div", 28)(262, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Mysql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 28)(267, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "PostgreSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 28)(272, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "mongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 28)(277, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Neo4j");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "section", 60)(283, "div", 1)(284, "div", 61)(285, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](287, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 62)(290, "a", 63)(291, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](295, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 67)(297, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](301, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 29, "Info"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 31, "Perfil"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 33, "Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 35, "Nombre2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 37, "Residencia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 39, "Residencia2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 41, "Universidad"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 43, "Universidad2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 45, "Carrera"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 47, "Carrera2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 49, "Master"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 51, "Master2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 53, "Gmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 55, "Gmail2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 57, "Linkedin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 59, "GitHub"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 61, "Tel\u00E9fono"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 63, "Tel\u00E9fono2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 65, "Sobre_mi"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](94, 67, "Info_sobre_mi"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](100, 69, "Trabajado"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](104, 71, "Lenguajes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](145, 73, "Marcado"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](161, 75, "Herramientas"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](222, 77, "Frameworks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](258, 79, "Bases_datos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](287, 81, "Curriculum2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](295, 83, "Curriculum"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](301, 85, "Curriculum"));
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: [".container[_ngcontent-%COMP%]{\n    margin-top: -5%;\n}\n\n.container2[_ngcontent-%COMP%]{\n    margin-top: -8%;\n}\n.box[_ngcontent-%COMP%]{\n    background-color: black;\n}\n.perfil[_ngcontent-%COMP%]{\n    margin-top: 70px !important;\n}\n\ntd[_ngcontent-%COMP%] {\n    word-wrap: break-word; \n    white-space: normal;  \n}\n\ntable[_ngcontent-%COMP%] {\n    table-layout: fixed; \n    width: 100%; \n    color: white;\n}\n\n.box2[_ngcontent-%COMP%]{\n    background-color: black;\n}\n\na[_ngcontent-%COMP%]{\n    color: white;\n}\n\np[_ngcontent-%COMP%]{\n    color: white;\n    font-size: 19px;\n}\n\n.lenguajes[_ngcontent-%COMP%]{\n    margin-top: 5%;\n}\n\n.skill-image[_ngcontent-%COMP%] {\n    width: 130px;\n    height: 130px; \n    object-fit: contain; \n}\n\n.skill-image2[_ngcontent-%COMP%] {\n    width: 120px; \n    height: 120px; \n    object-fit: contain;\n}\n\n.skill-image[_ngcontent-%COMP%], .skill-image2[_ngcontent-%COMP%] {\n    transition: transform 0.3s ease; \n}\n\n.skill-image[_ngcontent-%COMP%]:hover, .skill-image2[_ngcontent-%COMP%]:hover {\n    transform: scale(1.2); \n}\n.image[_ngcontent-%COMP%]{\n    width: 100%;\n}\nfigcaption[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 20px;\n    color: black;\n}\n.columns[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 20px; \n}\n\n.title[_ngcontent-%COMP%]{\n    margin-top: 100px;\n    font-size: 35px !important;\n    text-align: center; \n}\n\n.subtitle[_ngcontent-%COMP%]{\n    font-size: 25px !important;\n    margin-bottom: -50px;\n}\n\n.custom-button-black[_ngcontent-%COMP%] {\n    background-color: transparent;\n    color: #000; \n    border: 3px solid #000; \n    font-weight: bold;\n}\n\n\n.custom-button-black[_ngcontent-%COMP%]:hover {\n    background-color: #000000; \n    color: #ffffff; \n}\n\n.custom-button-black[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #ffffff; \n}\n\n.custom-button-black[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #000000; \n}\n\nh1[_ngcontent-%COMP%]{\n    color: #000;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.textoEncima[_ngcontent-%COMP%]{\n    font-size: 38px;\n}\n\n.curriculumsec[_ngcontent-%COMP%]{\n    margin-top: -180px !important;\n    margin-bottom: 30px;\n}\n\n.link[_ngcontent-%COMP%]{\n    margin-top: -3%;\n}\n\n.custom-hr[_ngcontent-%COMP%] {\n    border: none;   \n    height: 0.1px;       \n    background-color: black;      \n    border-top: 0px solid #000 !important;  \n    margin-left: 100px;   \n    margin-right: 100px; \n    margin-top: 50px;          \n  }\n\n.skills[_ngcontent-%COMP%]{\n    margin-top: -2%;\n}\n\n.trab[_ngcontent-%COMP%]{\n    margin-bottom: 80px;\n}\n\n.line-title[_ngcontent-%COMP%] {\n    border: none;\n    border-top: 3px solid #000; \n    width: 22%;                  \n    margin: 0 auto; \n    margin-top: -20px;  \n    margin-bottom: 20px;      \n}\n\n.line-title3[_ngcontent-%COMP%] {\n    border: none;\n    border-top: 3px solid #000; \n    width: 9%;                  \n    margin: 0 auto; \n    margin-top: -20px;  \n    margin-bottom: 20px;      \n}\n\n.line-title2[_ngcontent-%COMP%] {\n    border: none;\n    border-top: 3px solid #000; \n    width: 17%;                  \n    margin: 0 auto; \n    margin-top: -80px;  \n    margin-bottom: 70px;      \n}\n\n@media screen and (max-width: 1024px) {\n\n    .container[_ngcontent-%COMP%]{\n        margin-top: -110px;\n        font-family: 'Times New Roman', Times, serif;\n    }\n    .title[_ngcontent-%COMP%]{\n        font-size: 130% !important;\n        margin-bottom: 10%;\n    }\n    .subtitle[_ngcontent-%COMP%]{\n        font-size: 90% !important;\n        margin-top: 0px !important;\n        margin-bottom: 20px;\n    }\n    .perfil[_ngcontent-%COMP%]{\n        font-size: 70%;\n        margin-top: -2% !important;\n        margin-bottom: 50px;\n    }\n    .container2[_ngcontent-%COMP%]{\n        margin-top: -200px;\n    }\n    .info[_ngcontent-%COMP%]{\n        font-size: 70%;\n    }\n    .lenguajes[_ngcontent-%COMP%]{\n        margin-top: -2%;\n    }\n    .image[_ngcontent-%COMP%]{\n        width: 100%;\n    }\n    .link[_ngcontent-%COMP%]{\n        margin-top: -40px;\n    }\n    .curriculumsec[_ngcontent-%COMP%]{\n        margin-top: -20px;\n    }\n    .skill-image[_ngcontent-%COMP%] {\n        width: 80px;\n        height: 80px; \n        object-fit: contain; \n    }\n    \n    .skill-image2[_ngcontent-%COMP%] {\n        width: 75px; \n        height: 75px; \n        object-fit: contain;\n    }\n    h1[_ngcontent-%COMP%]{\n        font-size: 100% !important;\n    }\n    figcaption[_ngcontent-%COMP%]{\n        font-size: 16px;\n    }\n\n    .custom-hr[_ngcontent-%COMP%] {\n        border: none;   \n        height: 0.1px;       \n        background-color: black;      \n        border-top: 0px solid #000 !important;  \n        margin-left: 10px;   \n        margin-right: 10px; \n        margin-top: 30px;          \n    }\n\n    .sobre[_ngcontent-%COMP%]{\n        margin-top: -100px;\n    }\n    .skills[_ngcontent-%COMP%]{\n        margin-top: -50px;\n    }\n\n    .line-title[_ngcontent-%COMP%] {\n        border: none;\n        border-top: 3px solid #000; \n        width: 45%;                  \n        margin: 0 auto; \n        margin-top: -10%;  \n        margin-bottom: 50px;      \n    }\n    \n    .line-title3[_ngcontent-%COMP%] {\n        border: none;\n        border-top: 3px solid #000; \n        width: 30%;                  \n        margin: 0 auto; \n        margin-top: -10%;  \n        margin-bottom: 30px !important;      \n    }\n    \n    .line-title2[_ngcontent-%COMP%] {\n        border: none;\n        border-top: 3px solid #000; \n        width: 55%;                  \n        margin: 0 auto; \n        margin-top: -10%;  \n        margin-bottom: 70px;      \n    }\n      \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztBQUVGO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQiw0Q0FBNEM7SUFDaEQ7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QiwwQkFBMEI7UUFDMUIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsMEJBQTBCO1FBQzFCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixxQ0FBcUM7UUFDckMsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFlBQVk7UUFDWiwwQkFBMEI7UUFDMUIsVUFBVTtRQUNWLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLDBCQUEwQjtRQUMxQixVQUFVO1FBQ1YsY0FBYztRQUNkLGdCQUFnQjtRQUNoQiw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxZQUFZO1FBQ1osMEJBQTBCO1FBQzFCLFVBQVU7UUFDVixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2Qjs7O0FBR0oiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAtNSU7XG59XG5cbi5jb250YWluZXIye1xuICAgIG1hcmdpbi10b3A6IC04JTtcbn1cbi5ib3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4ucGVyZmlse1xuICAgIG1hcmdpbi10b3A6IDcwcHggIWltcG9ydGFudDtcbn1cblxudGQge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgIFxufVxuXG50YWJsZSB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDsgXG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJveDJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmF7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5we1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5sZW5ndWFqZXN7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5za2lsbC1pbWFnZSB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7IFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47IFxufVxuXG4uc2tpbGwtaW1hZ2UyIHtcbiAgICB3aWR0aDogMTIwcHg7IFxuICAgIGhlaWdodDogMTIwcHg7IFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5za2lsbC1pbWFnZSwgLnNraWxsLWltYWdlMiB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTsgXG59XG5cbi5za2lsbC1pbWFnZTpob3ZlciwgLnNraWxsLWltYWdlMjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyBcbn1cbi5pbWFnZXtcbiAgICB3aWR0aDogMTAwJTtcbn1cbmZpZ2NhcHRpb257XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5jb2x1bW5zIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAyMHB4OyBcbn1cblxuLnRpdGxle1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNTBweDtcbn1cblxuLmN1c3RvbS1idXR0b24tYmxhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjMDAwOyBcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwOyBcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG4uY3VzdG9tLWJ1dHRvbi1ibGFjazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgXG4gICAgY29sb3I6ICNmZmZmZmY7IFxufVxuXG4uY3VzdG9tLWJ1dHRvbi1ibGFjazpob3ZlciAuaWNvbiBpIHtcbiAgICBjb2xvcjogI2ZmZmZmZjsgXG59XG5cbi5jdXN0b20tYnV0dG9uLWJsYWNrIC5pY29uIGkge1xuICAgIGNvbG9yOiAjMDAwMDAwOyBcbn1cblxuaDF7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dG9FbmNpbWF7XG4gICAgZm9udC1zaXplOiAzOHB4O1xufVxuXG4uY3VycmljdWx1bXNlY3tcbiAgICBtYXJnaW4tdG9wOiAtMTgwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubGlua3tcbiAgICBtYXJnaW4tdG9wOiAtMyU7XG59XG5cbi5jdXN0b20taHIge1xuICAgIGJvcmRlcjogbm9uZTsgICBcbiAgICBoZWlnaHQ6IDAuMXB4OyAgICAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgICAgICBcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgIzAwMCAhaW1wb3J0YW50OyAgXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4OyAgIFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7IFxuICAgIG1hcmdpbi10b3A6IDUwcHg7ICAgICAgICAgIFxuICB9XG5cbi5za2lsbHN7XG4gICAgbWFyZ2luLXRvcDogLTIlO1xufVxuXG4udHJhYntcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4ubGluZS10aXRsZSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMDAwOyBcbiAgICB3aWR0aDogMjIlOyAgICAgICAgICAgICAgICAgIFxuICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICBtYXJnaW4tdG9wOiAtMjBweDsgIFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7ICAgICAgXG59XG5cbi5saW5lLXRpdGxlMyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMDAwOyBcbiAgICB3aWR0aDogOSU7ICAgICAgICAgICAgICAgICAgXG4gICAgbWFyZ2luOiAwIGF1dG87IFxuICAgIG1hcmdpbi10b3A6IC0yMHB4OyAgXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgICAgICBcbn1cblxuLmxpbmUtdGl0bGUyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMwMDA7IFxuICAgIHdpZHRoOiAxNyU7ICAgICAgICAgICAgICAgICAgXG4gICAgbWFyZ2luOiAwIGF1dG87IFxuICAgIG1hcmdpbi10b3A6IC04MHB4OyAgXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDsgICAgICBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTEwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTMwJSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgfVxuICAgIC5zdWJ0aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiA5MCUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5wZXJmaWx7XG4gICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMiUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgLmNvbnRhaW5lcjJ7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMDBweDtcbiAgICB9XG4gICAgLmluZm97XG4gICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgIH1cbiAgICAubGVuZ3VhamVze1xuICAgICAgICBtYXJnaW4tdG9wOiAtMiU7XG4gICAgfVxuICAgIC5pbWFnZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5saW5re1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICB9XG4gICAgLmN1cnJpY3VsdW1zZWN7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIH1cbiAgICAuc2tpbGwtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4OyBcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjsgXG4gICAgfVxuICAgIFxuICAgIC5za2lsbC1pbWFnZTIge1xuICAgICAgICB3aWR0aDogNzVweDsgXG4gICAgICAgIGhlaWdodDogNzVweDsgXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgZmlnY2FwdGlvbntcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5jdXN0b20taHIge1xuICAgICAgICBib3JkZXI6IG5vbmU7ICAgXG4gICAgICAgIGhlaWdodDogMC4xcHg7ICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgICAgICBcbiAgICAgICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICMwMDAgIWltcG9ydGFudDsgIFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDsgICBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyBcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDsgICAgICAgICAgXG4gICAgfVxuXG4gICAgLnNvYnJle1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgfVxuICAgIC5za2lsbHN7XG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIH1cblxuICAgIC5saW5lLXRpdGxlIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzAwMDsgXG4gICAgICAgIHdpZHRoOiA0NSU7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwJTsgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4OyAgICAgIFxuICAgIH1cbiAgICBcbiAgICAubGluZS10aXRsZTMge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMDAwOyBcbiAgICAgICAgd2lkdGg6IDMwJTsgICAgICAgICAgICAgICAgICBcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTAlOyAgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDsgICAgICBcbiAgICB9XG4gICAgXG4gICAgLmxpbmUtdGl0bGUyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzAwMDsgXG4gICAgICAgIHdpZHRoOiA1NSU7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwJTsgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4OyAgICAgIFxuICAgIH1cbiAgICAgIFxuXG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7QUFFRjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsU0FBUztJQUNULGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsNENBQTRDO0lBQ2hEO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksY0FBYztRQUNkLDBCQUEwQjtRQUMxQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIscUNBQXFDO1FBQ3JDLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osMEJBQTBCO1FBQzFCLFVBQVU7UUFDVixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWiwwQkFBMEI7UUFDMUIsVUFBVTtRQUNWLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksWUFBWTtRQUNaLDBCQUEwQjtRQUMxQixVQUFVO1FBQ1YsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7OztBQUdKOztBQUVBLHdtU0FBd21TIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAtNSU7XG59XG5cbi5jb250YWluZXIye1xuICAgIG1hcmdpbi10b3A6IC04JTtcbn1cbi5ib3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4ucGVyZmlse1xuICAgIG1hcmdpbi10b3A6IDcwcHggIWltcG9ydGFudDtcbn1cblxudGQge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgIFxufVxuXG50YWJsZSB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDsgXG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJveDJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmF7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5we1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5sZW5ndWFqZXN7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5za2lsbC1pbWFnZSB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7IFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47IFxufVxuXG4uc2tpbGwtaW1hZ2UyIHtcbiAgICB3aWR0aDogMTIwcHg7IFxuICAgIGhlaWdodDogMTIwcHg7IFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5za2lsbC1pbWFnZSwgLnNraWxsLWltYWdlMiB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTsgXG59XG5cbi5za2lsbC1pbWFnZTpob3ZlciwgLnNraWxsLWltYWdlMjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyBcbn1cbi5pbWFnZXtcbiAgICB3aWR0aDogMTAwJTtcbn1cbmZpZ2NhcHRpb257XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5jb2x1bW5zIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAyMHB4OyBcbn1cblxuLnRpdGxle1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNTBweDtcbn1cblxuLmN1c3RvbS1idXR0b24tYmxhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjMDAwOyBcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwOyBcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG4uY3VzdG9tLWJ1dHRvbi1ibGFjazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgXG4gICAgY29sb3I6ICNmZmZmZmY7IFxufVxuXG4uY3VzdG9tLWJ1dHRvbi1ibGFjazpob3ZlciAuaWNvbiBpIHtcbiAgICBjb2xvcjogI2ZmZmZmZjsgXG59XG5cbi5jdXN0b20tYnV0dG9uLWJsYWNrIC5pY29uIGkge1xuICAgIGNvbG9yOiAjMDAwMDAwOyBcbn1cblxuaDF7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dG9FbmNpbWF7XG4gICAgZm9udC1zaXplOiAzOHB4O1xufVxuXG4uY3VycmljdWx1bXNlY3tcbiAgICBtYXJnaW4tdG9wOiAtMTgwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubGlua3tcbiAgICBtYXJnaW4tdG9wOiAtMyU7XG59XG5cbi5jdXN0b20taHIge1xuICAgIGJvcmRlcjogbm9uZTsgICBcbiAgICBoZWlnaHQ6IDAuMXB4OyAgICAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgICAgICBcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgIzAwMCAhaW1wb3J0YW50OyAgXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4OyAgIFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7IFxuICAgIG1hcmdpbi10b3A6IDUwcHg7ICAgICAgICAgIFxuICB9XG5cbi5za2lsbHN7XG4gICAgbWFyZ2luLXRvcDogLTIlO1xufVxuXG4udHJhYntcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4ubGluZS10aXRsZSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMDAwOyBcbiAgICB3aWR0aDogMjIlOyAgICAgICAgICAgICAgICAgIFxuICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICBtYXJnaW4tdG9wOiAtMjBweDsgIFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7ICAgICAgXG59XG5cbi5saW5lLXRpdGxlMyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMDAwOyBcbiAgICB3aWR0aDogOSU7ICAgICAgICAgICAgICAgICAgXG4gICAgbWFyZ2luOiAwIGF1dG87IFxuICAgIG1hcmdpbi10b3A6IC0yMHB4OyAgXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgICAgICBcbn1cblxuLmxpbmUtdGl0bGUyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMwMDA7IFxuICAgIHdpZHRoOiAxNyU7ICAgICAgICAgICAgICAgICAgXG4gICAgbWFyZ2luOiAwIGF1dG87IFxuICAgIG1hcmdpbi10b3A6IC04MHB4OyAgXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDsgICAgICBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTEwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTMwJSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgfVxuICAgIC5zdWJ0aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiA5MCUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5wZXJmaWx7XG4gICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMiUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgLmNvbnRhaW5lcjJ7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMDBweDtcbiAgICB9XG4gICAgLmluZm97XG4gICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgIH1cbiAgICAubGVuZ3VhamVze1xuICAgICAgICBtYXJnaW4tdG9wOiAtMiU7XG4gICAgfVxuICAgIC5pbWFnZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5saW5re1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICB9XG4gICAgLmN1cnJpY3VsdW1zZWN7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIH1cbiAgICAuc2tpbGwtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4OyBcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjsgXG4gICAgfVxuICAgIFxuICAgIC5za2lsbC1pbWFnZTIge1xuICAgICAgICB3aWR0aDogNzVweDsgXG4gICAgICAgIGhlaWdodDogNzVweDsgXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgZmlnY2FwdGlvbntcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5jdXN0b20taHIge1xuICAgICAgICBib3JkZXI6IG5vbmU7ICAgXG4gICAgICAgIGhlaWdodDogMC4xcHg7ICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgICAgICBcbiAgICAgICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICMwMDAgIWltcG9ydGFudDsgIFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDsgICBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyBcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDsgICAgICAgICAgXG4gICAgfVxuXG4gICAgLnNvYnJle1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgfVxuICAgIC5za2lsbHN7XG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIH1cblxuICAgIC5saW5lLXRpdGxlIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzAwMDsgXG4gICAgICAgIHdpZHRoOiA0NSU7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwJTsgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4OyAgICAgIFxuICAgIH1cbiAgICBcbiAgICAubGluZS10aXRsZTMge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMDAwOyBcbiAgICAgICAgd2lkdGg6IDMwJTsgICAgICAgICAgICAgICAgICBcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTAlOyAgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDsgICAgICBcbiAgICB9XG4gICAgXG4gICAgLmxpbmUtdGl0bGUyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzAwMDsgXG4gICAgICAgIHdpZHRoOiA1NSU7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwJTsgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4OyAgICAgIFxuICAgIH1cbiAgICAgIFxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1126:
/*!******************************************************!*\
  !*** ./src/app/programming/programming.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgrammingComponent": () => (/* binding */ ProgrammingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProgrammingComponent {
  static #_ = this.ɵfac = function ProgrammingComponent_Factory(t) {
    return new (t || ProgrammingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProgrammingComponent,
    selectors: [["app-programming"]],
    decls: 2,
    vars: 0,
    template: function ProgrammingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "programming works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmFtbWluZy5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZ3JhbW1pbmcvcHJvZ3JhbW1pbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3108:
/*!************************************************!*\
  !*** ./src/app/proyects/proyects.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProyectsComponent": () => (/* binding */ ProyectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProyectsComponent {
  static #_ = this.ɵfac = function ProyectsComponent_Factory(t) {
    return new (t || ProyectsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProyectsComponent,
    selectors: [["app-proyects"]],
    decls: 2,
    vars: 0,
    template: function ProyectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "proyects works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm95ZWN0cy5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJveWVjdHMvcHJveWVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6307:
/*!************************************************************!*\
  !*** ./src/app/social-network/social-network.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialNetworkComponent": () => (/* binding */ SocialNetworkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact/contact.component */ 1563);


class SocialNetworkComponent {
  static #_ = this.ɵfac = function SocialNetworkComponent_Factory(t) {
    return new (t || SocialNetworkComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SocialNetworkComponent,
    selectors: [["app-social-network"]],
    decls: 10,
    vars: 0,
    consts: [[1, "is-hidden-touch"], ["href", "https://github.com/MiguelIbanezG", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-github-alt", "github", "fa-2x"], ["href", "https://www.linkedin.com/in/miguel-ib%C3%A1%C3%B1ez/", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-linkedin", "linkedin", "fa-2x"]],
    template: function SocialNetworkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ul")(2, "li", 0)(3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 0)(6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent],
    styles: ["*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    z-index: 100;\n}\n\nul[_ngcontent-%COMP%] {\n    right: 0;\n    bottom: 0;\n    color: #FFF;\n    transition: .3s;\n    position: fixed;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    margin-bottom: 30px;\n}\n\nli[_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0.8rem 0.8rem;\n    transition: 0.5s;\n    border-radius: 0 200px 200px 0;\n}\n\n\n\n\nli[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%]:hover {\n    background: #000000;\n    color: #ffffff;\n}\n\nli[_ngcontent-%COMP%]:nth-child(2)   i[_ngcontent-%COMP%]:hover {\n    background: #47b6f5;\n    color: #ffffff;\n}\n\nli[_ngcontent-%COMP%]:nth-child(3)   i[_ngcontent-%COMP%]:hover {\n    background: #47b6f5;\n    color: #ffffff;\n}\n\ni[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    margin-right: 0.1rem;\n    padding: 10px 11px;\n    border-radius: 50%;\n    color: #000000;\n    background: #ffffff;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.github[_ngcontent-%COMP%] {\n    position: relative;\n    color: #000000;\n}\n\n.linkedin[_ngcontent-%COMP%] {\n    position: relative;\n    color: #47b6f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1uZXR3b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7O0FBRUQ7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7OztBQUdBLGlFQUFpRTs7QUFFakU7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJzb2NpYWwtbmV0d29yay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkNyZWRpdHMgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1BbFVJbFpzUTd2SVxuKi9cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG51bCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxubGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAuOHJlbSAwLjhyZW07XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBib3JkZXItcmFkaXVzOiAwIDIwMHB4IDIwMHB4IDA7XG59XG5cblxuLyogQ29sb3JlcyBQYXJhIGVsIEhvdmVyIGRlcGVuZGllbmRvIGRlIHF1ZSBIaWpvIGRlIGxhIGxpc3RhIHNlYSovXG5cbmxpOm50aC1jaGlsZCgxKSBpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5saTpudGgtY2hpbGQoMikgaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzQ3YjZmNTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxubGk6bnRoLWNoaWxkKDMpIGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM0N2I2ZjU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmkge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMXJlbTtcbiAgICBwYWRkaW5nOiAxMHB4IDExcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG4uZ2l0aHViIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5saW5rZWRpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjNDdiNmY1O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc29jaWFsLW5ldHdvcmsvc29jaWFsLW5ldHdvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQzs7QUFFRDtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7O0FBR0EsaUVBQWlFOztBQUVqRTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix3RUFBd0U7QUFDNUU7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0EsdzhFQUF3OEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQ3JlZGl0cyBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUFsVUlsWnNRN3ZJXG4qL1xuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbnVsIHtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5saSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMC44cmVtIDAuOHJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMjAwcHggMjAwcHggMDtcbn1cblxuXG4vKiBDb2xvcmVzIFBhcmEgZWwgSG92ZXIgZGVwZW5kaWVuZG8gZGUgcXVlIEhpam8gZGUgbGEgbGlzdGEgc2VhKi9cblxubGk6bnRoLWNoaWxkKDEpIGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmxpOm50aC1jaGlsZCgyKSBpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDdiNmY1O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5saTpudGgtY2hpbGQoMykgaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzQ3YjZmNTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMC4xcmVtO1xuICAgIHBhZGRpbmc6IDEwcHggMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbi5naXRodWIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmxpbmtlZGluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICM0N2I2ZjU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
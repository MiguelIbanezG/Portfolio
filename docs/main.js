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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Common/GlobalVariables */ 2085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 970);







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
      if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 5,
    vars: 0,
    consts: [["id", "v4-app-footer-container", "fxFlex", "40px", "fxFlex.lt-sm", "24px", "fxLayout", "row", "fxLayoutAlign", "center stretch"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-navbar")(2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
    styles: ["#v4-app-footer-container[_ngcontent-%COMP%] {\n    background-color: black;\n    padding: 0px;\n  }\n\n    footer {\n    > * {\n      width: 100%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFFQTtJQUNFO01BQ0UsV0FBVztJQUNiO0VBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdjQtYXBwLWZvb3Rlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIDo6bmctZGVlcCBmb290ZXIge1xuICAgID4gKiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7RUFDRjs7OztBQUlGLG9mQUFvZiIsInNvdXJjZXNDb250ZW50IjpbIiN2NC1hcHAtZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG5cbiAgOjpuZy1kZWVwIGZvb3RlciB7XG4gICAgPiAqIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ 4370);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing.module */ 3670);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7275);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _experiencie_experiencie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experiencie/experiencie.component */ 3898);
/* harmony import */ var _programming_programming_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./programming/programming.component */ 1126);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proyects/proyects.component */ 3108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);


/*Componentes*/
















/**
 * Rutas de los archivos de los idiomas
 * @param http
 * @returns
 */
function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
      }
    }), _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__.ModalModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent, _experiencie_experiencie_component__WEBPACK_IMPORTED_MODULE_6__.ExperiencieComponent, _programming_programming_component__WEBPACK_IMPORTED_MODULE_7__.ProgrammingComponent, _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_8__.ProyectsComponent],
    imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__.ModalModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule]
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
      useHash: false
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

class ExperiencieComponent {
  static #_ = this.ɵfac = function ExperiencieComponent_Factory(t) {
    return new (t || ExperiencieComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExperiencieComponent,
    selectors: [["app-experiencie"]],
    decls: 2,
    vars: 0,
    template: function ExperiencieComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "experiencie works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
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
    styles: [".footer[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: flex;\n  justify-content: space-between; \n  align-items: center;\n  padding: 2px;\n  background-color: black; \n}\n\n.footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  text-align: left; \n}\n\n.footer[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  margin: 0 auto; \n  text-align: center;\n}\n\n.footer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.v4-footer-text-color[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXG59XG5cbi5mb290ZXIgLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyBcbn1cblxuLmZvb3RlciAuY2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb290ZXIgLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi52NC1mb290ZXItdGV4dC1jb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLGc3QkFBZzdCIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXG59XG5cbi5mb290ZXIgLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyBcbn1cblxuLmZvb3RlciAuY2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb290ZXIgLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi52NC1mb290ZXItdGV4dC1jb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
    decls: 2,
    vars: 0,
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    styles: [".cajaPadre[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n}\n\n.cajaFoto[_ngcontent-%COMP%] {\n  grid-area: 1/2/4/4;\n}\n\n.cajaSaludo[_ngcontent-%COMP%] {\n  grid-area: 2/1/3/2;\n}\n\n.cajaFrase[_ngcontent-%COMP%] {\n  grid-area: 2/4/3/5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FqYVBhZHJlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbn1cblxuLmNhamFGb3RvIHtcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gNCAvIDQ7XG59XG5cbi5jYWphU2FsdWRvIHtcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XG59XG5cbi5jYWphRnJhc2Uge1xuICAgIGdyaWQtYXJlYTogMiAvIDQgLyAzIC8gNTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjtBQUNBLG90QkFBb3RCIiwic291cmNlc0NvbnRlbnQiOlsiLmNhamFQYWRyZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG59XG5cbi5jYWphRm90byB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDQgLyA0O1xufVxuXG4uY2FqYVNhbHVkbyB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xufVxuXG4uY2FqYUZyYXNlIHtcbiAgICBncmlkLWFyZWE6IDIgLyA0IC8gMyAvIDU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    styles: [".navbar[_ngcontent-%COMP%] {\n    background-color: black;\n}\n\n.navbar-menu[_ngcontent-%COMP%] {\n    background-color: black;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n    transition: all .5s;\n}\n\n#logo[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    justify-content: center;\n    text-align: center;\n}\n\n.navbar-end[_ngcontent-%COMP%] {\n    justify-content: center;\n    text-align: center;\n    padding: 0;\n    margin-right: 18px;\n}\n\n.navbar-start[_ngcontent-%COMP%] {\n    padding: 0;\n}\n\n.no-seleccion-texto[_ngcontent-%COMP%] {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    user-select: none;\n}\n\nspan[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n    margin: 4px;\n    padding: 0;\n}\n\n.navbar-item[_ngcontent-%COMP%]:hover, .navbar-item[_ngcontent-%COMP%]:focus {\n    background-color: transparent;\n    border-radius: 50px;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    background-image: linear-gradient(currentColor, currentColor);\n    background-position: 10% 90%;\n    background-repeat: no-repeat;\n    background-size: 0% 0.2rem;\n    transition: background-size .3s;\n    border-bottom: 4px solid transparent;\n}\n\n.idiomas[_ngcontent-%COMP%] {\n    border-radius: 50px;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\na[_ngcontent-%COMP%]:hover {\n    background-size: 100% 0.2rem;\n}\n\n.logo[_ngcontent-%COMP%]{\n    margin-right: 5px;\n    width: 40px;\n    height: 40px;\n}\n\n.language[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    width: 30px;   \n    height: auto; \n} \n\n.Nombremov[_ngcontent-%COMP%]{\n    margin-right: -45px;\n}\n\n.navbar-brand[_ngcontent-%COMP%]{\n    background-color: black;\n}\n\n.logo-item[_ngcontent-%COMP%] {\n    display: flex;              \n    align-items: center;        \n}\n\n.vertical-bar[_ngcontent-%COMP%] {\n    width: 2px; \n    height: 30px; \n    background-color: white; \n    margin-top: 10px;\n    margin-right: 10px;\n    margin-left: 10px;\n    display: inline-block; \n    vertical-align: middle; \n}\n\n@media screen and (max-width: 1024px-1px) {\n    #logo[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .force-center[_ngcontent-%COMP%] {\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n    .navbar-end[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n    }\n\n}\n\n@media screen and (min-width: 1024px) {\n    .navbar-brand[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .navbar-end[_ngcontent-%COMP%]   .navbar-item[_ngcontent-%COMP%], .navbar-end[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n        margin: 10px;                 \n        padding: 5px;                 \n    }\n\n    .navbar-end[_ngcontent-%COMP%] {\n        max-height: 50px;\n    }\n\n    .navbar-start[_ngcontent-%COMP%] {\n        max-height: 50px;\n    }\n\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1599px) {\n    .logo-item[_ngcontent-%COMP%] {\n        display: none;          \n    }\n\n    .vertical-bar[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    span[_ngcontent-%COMP%] {\n        font-size: 20px;\n        font-weight: bold;\n        margin: 4px;\n        padding: 8px;\n    }\n\n    .language[_ngcontent-%COMP%] {\n        width: 30px;   \n    } \n}\n\n#menu-icon[_ngcontent-%COMP%], #menu-icon[_ngcontent-%COMP%]:before, #menu-icon[_ngcontent-%COMP%]:after {\n    background: #1d1f20;\n    border-radius: 0.05em;\n    height: 0.2em;\n    transition: all 0.2s ease-in-out;\n    width: 100%;\n}\n\n#menu-icon[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 0.4em 0;\n    max-width: 1em;\n    position: relative;\n}\n\nnav[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   #menu-icon[_ngcontent-%COMP%] {\n    float: right;\n}\n\n#menu-icon[_ngcontent-%COMP%]:before, #menu-icon[_ngcontent-%COMP%]:after {\n    content: '';\n    left: 0;\n    position: absolute;\n}\n\n.overlay[_ngcontent-%COMP%] {\n    background: #000000;\n    background: linear-gradient(to right, #ffffff, #424040);\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: -1;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%] {\n    box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBSXpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBRXJCLDZEQUE2RDtJQUM3RCw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdFQUF3RTtBQUM1RTs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWEsZUFBZSxnQkFBZ0I7SUFDNUMsbUJBQW1CLFNBQVMsc0NBQXNDO0FBQ3RFOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7SUFDM0I7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7O1FBRUksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBOzs7SUFHSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUVuQix1REFBdUQ7SUFDdkQsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ubmF2YmFyLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5uYXYgYSxcbm5hdiBhOmFmdGVyLFxubmF2IGE6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4jbG9nbyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5hdmJhci1lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMThweDtcbn1cblxuLm5hdmJhci1zdGFydCB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm5vLXNlbGVjY2lvbi10ZXh0byB7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5zcGFuIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm5hdmJhci1pdGVtOmhvdmVyLFxuLm5hdmJhci1pdGVtOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoY3VycmVudENvbG9yLCBjdXJyZW50Q29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChjdXJyZW50Q29sb3IsIGN1cnJlbnRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAlIDkwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMCUgMC4ycmVtO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAuM3M7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uaWRpb21hcyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbmE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAwLjJyZW07XG59XG5cbi5sb2dve1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmxhbmd1YWdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAzMHB4OyAgIFxuICAgIGhlaWdodDogYXV0bzsgXG59IFxuXG4uTm9tYnJlbW92e1xuICAgIG1hcmdpbi1yaWdodDogLTQ1cHg7XG59XG5cbi5uYXZiYXItYnJhbmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5sb2dvLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7ICAgICAgICAgICAgICAvKiBVc2EgRmxleGJveCAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgICAvKiBBbGluZWEgdmVydGljYWxtZW50ZSBlbiBlbCBjZW50cm8gKi9cbn1cblxuLnZlcnRpY2FsLWJhciB7XG4gICAgd2lkdGg6IDJweDsgXG4gICAgaGVpZ2h0OiAzMHB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4LTFweCkge1xuICAgICNsb2dvIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmZvcmNlLWNlbnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxuICAgIC5uYXZiYXItZW5kIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5uYXZiYXItZW5kIC5uYXZiYXItaXRlbSxcbiAgICAubmF2YmFyLWVuZCAuYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4OyAgICAgICAgICAgICAgICAgXG4gICAgICAgIHBhZGRpbmc6IDVweDsgICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIC5uYXZiYXItZW5kIHtcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcbiAgICB9XG5cbiAgICAubmF2YmFyLXN0YXJ0IHtcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTU5OXB4KSB7XG4gICAgLmxvZ28taXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7ICAgICAgICAgIFxuICAgIH1cblxuICAgIC52ZXJ0aWNhbC1iYXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgfVxuXG4gICAgLmxhbmd1YWdlIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7ICAgXG4gICAgfSBcbn1cblxuI21lbnUtaWNvbixcbiNtZW51LWljb246YmVmb3JlLFxuI21lbnUtaWNvbjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogIzFkMWYyMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjA1ZW07XG4gICAgaGVpZ2h0OiAwLjJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI21lbnUtaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMC40ZW0gMDtcbiAgICBtYXgtd2lkdGg6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbm5hdiBsYWJlbCAjbWVudS1pY29uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbiNtZW51LWljb246YmVmb3JlLFxuI21lbnUtaWNvbjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmLCAjNDI0MDQwKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYsICM0MjQwNDApO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4ubmF2YmFyIC5uYXZiYXItbWVudSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBSXpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBRXJCLDZEQUE2RDtJQUM3RCw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdFQUF3RTtBQUM1RTs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWEsZUFBZSxnQkFBZ0I7SUFDNUMsbUJBQW1CLFNBQVMsc0NBQXNDO0FBQ3RFOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7SUFDM0I7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7O1FBRUksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBOzs7SUFHSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUVuQix1REFBdUQ7SUFDdkQsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUZBLGdrT0FBZ2tPIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm5hdmJhci1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxubmF2IGEsXG5uYXYgYTphZnRlcixcbm5hdiBhOmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuI2xvZ28ge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXZiYXItZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG5cbi5uYXZiYXItc3RhcnQge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5uby1zZWxlY2Npb24tdGV4dG8ge1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5uYXZiYXItaXRlbTpob3Zlcixcbi5uYXZiYXItaXRlbTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGN1cnJlbnRDb2xvciwgY3VycmVudENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoY3VycmVudENvbG9yLCBjdXJyZW50Q29sb3IpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwJSA5MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAlIDAuMnJlbTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgLjNzO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmlkaW9tYXMge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG5hOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMC4ycmVtO1xufVxuXG4ubG9nb3tcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5sYW5ndWFnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMzBweDsgICBcbiAgICBoZWlnaHQ6IGF1dG87IFxufSBcblxuLk5vbWJyZW1vdntcbiAgICBtYXJnaW4tcmlnaHQ6IC00NXB4O1xufVxuXG4ubmF2YmFyLWJyYW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ubG9nby1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAgICAgICAgLyogVXNhIEZsZXhib3ggKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgLyogQWxpbmVhIHZlcnRpY2FsbWVudGUgZW4gZWwgY2VudHJvICovXG59XG5cbi52ZXJ0aWNhbC1iYXIge1xuICAgIHdpZHRoOiAycHg7IFxuICAgIGhlaWdodDogMzBweDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweC0xcHgpIHtcbiAgICAjbG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5mb3JjZS1jZW50ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cbiAgICAubmF2YmFyLWVuZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubmF2YmFyLWVuZCAubmF2YmFyLWl0ZW0sXG4gICAgLm5hdmJhci1lbmQgLmJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMTBweDsgICAgICAgICAgICAgICAgIFxuICAgICAgICBwYWRkaW5nOiA1cHg7ICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICAubmF2YmFyLWVuZCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgfVxuXG4gICAgLm5hdmJhci1zdGFydCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDE1OTlweCkge1xuICAgIC5sb2dvLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBub25lOyAgICAgICAgICBcbiAgICB9XG5cbiAgICAudmVydGljYWwtYmFye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgIH1cblxuICAgIC5sYW5ndWFnZSB7XG4gICAgICAgIHdpZHRoOiAzMHB4OyAgIFxuICAgIH0gXG59XG5cbiNtZW51LWljb24sXG4jbWVudS1pY29uOmJlZm9yZSxcbiNtZW51LWljb246YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxZDFmMjA7XG4gICAgYm9yZGVyLXJhZGl1czogMC4wNWVtO1xuICAgIGhlaWdodDogMC4yZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNtZW51LWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAuNGVtIDA7XG4gICAgbWF4LXdpZHRoOiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5uYXYgbGFiZWwgI21lbnUtaWNvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jbWVudS1pY29uOmJlZm9yZSxcbiNtZW51LWljb246YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmZmZiwgIzQyNDA0MCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmLCAjNDI0MDQwKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLm5hdmJhciAubmF2YmFyLW1lbnUge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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

class ProfileComponent {
  static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
    return new (t || ProfileComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    decls: 2,
    vars: 0,
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\n  padding: 10px;\n  margin: auto;\n  width: 840px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.menu {\n  position: fixed;\n  top: 150px;\n  width: 200px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n.button {\n  padding: 15px 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: red;\n  color: white;\n  font-weight: bold;\n}\n@media only screen and(min-width: 200px) {\n  .cards {\n    background-color: red !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0U7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6IDIwMHB4KSB7XG4gIC5jYXJkcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"cards\">\n  <card\n    *ngFor=\"let image of images; let index = index\"\n    (clickCounter)=\"click($event)\"\n    [image]=\"image\"\n    [index]=\"index\"\n  >\n  </card>\n</section>\n<div class=\"menu\">\n  <p>Clicks: {{ totalClicks }}</p>\n  <button (click)=\"resetGame()\" class=\"button\">Reset game</button>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/card.service */ "./src/services/card.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(cardService) {
        this.cardService = cardService;
        this.totalClicks = 0;
        this.images = cardService.getImages();
        this.clicks = [
            {
                id: null,
                number: null,
            },
            {
                id: null,
                number: null,
            },
        ];
    }
    AppComponent.prototype.click = function (e) {
        var _this = this;
        this.totalClicks++;
        this.cardService.flipCard(e.index);
        this.clicks[this.totalClicks % 2] = { id: e.index, number: e.number };
        if (this.totalClicks % 2 == 0) {
            if (this.clicks[0].number != this.clicks[1].number) {
                setTimeout(function () {
                    _this.cardService.flipCard(_this.clicks[0].id);
                    _this.cardService.flipCard(_this.clicks[1].id);
                }, 750);
            }
        }
    };
    AppComponent.prototype.resetGame = function () {
        this.totalClicks = 0;
        this.cardService.sortImages();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_services_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/card/card.component */ "./src/components/card/card.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/card/card.component.css":
/*!************************************************!*\
  !*** ./src/components/card/card.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  cursor: pointer;\n  width: 200px;\n  height: 200px;\n  /* background-image: linear-gradient(to bottom right, rgb(47, 0, 255), rgb(39, 209, 231) ); */\n  background-color: rgb(47, 0, 255);\n  color: white;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  -webkit-animation: 1s card 1;\n  -webkit-backface-visibility: visible;\n}\n.card-active {\n  width: 200px;\n  height: 200px;\n  background-color: rgb(47, 0, 255);\n  /* background-image: linear-gradient(to bottom right, rgb(39, 209, 231), rgb(47, 0, 255) ); */\n  color: white;\n  margin-bottom: 5px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  -webkit-animation: 1s card-active 0.5;\n  -webkit-backface-visibility: visible;\n}\n@-webkit-keyframes card-active {\n  50% {\n    opacity: 0.5%;\n    -webkit-transform: perspective(200px) rotateY(180deg);\n  }\n}\n@-webkit-keyframes card {\n  100% {\n    opacity: 0.5%;\n    -webkit-transform: perspective(300px) rotateY(-180deg);\n  }\n}\n.image {\n  width: 150px;\n  height: 150px;\n  -webkit-animation: 1s card-active 0.5;\n  -webkit-backface-visibility: visible;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkZBQTZGO0VBQzdGLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQUFpQztFQUNqQyw2RkFBNkY7RUFDN0YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHFEQUFxRDtFQUN2RDtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYixzREFBc0Q7RUFDeEQ7QUFDRjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiKDQ3LCAwLCAyNTUpLCByZ2IoMzksIDIwOSwgMjMxKSApOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDAsIDI1NSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IDFzIGNhcmQgMTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmNhcmQtYWN0aXZlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDAsIDI1NSk7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYigzOSwgMjA5LCAyMzEpLCByZ2IoNDcsIDAsIDI1NSkgKTsgKi9cbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBjYXJkLWFjdGl2ZSAwLjU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBjYXJkLWFjdGl2ZSB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC41JTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMjAwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGNhcmQge1xuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwLjUlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgzMDBweCkgcm90YXRlWSgtMTgwZGVnKTtcbiAgfVxufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBjYXJkLWFjdGl2ZSAwLjU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/components/card/card.component.html":
/*!*************************************************!*\
  !*** ./src/components/card/card.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" (click)=\"selectCard()\" *ngIf=\"!image.visible\"></div>\n\n<div class=\"card-active\" *ngIf=\"image.visible\">\n  <img [src]=\"image.url\" class=\"image\" />\n</div>\n"

/***/ }),

/***/ "./src/components/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/components/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.clickCounter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CardComponent.prototype.selectCard = function () {
        this.clickCounter.emit({ index: this.index, number: this.image.number });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CardComponent.prototype, "clickCounter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "index", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "card",
            template: __webpack_require__(/*! ./card.component.html */ "./src/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/components/card/card.component.css")]
        })
    ], CardComponent);
    return CardComponent;
}());



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
var environment = {
    production: false,
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/card.service.ts":
/*!**************************************!*\
  !*** ./src/services/card.service.ts ***!
  \**************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardService = /** @class */ (function () {
    function CardService() {
        this.images = [
            { url: "./assets/julianfat.png", number: 1, visible: false },
            { url: "./assets/julianfat.png", number: 1, visible: false },
            { url: "./assets/julian 2.png", number: 2, visible: false },
            { url: "./assets/julian 2.png", number: 2, visible: false },
            { url: "./assets/tavo.png", number: 3, visible: false },
            { url: "./assets/tavo.png", number: 3, visible: false },
            { url: "./assets/nacho.png", number: 4, visible: false },
            { url: "./assets/nacho.png", number: 4, visible: false },
            { url: "./assets/chema.png", number: 5, visible: false },
            { url: "./assets/chema.png", number: 5, visible: false },
            { url: "./assets/vitor.png", number: 6, visible: false },
            { url: "./assets/vitor.png", number: 6, visible: false },
        ];
        this.sortImages();
    }
    CardService.prototype.getImages = function () {
        return this.images;
    };
    CardService.prototype.sortImages = function () {
        for (var number = 0; number < 100; number++) {
            var from = Math.floor(Math.random() * 12), to = Math.floor(Math.random() * 12);
            var image = this.images[from];
            this.images[from] = this.images[to];
            this.images[to] = image;
        }
        for (var number = 0; number < 12; number++) {
            this.images[number].visible = false;
        }
    };
    CardService.prototype.flipCard = function (index) {
        this.images[index].visible = !this.images[index].visible;
    };
    CardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gustavo.velazquez/development/angular/memorama/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
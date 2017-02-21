"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// any route defined by user will send them here. 
var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    core_1.Component({
        // do not need selector because pushing component through router & router outlet
        template: "\n\t\t<div class=\"jumbotron text-center\">\n\t\t\t<h1>404 Not Found</h1>\n\t\t\t<p>You are lost my friend. Turn back towards <a routerLink=\"/\">home</a>.</p>\n\t\t</div>\n\t"
    })
], NotFoundComponent);
exports.NotFoundComponent = NotFoundComponent;
//# sourceMappingURL=not-found.component.js.map
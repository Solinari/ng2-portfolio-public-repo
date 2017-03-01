"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ContactContactComponent = (function () {
    function ContactContactComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    // ngOnInit is a lifecycle hook on component instatiation
    ContactContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        // grab current contact
        this.route.data.forEach(function (data) { return _this.contact = data.contact; });
    };
    // angular 2 uses html 5 push state browser history
    // window.history.back();
    // can also use router.navigate to send the user to a route
    ContactContactComponent.prototype.goBack = function () {
        this.router.navigate(['/contact']);
    };
    return ContactContactComponent;
}());
ContactContactComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/contact/contact-contact.component.html",
        styleUrls: ["./app/contact/contact-contact.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], ContactContactComponent);
exports.ContactContactComponent = ContactContactComponent;
//# sourceMappingURL=contact-contact.component.js.map
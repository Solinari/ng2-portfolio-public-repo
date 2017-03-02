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
var contact_service_1 = require("../shared/services/contact.service");
var ContactContactResolve = (function () {
    function ContactContactResolve(service, router) {
        this.service = service;
        this.router = router;
    }
    ContactContactResolve.prototype.resolve = function (route) {
        var _this = this;
        var name = route.params['name'];
        return this.service.getContact(name).then(function (contact) {
            if (contact) {
                return contact;
            }
            else {
                // navigate back to about
                _this.router.navigate(['/contact']);
                return false;
            }
        });
    };
    return ContactContactResolve;
}());
ContactContactResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [contact_service_1.ContactService, router_1.Router])
], ContactContactResolve);
exports.ContactContactResolve = ContactContactResolve;
//# sourceMappingURL=contact-contact-resolve.service.js.map
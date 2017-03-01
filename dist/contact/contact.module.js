"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var contact_component_1 = require("./contact.component");
var contact_contact_component_1 = require("./contact-contact.component");
var contact_section_component_1 = require("./contact-section.component");
var contact_service_1 = require("../shared/services/contact.service");
var contact_routing_1 = require("./contact.routing");
var contact_resolve_service_1 = require("./contact-resolve.service");
var contact_contact_resolve_service_1 = require("./contact-contact-resolve.service");
var ContactModule = (function () {
    function ContactModule() {
    }
    return ContactModule;
}());
ContactModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            contact_routing_1.contactRouting
        ],
        declarations: [
            contact_component_1.ContactComponent,
            contact_contact_component_1.ContactContactComponent,
            contact_section_component_1.ContactSectionComponent
        ],
        providers: [
            contact_service_1.ContactService,
            contact_resolve_service_1.ContactContactsResolve,
            contact_contact_resolve_service_1.ContactContactResolve
        ]
    })
], ContactModule);
exports.ContactModule = ContactModule;
//# sourceMappingURL=contact.module.js.map
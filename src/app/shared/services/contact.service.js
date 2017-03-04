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
var core_1 = require('@angular/core');
// type safety
var contactsPromise = Promise.resolve([
    {
        id: 1,
        name: 'E-mail',
        url: 'mailto:justin.tyme.dejesus@gmail.com',
        icon: './src/assets/images/gmail.png'
    },
    {
        id: 2,
        name: 'Github',
        url: 'https://github.com/Solinari',
        icon: './src/assets/images/GitHub-Mark-64px.png'
    },
    {
        id: 3,
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/justintymecompiling/',
        icon: './src/assets/images/Linkedin-Logo-2C-34px-R.png'
    },
]);
var ContactService = (function () {
    function ContactService() {
    }
    // get all contacts
    ContactService.prototype.getContacts = function () {
        return contactsPromise;
    };
    // find a specific contact
    ContactService.prototype.getContact = function (name) {
        // ES6 arrow to return in-line
        return contactsPromise.then(function (contacts) { return contacts.find(function (contact) { return contact.name === name; }); });
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map
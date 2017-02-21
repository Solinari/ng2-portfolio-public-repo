"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// type safety
var usersPromise = Promise.resolve([
    {
        id: 1,
        name: 'Justin',
        username: 'Solinari',
        avatar: 'https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-9/15781278_10154935357183760_7566106250660922199_n.jpg?oh=56673cf7a03483dda909ff2a051df313&oe=592D0075'
    }
]);
var UserService = (function () {
    function UserService() {
    }
    // get all users
    UserService.prototype.getUsers = function () {
        return usersPromise;
    };
    // find a specific user
    UserService.prototype.getUser = function (username) {
        // ES6 arrow function gives automatic returns in-line
        return usersPromise.then(function (users) { return users.find(function (user) { return user.username === username; }); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
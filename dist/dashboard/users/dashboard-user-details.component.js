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
var router_1 = require('@angular/router');
var user_service_1 = require('../../shared/services/user.service');
var DashboardUserDetailsComponent = (function () {
    function DashboardUserDetailsComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    DashboardUserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this is using an observable
        this.route.params.forEach(function (params) {
            var username = params['username'];
            _this.service.getUser(username).then(function (user) {
                _this.user = user;
                _this.editName = user.name;
            });
        });
    };
    // don't save then nav to /dashboard/users
    DashboardUserDetailsComponent.prototype.cancel = function () {
        this.router.navigate(['/dashboard/users']);
    };
    // use the temp variable from above. 
    DashboardUserDetailsComponent.prototype.save = function () {
        this.user.name = this.editName;
        this.cancel();
    };
    DashboardUserDetailsComponent.prototype.canDeactivate = function () {
        console.log('navigating away...');
        // if the editName !== this.user.name
        if (this.user.name !== this.editName) {
            // js allows window usage for this
            return window.confirm('Discard changes?');
        }
        return true;
    };
    DashboardUserDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: "/app/dashboard/users/dashboard-user-details.component.html",
            styleUrls: ["/app/dashboard/users/dashboard-user-details.component.css"]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
    ], DashboardUserDetailsComponent);
    return DashboardUserDetailsComponent;
}());
exports.DashboardUserDetailsComponent = DashboardUserDetailsComponent;
//# sourceMappingURL=dashboard-user-details.component.js.map
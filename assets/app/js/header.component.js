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
var auth_service_1 = require("./auth/auth.service");
var profile_service_1 = require("./profile/profile.service");
var HeaderComponent = (function () {
    function HeaderComponent(authService, profileService, router) {
        this.authService = authService;
        this.profileService = profileService;
        this.router = router;
        this.userId = localStorage.getItem('userId') ? localStorage.getItem('userId').toString() : '';
        this.userIdRoute = "profile/" + this.userId;
    }
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    };
    HeaderComponent.prototype.onSubmit = function (form) {
        console.log(localStorage.getItem('userId'));
        console.log(form.value.search);
        this.router.navigate(['/profile/search/', form.value.search]);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: './header.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        profile_service_1.ProfileService,
        router_1.Router])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;

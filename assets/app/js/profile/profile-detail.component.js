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
var profile_service_1 = require("./profile.service");
var practice_model_1 = require("../practices/practice.model");
require("rxjs/add/operator/switchMap");
var ProfileDetailComponent = (function () {
    function ProfileDetailComponent(ps, route, router) {
        this.ps = ps;
        this.route = route;
        this.router = router;
        this.currentFollow = false;
        this.isLoggedInUser = false;
        this.hasPosts = false;
    }
    ProfileDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.ps.getUser(params['id']); })
            .subscribe(function (userObj) {
            _this.userPractices = [];
            console.log(_this.userPractices);
            for (var i = 0; i < userObj.user.practices.length; i++) {
                _this.hasPosts = true;
                if (userObj.user.practices[i].post) {
                    var practice = new practice_model_1.Practice(userObj.user.practices[i].post, userObj.user.username, userObj.user.id, null, userObj.user.practices[i].likes);
                    _this.userPractices.push(practice);
                }
            }
            console.log(_this.userPractices.length);
            _this.user = userObj.user;
            _this.loggedInUser = userObj.loggedInUser;
            if (userObj.loggedInUser.id === userObj.user.id) {
                _this.isLoggedInUser = true;
            }
            for (var i = 0; i < userObj.loggedInUser.follows.length; i++) {
                if (userObj.loggedInUser.follows[i].user.id === userObj.user.id) {
                    return _this.currentFollow = true;
                }
            }
        });
    };
    ProfileDetailComponent.prototype.follow = function () {
        this.currentFollow = true;
        this.ps.followUser(this.user.id)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    ProfileDetailComponent.prototype.eligibleToFollow = function () {
        if (this.currentFollow || this.isLoggedInUser) {
            return false;
        }
        return true;
    };
    return ProfileDetailComponent;
}());
ProfileDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-profile-detail',
        templateUrl: './profile-detail.component.html',
        providers: [profile_service_1.ProfileService]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService, router_1.ActivatedRoute, router_1.Router])
], ProfileDetailComponent);
exports.ProfileDetailComponent = ProfileDetailComponent;

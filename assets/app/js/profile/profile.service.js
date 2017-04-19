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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Rx_1 = require("rxjs/Rx");
var user_model_1 = require("../auth/user.model");
var follow_model_1 = require("./follow.model");
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.following = [];
    }
    ProfileService.prototype.getUser = function (id) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.get('http://localhost:3000/user/' + id + token, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var user = new user_model_1.User(result.obj.popUser.email, result.obj.popUser.username, result.obj.popUser.practices, result.obj.popUser._id, result.obj.popUser.following);
            var loggedInUser = new user_model_1.User(result.obj.loggedPopUser.email, result.obj.loggedPopUser.username, result.obj.loggedPopUser.practices, result.obj.loggedPopUser._id, result.obj.loggedPopUser.following);
            return {
                user: user,
                loggedInUser: loggedInUser
            };
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ProfileService.prototype.followUser = function (id) {
        var _this = this;
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/user/' + id + '/follow' + token, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var follow = new follow_model_1.Follow(result.obj.user.username, result.obj._id);
            _this.following.push(follow);
            return follow;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ProfileService.prototype.searchUsers = function (value) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.get('http://localhost:3000/user/search/' + value + token, { headers: headers })
            .map(function (response) {
            var users = response.json().obj;
            var transformedUsers = [];
            for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                var user = users_1[_i];
                transformedUsers.push(new user_model_1.User(user.email, user.username, user.practices, user._id, user.following));
            }
            return transformedUsers;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProfileService);
exports.ProfileService = ProfileService;

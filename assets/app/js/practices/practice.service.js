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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
require("rxjs/Rx");
var practice_model_1 = require("./practice.model");
var PracticeService = (function () {
    function PracticeService(http) {
        this.http = http;
        this.practices = [];
        this.likesArray = [];
        this.practiceIsEdit = new core_1.EventEmitter();
    }
    PracticeService.prototype.addPractice = function (practice) {
        var _this = this;
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var body = JSON.stringify(practice);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/practice' + token, body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var practice = new practice_model_1.Practice(result.obj.post, result.obj.user.username, result.obj.user._id, result.obj._id, result.obj.likes);
            _this.practices.push(practice);
            return practice;
        })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json()); });
    };
    PracticeService.prototype.likePractice = function (practice) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var body = JSON.stringify(practice);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        console.log(practice);
        return this.http.post('http://localhost:3000/practice/' + practice.id + '/like' + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json()); });
    };
    PracticeService.prototype.getPractices = function () {
        var _this = this;
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.get('http://localhost:3000/practice' + token)
            .map(function (response) {
            var practicesRes = response.json().obj;
            var transformedPractices = [];
            console.log(practicesRes);
            for (var j = 0; j < practicesRes.length; j++) {
                for (var _i = 0, _a = practicesRes[j]; _i < _a.length; _i++) {
                    var practice = _a[_i];
                    for (var _b = 0, _c = practice.likes; _b < _c.length; _b++) {
                        var practiceLikes = _c[_b];
                        _this.likesArray.push(practiceLikes.user.id);
                    }
                    console.log(practice);
                    transformedPractices.push(new practice_model_1.Practice(practice.post, practice.user.username, practice.user._id, practice._id, _this.likesArray));
                    console.log(_this.likesArray);
                    _this.likesArray = [];
                }
            }
            _this.practices = transformedPractices;
            console.log(transformedPractices);
            return _this.practices;
        })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json()); });
    };
    PracticeService.prototype.editPractice = function (practice) {
        this.practiceIsEdit.emit(practice);
    };
    PracticeService.prototype.updatePractice = function (practice) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var body = JSON.stringify(practice);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('http://localhost:3000/practice/' + practice.id + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json()); });
    };
    PracticeService.prototype.deletePractice = function (practice) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        this.practices.splice(this.practices.indexOf(practice), 1);
        return this.http.delete('http://localhost:3000/practice/' + practice.id + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json()); });
    };
    return PracticeService;
}());
PracticeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PracticeService);
exports.PracticeService = PracticeService;

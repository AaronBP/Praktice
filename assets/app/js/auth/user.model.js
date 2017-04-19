"use strict";
var User = (function () {
    function User(email, username, practices, id, follows, password) {
        this.email = email;
        this.username = username;
        this.practices = practices;
        this.id = id;
        this.follows = follows;
        this.password = password;
    }
    return User;
}());
exports.User = User;

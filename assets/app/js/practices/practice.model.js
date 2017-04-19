"use strict";
var Practice = (function () {
    function Practice(post, author, authorId, id, likeAuthor) {
        this.post = post;
        this.author = author;
        this.authorId = authorId;
        this.id = id;
        this.likeAuthor = likeAuthor;
    }
    return Practice;
}());
exports.Practice = Practice;

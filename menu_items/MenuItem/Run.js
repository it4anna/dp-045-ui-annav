"use strict";


$(function() {
    var app = new CollectionView();
    Backbone.Mediator.sub( "categories-ready", app.render, app);
});
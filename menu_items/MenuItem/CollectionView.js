"use strict";

var   CollectionView = Backbone.View.extend( {
    initialize: function() {
        this.collection = new ItemsCollection();
    },


    addItem: function( item ) {
        var view = new ItemView( { model: item } ),
            key = item.get( "category" ),
            element = this.cat_elements[ key ];

        element.append( view.render().el );
    },


    render: function(elements) {
        this.cat_elements = elements;

        this.collection.each( this.addItem, this );
    }
});
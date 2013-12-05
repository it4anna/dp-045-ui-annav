"use strict";


var ItemView = Backbone.View.extend( {
    tagName: 'span',
    className: "menu_item",
    template: _.template( $( "#item_tpl" ).html() ),

    events: {
        "click": "addMediatorPub"
    },

    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    },

    addMediatorPub : function() {
        Backbone.Mediator.pub( "addOrderItem", { "name": this.model.get( "name" ), "price": this.model.get( "price" ) } );
    }
});
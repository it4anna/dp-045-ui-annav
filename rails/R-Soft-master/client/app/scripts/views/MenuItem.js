/*global client, Backbone, JST*/

client.Views = client.Views || {};

(function () {
    'use strict';

    client.Views.MenuitemView = Backbone.View.extend({
	    model:undefined,
        tagName: 'div',
        className: "category-container",
		template: _.template("<span class='item_el'><%= category %><%= name %><%= description %><%= price %></span>"),
		
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

})();

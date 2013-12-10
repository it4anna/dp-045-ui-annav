/*global client, Backbone, JST*/

client.Views = client.Views || {};

(function () {
    'use strict';

    client.Views.MenuitemcollectionviewView = Backbone.View.extend({

        initialize: function() {
            this.collection = new client.Collections.MenuitemCollection();
			this.elements = {};
			Backbone.Mediator.sub( "categories-ready", this.render, this );
        },
		
		
		
		addItem: function( item ) {
            var view = new client.Views.MenuitemView( { model: item } ),
			key = item.get( "category" ),
            element = this.elements[ key ];
            
			element.append( view.render().el );
            },

        render: function(elements) {
            this.elements = elements;
            this.collection.each( this.addItem, this );
            }

    });

})();

"use strict";


$(function() {

/*    _.templateSetting = {
        interpolate : /<\?=(.+?)\?>/
    };*/

    var Item,ItemsCollection, ItemView, CollectionView, app;


    Item = Backbone.Model.extend( {
            defaults: {
                category	 : "N/A",
                name : "N/A",
                description : "N/A",
                price	 : "N/A"
            }
        } );


        ItemsCollection = Backbone.Collection.extend( {
            initialize: function() {
                this.fetch();
            },

            model : Item,
            url: "../items"
        } );


        ItemView = Backbone.View.extend( {
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


        CollectionView = Backbone.View.extend( {
            initialize: function() {
                this.collection = new ItemsCollection();
            },


            addItem: function( item ) {
                var view = new ItemView( { model: item } );
				console.log(item);
                   // key = item.get( "category" );
                    element = this.cat_elements[ 0 ];

                 element.append( view.render().el );
            },


            render: function(elements) {
                this.cat_elements = elements;

                this.collection.each( this.addItem, this );
            }
        });


    app = new CollectionView();
    Backbone.Mediator.sub( "categories-ready", app.render, app );
});
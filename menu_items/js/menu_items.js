"use strict";


$(function() {
    var Item,ItemsCollection, ItemView, ItemCollectionView, app;


    Item = Backbone.Model.extend( {
            defaults: {
                category : "N/A",
                name : "N/A",
                desc : "N/A",
                price : "N/A"//,
               // id : "N/A"
            }
        } );


        ItemsCollection = Backbone.Collection.extend( {
            initialize: function() {
//                this.fetch();
                this.add( new Item( { "category": "Drinks", "name": "Capuccino", "desc": "yummy", "price": "5"} ) );
                this.add( new Item( { "category": "Desserts", "name": "Ice Cream", "desc": "Pork, mutton, veal",  "price": "4"} ) );
                this.add( new Item( { "category": "Desserts", "name": "Cream Pie", "desc": "Pork, mutton, veal",  "price": "4"} ) );
                this.add( new Item( { "category": "Entrees", "name": "Soup", "desc": "tru lu la", "price": "10", "id": "2"} ));
                this.add( new Item( { "category": "Drinks", "name": "Esspreso", "desc": "yummy", "price": "5"} ) );
                this.add( new Item( { "category": "Sides", "name": "Cheese", "desc": "some ingredients", "price": "10"} ) );
                this.add( new Item( { "category": "Bar", "name": "Mochitto", "desc": "some ingredients", "price": "3"}));
                this.add( new Item( { "category": "Bar", "name": "Green Mexican","desc": "some ingredients", "price": "5"}));
                this.add( new Item( { "category": "Bar", "name": "B-52", "desc": "some ingredients", "price": "3"}));
            },

            model : Item//,
//            url: items
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


        ItemCollectionView = Backbone.View.extend( {
            initialize: function() {
                this.collection = new ItemsCollection();
            },

            subscriptions: {
                'categories-ready': "render" // calls this.render
            },


            addItem: function( item ) {
                var view = new ItemView( { model: item } ),
                    key = item.get( "category" ),
                    element = this.cat_elements[ key ];

                    console.log( element );
                    console.log( view.render().el );


                this.$( element ).append( view.render().el ); //element and view.el is ok(see console.logs), but append doesn't add view.el to element
            },


            render: function() {
                this.cat_elements = arguments[ 0 ];
                this.collection.each( app.addItem, this ); // Warning: Uncaught TypeError: Cannot call method 'each' of undefined (but works)
            }
        });


    app = new ItemCollectionView();
    Backbone.Mediator.sub( "categories-ready", app.render );
});
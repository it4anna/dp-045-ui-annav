"use strict";


$(function() {

    var Item = Backbone.Model.extend( {
//        initialize: function(){console.log("new model")},
            defaults: { //if defaults is needs, when next element doesn't render
                category : "N/A",
                name : "N/A",
                desc : "N/A",
                price : "N/A"//,
               // id : "N/A"
            }
        } ),


        ItemsCollection = Backbone.Collection.extend( {
            initialize: function() {
//                                this.fetch();
                this.add( new Item( { "category": "Dricks", "name": "Capuccino", "desc": "yummy", "price": "5"} ) );
                this.add( new Item( { "category": "Dessetrs", "name": "Ice Cream", "desc": "Pork, mutton, veal",  "price": "4"} ) );
                this.add( new Item( { "category": "Dessetrs", "name": "Cream Pie", "desc": "Pork, mutton, veal",  "price": "4"} ) );
                this.add( new Item( { "category": "Entrees", "name": "Soup", "desc": "tru lu la", "price": "10", "id": "2"} ));
                this.add( new Item( { "category": "Dricks", "name": "Esspreso", "desc": "yummy", "price": "5"} ) );
                this.add( new Item( { "category": "Sides", "name": "Cheese", "desc": "some ingredients", "price": "10"} ) );
                this.add( new Item( { "category": "Bar", "name": "Mochitto", "desc": "some ingredients", "price": "3"}));
                this.add( new Item( { "category": "Bar", "name": "Green Mexican","desc": "some ingredients", "price": "5"}));
                this.add( new Item( { "category": "Bar", "name": "B-52", "desc": "some ingredients", "price": "3"}));
            },

            model : Item//,
//                        url: items
        } ),

        PropItemsCollection = Backbone.Collection.extend( {
            model : Item//,
//                        url: items
        } ),


        ItemView = Backbone.View.extend( {
            tagName: 'div',
            className: "menu_item",
            template: _.template( $( "#item_tpl" ).html() ),

            render: function() {
                this.$el.html( this.template( this.model.toJSON() ) );
                return this;
            }
        }),


        ItemCollectionView = Backbone.View.extend({
            initialize: function() {
                this.collection = new ItemsCollection();
            },

            el: $("#container"),

            events: {
                "click": "render"
            },

            addItem: function( item ) {
                var view = new ItemView( {model: item} );
                this.$el.append( view.render().el );
            },

            render: function() {
                var one_collection = this.collection.where ({category: "Dricks"}),
                    new_collection = new PropItemsCollection();

                for (var i= 0; i < one_collection.length; i++)
                {
                    new_collection.add (one_collection[i]);
                }

                this.$el.html( ":::Items:::" );
                new_collection.each( this.addItem, this );
            }
        }),


        app = new ItemCollectionView();
});
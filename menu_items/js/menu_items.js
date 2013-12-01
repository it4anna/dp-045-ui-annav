"use stict";


$(function() {

    var Item = Backbone.Model.extend( {
//        initialize: function(){console.log("new model")},
            defaults: { //if defaults is needs, when next element doesn't render
                category_id : "N/A",
                name : "N/A",
                desc : "N/A",
                price : "N/A",
				id : "N/A"
            }
        } ),


        ItemsCollection = Backbone.Collection.extend( {
            initialize: function() {
//				this.fetch();
                this.add( new Item( { "category": "Drinks", "name": "Pinacolada", "desc": "yummy", "price": "5", "id": "0"} ) );
                this.add( new Item( { "category": "Cold collation", "name": "Cassoulet", "desc": "Pork, mutton, veal",  "price": "4", "id": "1"} ) );
                this.add( new Item( { "category": "Cold collation", "name": "Cheese", "desc": "tru lu la", "price": "10", "id": "2"} ));
                this.add( new Item( { "category": "First course", "name": "Soup", "desc": "some ingredients", "price": "10", "id": "3"} ) );
                this.add( new Item( { "category": "Drinks", "name": "B-52", "price": "3"}));
            },

            model : Item//,
//			url: items
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

            el: $("#items_cnt"),

            events: {
                "click": "render"
            },

            addItem: function( item ) {
                var view = new ItemView( {model: item} );
                this.$el.append( view.render().el );
            },

            render: function() {
                this.$el.html( ":::Items:::" );
                this.collection.each( this.addItem, this );
            }
        }),
		

        app = new ItemCollectionView();
});




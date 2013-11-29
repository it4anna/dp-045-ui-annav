$(function (){

    var MenuItem = Backbone.Model.extend( { // Do we need: units for weight, and type of valute for price
//        initialize: function(){console.log("new model")},
            defaults: { //if defaults is needs, when next element doesn't render
                category : "undefined",
                name : "undefined",
                desc : "undefined",
                weight : "undefined",
                price : "undefined",
                id : "undefined"
            }
        } ),



        MenuItemsCollection = Backbone.Collection.extend({
            initialize: function() {
                this.add(new MenuItem({ "category": "Drinks", "name": "Pinacolada", "desc": "yummy", "weight": "100ml", "price": "5", "id": "0"}));
                this.add(new MenuItem({ "category": "Cold collation", "name": "Cassoulet", "desc": "Pork, mutton, veal", "weight": "200/200/100 gr", "price": "4", "id": "1"}));
                this.add(new MenuItem({ "category": "Cold collation", "name": "Cheese", "desc": "tru lu la", "weight": "50/50/50/50", "price": "10", "id": "2"}));
                this.add(new MenuItem({ "category": "First course", "name": "Soup", "desc": "some ingredients", "weight": "250 ml", "price": "10", "id": "3"}));
                this.add(new MenuItem({ "category": "Drinks", "name": "B-52", "weight": "100ml", "price": "3"}));
            },

            model : MenuItem
        }),


        MenuItemView = Backbone.View.extend({
            className: "menu_item",

            template: _.template($("#item_tpl").html()),

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        }),

        MenuItemCollectionView = Backbone.View.extend({
            initialize: function() {
                this.collection = new MenuItemsCollection();
            },

            el: $("#items_cnt"),

            events: {
                "click": "render"
            },

            addMenuItem: function(menu_item) {
                console.log("render item");
                var view = new MenuItemView({model: menu_item});
                this.$el.append(view.render().el);
            },

            render: function() {
                console.log("render items");
                this.$el.html(":::Items:::");
                this.collection.each(this.addMenuItem, this);
            }
        }),

        app = new MenuItemCollectionView ();
});




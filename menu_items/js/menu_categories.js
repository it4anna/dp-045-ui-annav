"use strict";


$(function() {
    var MenuCategory = Backbone.Model.extend({
            defaults: {
                category_name: 'noname'
        }
        }),

        MenuCategoriesCollection = Backbone.Collection.extend({
            model: MenuCategory,
            initialize: function() {
                //this.fetch();
                this.add(new MenuCategory({'category_name': 'Dricks'}));
                this.add(new MenuCategory({'category_name': 'Dessetrs'}));
                this.add(new MenuCategory({'category_name': 'Entrees'}));
                this.add(new MenuCategory({'category_name': 'Sides'}));
				this.add(new MenuCategory({'category_name': 'Bar'}));
            }
        }),

        MenuCategoryView = Backbone.View.extend({
            tagName: 'div',
            className: "category-container",
            template: _.template($('#category').html()),
            initialize: function() {
//                Backbone.Mediator.pub('category_created', this.model.get('category_name'));
            },
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
//				Backbone.Mediator.pub("category_created", this.model.get('category_name'));
                return this;
            }
        }),

        CategoriesCollectionView = Backbone.View.extend({
            initialize: function() {
                console.log("new CategoriesCollectionView()");
                this.collection = new MenuCategoriesCollection();
                this.render();                
            },
            el: $('#menu-container'),
            render: function() {
                this.$el.html("Menu");
                this.collection.each(this.addOneCategory, this);
            },
            addOneCategory: function(model) {
                var view =new MenuCategoryView({'model': model});
                this.$el.append(view.render().$el);
            }
        });

    var app1 = new CategoriesCollectionView();

});
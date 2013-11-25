$(function (){

var Cat = Backbone.Model.extend({
    defaults: {
        name : "undefined",
        color : "undefined"
    }
    }),



CatsCollection = Backbone.Collection.extend({
    initialize: function() {
        this.add(new Cat({"name": "Murka", "color": "white"}));
        this.add(new Cat({"name": "Murzik", "color": "grey"}));
        this.add(new Cat({"name": "Barsic", "color": "green"}));
    },

    model : Cat
}),


    CatView = Backbone.View.extend({
    className: "cat",

    template: _.template($("#kitty_tpl").html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
}),

    CatCollectionView = Backbone.View.extend({
        initialize: function() {
            this.collection = new CatsCollection();
        },

        el: $("#cats_action"),

        events: {
            "click": "render"
        },

        addCat: function(cat) {
            var view = new CatView({model: cat});
            this.$el.append(view.render().el);
        },

        render: function() {
            this.$el.html("");
            this.collection.each(this.addCat, this);
        }
    }),

        my_view = new CatCollectionView ();
});




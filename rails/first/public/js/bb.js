$(function (){

var Cat = Backbone.Model.extend({
    defaults: {
        name : "undefined",
        color : "undefined",
		id : "unset"
    }
//	url:"/cats/+id  //dlya kajdogo kota
    }),



CatsCollection = Backbone.Collection.extend({
    initialize: function() {

		this.fetch();
      },
	  
    model : Cat,
	url: "/cats.json"   //works the same way url: "/cats"
	
	
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




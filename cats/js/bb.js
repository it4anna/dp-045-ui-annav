CatModel = Backbone.Model.extend({

    initialize : function (name, color){
        this.name = name;
        this.color = color;
    },
    run : function() {
        return "Scared cat "+ this.name + " in running...";
    }
});



CatsCollection = Backbone.Collection.extend({
    model : CatModel,

    showCats: function (callback){
       this.each (function(cat_model){
    	   callback( cat_model.color + " " + cat_model.name);
        })
    },


    scareCats: function (callback){
        this.each (function(cat_model){
            callback(cat_model.run());
        })
    }
});



CatView = Backbone.View.extend({

    cats_collection : new CatsCollection(),
    events: {
        "click #show": "showCats",
        "click #scare": "scareCats"
    },

    render : function(result) {
        console.log(result);
 //       this.$el.find("#cats_container").html("<span>"+result+"</span>");   // el is undefined! :((


    },

    scareCats: function (){
        this.cats_collection.scareCats(this.render);
    },

    showCats: function (){
        this.cats_collection.showCats(this.render);
    }
});


$(function (){
    var my_view = new CatView ({"el": $("#cats_action")});
	my_view.cats_collection.add(new CatModel("Murka", "white"));
	my_view.cats_collection.add(new CatModel("Murzik", "grey"));
	my_view.cats_collection.add(new CatModel("Barsic", "green"));
	
});




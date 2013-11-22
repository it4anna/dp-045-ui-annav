$( function() {
    var Sticker = Backbone.Model.extend( {
         defaults: {
              stc_text : "Click me to edit",
              x : 0,
              y : 0
         }
        }),



        StickerCollection = Backbone.Collection.extend({
            model: Sticker
        }),



        StickerView = Backbone.View.extend({
            initialize : function() {
            },

            className: "Sticker",
            template: _.template( $( "#sticker_tpl" ).html() ),

            events:{
                "click" : "change",
                "contextmenu" : "delete_elem"
            },
  //           $el.dblclick(function(){this.render()});  ??? it doesn't work

            delete_elem: function( e ) {
                e.preventDefault();
                this.model.destroy();
                this.$el.remove();
            },

            render: function() {
                this.$el.html( this.template( this.model.toJSON() ) );
                this.$el.css({"position" : "absolute" , "left": (this.model.get("x")-25)+"px", "top": (this.model.get("y")-35)+"px"});
                return this;
                },

            change: function(e) {
                e.stopPropagation();
                var new_text = prompt( "Enter text to save", this.model.get("stc_text") );
                this.model.set( { "stc_text": new_text } );
                this.render();
                }
            }),



            StickerCollectionView = Backbone.View.extend({
                initialize: function() {
                    this.collection = new StickerCollection();
                },

                el: $( "#stickers_container" ),

                events: {
                    "click": "createSticker",
                    "change": "render"
                },

                createSticker: function( e ) {
                    this.collection.add( new Sticker({y: e.pageY, x: e.pageX}) );
                    this.render();
                },

                addSticker: function( Sticker ) {
                    var view = new StickerView( { model: Sticker } );
                    this.$el.append( view.render().el );
                },

                render: function() {
                    this.$el.html("Click on the area, to create new sticker");
                    this.collection.each( this.addSticker, this );
                }
            }),



            app = new StickerCollectionView();
} );

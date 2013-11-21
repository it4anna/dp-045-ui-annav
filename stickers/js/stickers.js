$( function() {
    var Sticker = Backbone.Model.extend( {
         defaults: {
              stc_text : "Change me",
              x : 0,
              y : 0
         }
        }),

        StickerCollection = Backbone.Collection.extend({
            model: Sticker
        }),


        StickerView = Backbone.View.extend({
            initialize : function(){
              console.log ( "Exemplyar class sozdan" );
            },
            className: "Sticker",

            template: _.template( $( "#sticker_tpl" ).html() ),

            events:{
                "click": "change"
            },

            render: function() {
                this.$el.html( this.template( this.model.toJSON() ) );

               // this part doesn't work :(((
            /*       this.$el.css.position = "absolute";
                    this.$el.css.top = this.model.get("y") + 'px';
                    this.$el.css.left = this.model.get("y") + 'px';
*/
                    return this;

                },

               change: function(e) {
                   e.stopPropagation();
                   var new_text = prompt( "Enter text to save", "new text" );
                    this.model.set({"stc_text": new_text });
       //            this.el.value ( new_text );
                }
            }),


            StickerCollectionView = Backbone.View.extend({
                initialize: function() {
                    this.collection = new StickerCollection();
                },

                el: $( "#stickers" ),

                events: {
                    "click": "createSticker",
                    "change": "render"
                },

                createSticker: function(e) {
                    var text = prompt ("Enter text for the sticker", "Change me");
                    this.collection.add( new Sticker({stc_text : text, y: e.pageY, x: e.pageX}) );
                    this.render();
                },

                addSticker: function( Sticker ) {
                    var view = new StickerView( { model: Sticker } );
                    this.$el.append( view.render().el );
                },

                render: function() {
                    this.$el.html("");
                    this.collection.each( this.addSticker, this );
                }

            }),


            app = new StickerCollectionView();
} );

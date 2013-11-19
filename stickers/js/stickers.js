$( function() {
        var Sticker = Backbone.Model.extend( {
                defaults: {
                    stc_text : "Change me"
                }
            } ),


            StickerCollection = Backbone.Collection.extend({
                initialize: function() {
                    this.add( new Sticker() );
                    this.add( new Sticker() );
                    this.add( new Sticker() );
                },

                model: Sticker

            }),


            StickerView = Backbone.View.extend({
                className: "Sticker",

                template: _.template( $( "#sticker_tpl" ).html() ),

 /*               events:{
                    "click": "change"
                },
*/
                render: function() {
                    this.$el.html( this.template( this.model.toJSON() ) );
                    return this;
                }/* ,

               change: function(el) {
                    this.model.set("str_text", )
                }*/
            }),


            StickerCollectionView = Backbone.View.extend({
                initialize: function() {
                    this.collection = new StickerCollection();
                },

                el: $( "#stickers" ),

                events: {
   //                 "click": "createSticker"//,
                    "click": "render"
                },

                addSticker: function( Sticker ) {
                    var view = new StickerView( { model: Sticker } );
                    this.$el.append( view.render().el );
                },

                render: function() {
                    this.$el.html( "" );
                    this.collection.each( this.addSticker, this );
                }//,

 /*               createSticker: function() {
                    this.collection.add( new Sticker() );
                } */
            }),


            app = new StickerCollectionView();
} );

/*global client, Backbone*/

client.Collections = client.Collections || {};

(function () {
    'use strict';

    client.Collections.MenuitemCollection = Backbone.Collection.extend({
	    model:client.Models.MenuitemModel,

           initialize: function() {
//				console.log("fetch");
                this.fetch();
            },

		url: "items.json"

    });

})();

/*global client, Backbone*/

client.Models = client.Models || {};

(function () {
    'use strict';

    client.Models.MenuitemModel = Backbone.Model.extend({
	            defaults: {
                category	 : "N/A",
                name : "N/A",
                description : "N/A",
                price	 : "N/A"
            }
    });

})();

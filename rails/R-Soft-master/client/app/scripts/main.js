/*global client, $*/


window.client = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log("It's work!");

        var category = new client.Views.CategorycollectionView(),
            tables = new client.Views.TableCollectionView(),
			menuitem = new client.Views.MenuItemsCollectionView;
    }
};

$(document).ready(function () {
    'use strict';
    client.init();
});

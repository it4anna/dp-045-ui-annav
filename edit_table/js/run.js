"use strict";


$(document).ready(function() {
    var view = new View(),
        controller = new Controller();


    view.addControlMenu();
    controller.addBtnEvents();
});
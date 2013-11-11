"use strict";
// enter in programme
$(document).ready(function (){
 //   console.log ("document.ready");
    var my_view = new View (),
        my_controller = new Controller ();


    my_view.addControlMenu();
    my_controller.addBtnEvents();


});
"use strict";

function View () {
    var control = new Controller ();
    this.addEvents = function () {
        console.log ("view.addEvents()");
        document.getElementById("dragable_div").addEventListener("click",control.onMouseLeftClick,false);
        document.getElementById("dragable_div").addEventListener("contextmenu",control.onMouseRightClick,false);
    };
    window.setInterval(control.inputCurrTime,1000);


    return this;
}
"use strict";

function ContollerDrag () {
    console.log ( "new ControllerDrag" );

    var my_drag = new Drag (),
        startDrag,
        stopDrag,
        dragable_div = document.getElementById ( "dragable_div");

    this.addEvents = function () {
        console.log ( "controller_drag.addEvents ();" );
        dragable_div.addEventListener( "mousedown", startDrag, false);
        dragable_div.addEventListener( "mouseup", stopDrag, false);

    };

    startDrag = function () {
        dragable_div.addEventListener("mousemove", my_drag.draging, false);
        return my_drag.caughtObj();
    };

    stopDrag = function () {
        dragable_div.removeEventListener("mousemove", my_drag.draging, false);
        return my_drag.releaseObj ();
    };






    return this;
}
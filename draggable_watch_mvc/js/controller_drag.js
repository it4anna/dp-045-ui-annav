"use strict";

function ContollerDrag() {
    var dragable_div = document.getElementById( "dragable_div" ),
        startDrag,
        stopDrag,
        drag = new Drag(/* dragable_div*/ );


    this.addEvents = function() {
        dragable_div.addEventListener( "mousedown", startDrag, false );
        dragable_div.addEventListener( "mouseup", stopDrag, false );
    };


    startDrag = function() {
        dragable_div.addEventListener( "mousemove", function() { drag.draging(dragable_div); }, false );
        drag.caughtObj();
    };


    stopDrag = function() {
        dragable_div.removeEventListener( "mousemove", function() { drag.draging(dragable_div); }, false );
        drag.releaseObj();
    };


    return this;
}
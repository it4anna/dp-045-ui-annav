"use strict";

window.onload = function () {

    var control_watch = new ControllerWatch (),
        control_drag = new ContollerDrag ();

    control_watch.addEvents();
    control_drag.addEvents ();
    window.setInterval(control_watch.inputCurrTime,1000);
};
"use strict";

function ControllerWatch() {
    var watch = new Watch(),
        dragable_div = document.getElementById( "dragable_div" ),
        time_format = "by_default",
        onMouseRightClick,
        onMouseLeftClick;


    this.addEvents = function() {
        dragable_div.addEventListener( "click", onMouseLeftClick, false );
        dragable_div.addEventListener( "contextmenu", onMouseRightClick, false );
    };


    this.inputCurrTime = function() {
        dragable_div.innerHTML = watch.getFormatedTime( time_format );
    };


    onMouseLeftClick = function() {

       if ( time_format === "left_click" ) {
           time_format = "by_default";
       } else {
           time_format = "left_click";
        }
    };


    onMouseRightClick = function() {

        if ( time_format === "right_click" ) {
            time_format = "by_default";
        } else {
            time_format = "right_click";
        }
    };


    return this;
}
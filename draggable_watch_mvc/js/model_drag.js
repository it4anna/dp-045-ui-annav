"use strict";

//watch readme.txt
function Drag(/*dragable_div*/){
    var //dragable_div = document.getElementById( "dragable_div" ),
		x = 0,
        y = 0,
        delta_x = 0,
        delta_y = 0;


    this.draging = function( dragable_div, e ) {
        e = e || window.event;

        dragable_div.style.position = "absolute";
        dragable_div.style.top = ( e.pageY - delta_y ) + 'px';
        dragable_div.style.left = ( e.pageX - delta_x ) + 'px';

    };


    this.caughtObj = function( e ) {
        e = e || window.event;

        delta_x = e.pageX - x;
        delta_y = e.pageY - y;
    };


    this.releaseObj = function( e ) {
        e = e || window.event;

        x = e.pageX - delta_x;
        y = e.pageY - delta_y;
    };


    return this;
}
"use strict";
//model:

function Drag (){
    console.log ( "new Drag(model)" );
    var moveObj = document.getElementById("dragable_div"),
        div_x = 0,
        div_y = 0,
        difference_x = 0,
        difference_y = 0;


    this.draging = function (e) {
        e = e || window.event;

        moveObj.style.position = "absolute";
        moveObj.style.top = (e.pageY - difference_y) + 'px';
        moveObj.style.left = (e.pageX - difference_x) + 'px';

    };


    this.caughtObj = function (e) {
        e = e || window.event;

        difference_x = e.pageX - div_x;
        difference_y = e.pageY - div_y;
    };


    this.releaseObj = function (e) {
        e = e || window.event;

        div_x = e.pageX - difference_x;
        div_y = e.pageY - difference_y;
    };

    return this;
}
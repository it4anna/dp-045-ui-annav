"use strict";

function Drag (){
    var draging,
        moveObj = document.getElementById("dragable_div");


    this.StartDrag = function () {

    };

    draging = function (e) {
        e = e ||	 window.event;

        moveObj.style.position = "absolute";
        moveObj.style.top = (e.pageY-difference_y) + 'px';
        moveObj.style.left = (e.pageX-difference_x) + 'px';

    };

    this.StopDrag = function (e) {
        e = e || window.event;

        div_x = e.pageX - difference_x;
        div_y = e.pageY - difference_y;



    };

}
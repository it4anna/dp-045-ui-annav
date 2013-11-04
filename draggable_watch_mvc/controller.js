"use strict";

function Controller () {
    console.log ("new Controller");
    var my_watch = new Watch (),
        time_format = "by_default";

    this.inputCurrTime = function () {
        document.getElementById("dragable_div").innerHTML = my_watch.getFormatedTime(time_format);
    };

    this.onMouseLeftClick = function () {
        console.log ("onMouseLeftClick();");

        switch (time_format) {
            case "left_click":
                time_format = "by_default";
                break;
            case "right_click":
                time_format = "by_default";
                break;
            default:
                time_format = "left_click";
                break;
        }
    };

    this.onMouseRightClick = function () {
        switch (time_format) {
            case "right_click":
                time_format = "by_default";
                break;
            case "left_click":
                time_format = "by_default";
                break;
            default :
                time_format = "right_click";
                break;
        }
    };

    return this;
}
"use strict";
//model:
function Watch () {
    console.log ( "new Watch (model)" );
    var format_time = {};

    function toDouble ( str ) {
        return ( str.length < 2 ) ? "0"+str : str;
    }


    format_time.left_click = function () {
        var curr_date = new Date (),
            hour = String( curr_date.getHours() ),
            min = String( curr_date.getMinutes() ),
            sec = String( curr_date.getSeconds() ),
            hh_mm_ss = toDouble( hour ) + ":" + toDouble( min ) + ":" + toDouble( sec );

        return hh_mm_ss;
    };


    format_time.right_click = function () {
        var curr_date = new Date (),
            yy = String( curr_date.getFullYear() ).substr( 2 ),
            mm = String( 1 + curr_date.getMonth() ),
            dd = String( curr_date.getDate()),
            dd_mm_yy = toDouble( dd ) + "/" + toDouble( mm ) + "/" + toDouble( yy );

        return dd_mm_yy;
    };


    format_time.by_default = function () {
        var curr_date = new Date (),
            hour = String(curr_date.getHours()),
            min = String(curr_date.getMinutes()),
            hh_mm = toDouble(hour) + ":" + toDouble(min);

        return hh_mm;
    };


    this.getFormatedTime = function ( format ) {
        var time = format_time[format]();
        return  time;
    };

    return this;
}
var time_format="",
    div_x = 0,
    div_y = 0,
    difference_x = 0,
    difference_y = 0,
    onMouseLeftClick,
    onMouseRightClick,
    inputCurrentTime,
    caughtObj,
    releaseObj,
    moveObj;


/*
    var my_watch = new Watch ();
    window.setInterval(inputCurrentTime,1000);
    document.getElementById("dragable_div").addEventListener("click",onMouseLeftClick,false);
    document.getElementById("dragable_div").addEventListener("contextmenu",onMouseRightClick,false);
    document.getElementById("dragable_div").addEventListener("mousedown",caughtObj,false);
    document.getElementById("dragable_div").addEventListener("mouseup", releaseObj, false);
    };

/////////////WATCH//////////////
onMouseLeftClick = function () {
    switch (time_format) {
        case "left_click":
            time_format = "";
            break;
        case "right_click":
            time_format = "";
            break;
        default:
            time_format = "left_click";
            break;
    }
};


onMouseRightClick = function () {
    switch (time_format) {
        case "right_click":
            time_format = "";
            break;
        case "left_click":
            time_format = "";
            break;
        default :
            time_format = "right_click";
            break;
    }
};


inputCurrentTime = function () {
    var curr_date = new Date,
    hour = String(curr_date.getHours()),
    min = String(curr_date.getMinutes()),
    sec = String(curr_date.getSeconds()),
    yy = String(curr_date.getFullYear()).substr(2),
    mm = String(1+curr_date.getMonth()),
    dd = String(curr_date.getDate());

    switch (time_format) {
        case "left_click": {
            document.getElementById("dragable_div").innerHTML = toDouble(hour) + ":" + toDouble(min) + ":" + toDouble(sec);
            break;
        }
        case "right_click": {
            document.getElementById("dragable_div").innerHTML = toDouble(dd) + "/" + toDouble(mm) + "/" + toDouble(yy);
            break;
        }
        default: {
            document.getElementById("dragable_div").innerHTML = toDouble(hour) + ":" + toDouble(min);
            break;
        }
    }
};


function toDouble (str) {
return (str.length<2) ? "0"+str : str;
}   */

///////////////DRAGGABLE///////////////


caughtObj = function (e) {
    e = e || window.event;

    difference_x = e.pageX - div_x;
    difference_y = e.pageY - div_y;

    document.getElementById("dragable_div").addEventListener("mousemove", moveObj, false);
//    console.log("before: div_x: " + difference_x + ", div_y: " + difference_y);
};


moveObj = function (e) {
   var moveObj = document.getElementById("dragable_div");
     e = e ||	 window.event;

    moveObj.style.position = "absolute";
    moveObj.style.top = (e.pageY-difference_y) + 'px';
    moveObj.style.left = (e.pageX-difference_x) + 'px';
};


releaseObj = function (e) {
    e = e || window.event;  //  e = e | window.event; -> ne rabotaet

    div_x = e.pageX - difference_x;
    div_y = e.pageY - difference_y;

    document.getElementById("dragable_div").removeEventListener("mousemove",moveObj,false);
//    console.log("after: div_x: " + div_x + ", div_y: " + div_y);
};

// udalyat' set intervals;
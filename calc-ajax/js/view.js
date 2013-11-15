"use strict";

function View () {
    var my_controller = new  Controller (),
        addNumbBtn,
        addOperBtnValues,
        addEvents;

    addNumbBtn = function() {
        var i = 1,
            btn_quantity = 10;

        while (i < btn_quantity) {
            var btn = document.createElement( "input" );
            btn.type = "button";
            btn.id = "btn" + i;
            btn.name = "btn";
            btn.value = i;
            btn.addEventListener( "click", my_controller.changeField, false );
            document.getElementById( "num_pad" ).appendChild( btn );
            i ++;
        }
        btn = document.createElement( "input" );
        btn.type = "button";
        btn.id = "btn0";
        btn.name = "btn";
        btn.value = 0;
        btn.addEventListener( "click", my_controller.changeField, false );
        document.getElementById( "num_pad" ).appendChild( btn );
    };


    addOperBtnValues =  function () {
        document.getElementById( "plus" ).value = "+";
        document.getElementById( "minus" ).value = "-";
        document.getElementById( "multiply" ).value = "*";
        document.getElementById( "divide" ).value = "/";
        document.getElementById( "C" ).value = "C";
    };

    addEvents = function () {

        document.getElementById( "first_value" ).addEventListener( "click", my_controller.setField1, false );
        document.getElementById( "second_value" ).addEventListener( "click", my_controller.setField2, false );

        document.getElementById( "plus" ).addEventListener( "click", my_controller.plus, false );
        document.getElementById("minus").addEventListener("click",my_controller.minus,false);
        document.getElementById("multiply").addEventListener("click",my_controller.multiply,false);
        document.getElementById("divide").addEventListener("click",my_controller.divide,false);

        document.getElementById("C").addEventListener("click",my_controller.erase,false);
    };

    this.init = function () {
        addNumbBtn();
        addOperBtnValues();
        addEvents();
    };

    return this;
}
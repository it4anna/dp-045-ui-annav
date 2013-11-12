"use strict";
function Controller () {

    var myCalc = new Calculator(),
        operand = "",
        first_value = document.getElementById( "first_value" ),
        second_value = document.getElementById( "second_value" ),
        callback,
        result = document.getElementById( "result_input" );



    callback = function ( result_value ) {
        result.value = result_value;
    };

    this.setField1 = function () {
        operand = "first_value";
    };


    this.setField2 = function () {
        operand = "second_value";
    };


    this.changeField = function () {
        if( operand === '' ) {
            alert( "Set field" );
        } else {
            document.getElementById( operand ).value += this.value;
        }
    };


    this.erase = function () {
        first_value.value = "";
        second_value.value = "";
        result.value = "";

    };


    this.plus = function () {
//        console.log("plus!");
        myCalc.plus( Number(first_value.value), Number(second_value.value), callback );
    };

    this.minus = function () {
//        console.log("minus!");
        myCalc.minus( Number(first_value.value) + Number(second_value.value), callback );
    };

    this.multiply = function () {
//        console.log("multily!");
        myCalc.multiply( Number(first_value.value) + Number(second_value.value), callback );
    };

    this.division = function () {
//        console.log("division!");
        myCalc.division( Number(first_value.value) + Number(second_value.value), callback );
    };


    return this;
}

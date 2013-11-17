"use strict";

function Controller () {

    var calc = new Calculator(),
        operand = "",
        operand1 = document.getElementById( "first_value" ),
        operand2 = document.getElementById( "second_value" ),
        callback,
        result_input = document.getElementById( "result_input" );



    callback = function ( result ) {
        result_input.value = result;
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
        operand1.value = "";
        operand2.value = "";
        result_input.value = "";

    };


    this.plus = function () {
        calc.plus( Number(operand1.value), Number(operand2.value), callback );
    };


    this.min = function () {
        calc.min( Number(operand1.value), Number(operand2.value), callback );
    };


    this.mult = function () {
        calc.mult( Number(operand1.value), Number(operand2.value), callback );
    };


    this.div = function () {
        calc.div( Number(operand1.value), Number(operand2.value), callback );
    };


    return this;
}

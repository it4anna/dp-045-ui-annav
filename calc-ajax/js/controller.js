"use strict";
function Controller () {

    var myCalc = new Calculator(),
        operand = "",
        operand1 = document.getElementById( "first_value" ),
        operand2 = document.getElementById( "second_value" ),
        callback,
        result = document.getElementById( "result_input" );



    callback = function ( result ) {
        result.value = result;
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
        result.value = "";

    };


    this.plus = function () {
        myCalc.plus( Number(operand1.value), Number(operand2.value), callback );
    };

    this.minus = function () {
        myCalc.minus( Number(operand1.value), Number(operand2.value), callback );
    };

    this.multiply = function () {
        myCalc.multiply( Number(operand1.value), Number(operand2.value), callback );
    };

    this.divide = function () {
        myCalc.devide( Number(operand1.value), Number(operand2.value), callback );
    };


    return this;
}

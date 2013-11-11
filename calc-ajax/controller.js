"use strict";

function Controller () {
    var myCalc= new Calculator (),
        operand='',
        result = document.getElementById( "result_input" ),
        first_value = document.getElementById( "first_value" ),
        second_value = document.getElementById( "second_value" );

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
        myCalc.plus ( Number ( first_value.value ), Number( second_value.value ) );
    };

    this.minus = function () {
//        console.log("minus!");
        myCalc.minus ( Number ( first_value.value ), Number ( second_value.value ) );
    };

    this.division = function () {
//        console.log("division!");
        myCalc.division ( Number ( first_value.value ), Number( second_value.value ) );
    };

    this.multiply = function () {
//        console.log("multily!");
        myCalc.multiply ( Number ( first_value.value ), Number( second_value.value ) );
    };

    return this;
}

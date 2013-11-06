"use strict";

function Calculator () {


    this.plus = function ( oper1, oper2 ) {
        var my_ajax = new Ajax ();
        my_ajax.ajaxDialogue( oper1, oper2, "http://test1.ru/add.php");
    };

    this.minus = function ( oper1, oper2 ) {
        var my_ajax = new Ajax ();
        my_ajax.ajaxDialogue( oper1, oper2, "http://test1.ru/sub.php");
    };

    this.multiply = function ( oper1, oper2 ) {
        var my_ajax = new Ajax ();
        my_ajax.ajaxDialogue( oper1, oper2, "http://test1.ru/mul.php");
    };

    this.division = function ( oper1, oper2 ) {
        var my_ajax = new Ajax ();
        if(oper2 == 0) {
            document.getElementById( "result_input" ).value = "Error division by zero";
        }else {
            my_ajax.ajaxDialogue( oper1, oper2, "http://test1.ru/div.php");
        }
    };
    return this;
}
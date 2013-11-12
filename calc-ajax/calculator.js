"use strict";

function Calculator () {


    this.plus = function ( oper1, oper2, callback ) {
        var my_ajax = new Ajax ();
        my_ajax.ajaxDialogue( "add", oper1, oper2, callback );
    };

   this.minus = function ( oper1, oper2,  callback ) {
        var my_ajax = new Ajax ();
        my_ajax.ajaxDialogue( "sub", oper1, oper2, callback);
    };

   this.multiply = function ( oper1, oper2,  callback  ) {
        var my_ajax = new Ajax ();
        my_ajax.ajaxDialogue( "mul", oper1, oper2,  callback );
   };

   this.division = function ( oper1, oper2,  callback ) {
        var my_ajax = new Ajax ();

        if(oper2 == 0) {
            callback( "Error division by zero" );
        }else {
            my_ajax.ajaxDialogue( "div", oper1, oper2, callback );
        }
   };

    return this;
}
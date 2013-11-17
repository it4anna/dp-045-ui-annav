"use strict";

function Calculator () {


    this.plus = function( operand1, operand2, callback ) {
        var my_ajax = new Ajax();
        my_ajax.ajaxDialogue( "add", operand1, operand2, callback );
    };

   this.min = function( operand1, operand2,  callback ) {
        var my_ajax = new Ajax();
        my_ajax.ajaxDialogue( "sub", operand1, operand2, callback);
    };

   this.mult = function( operand1, operand2,  callback  ) {
        var my_ajax = new Ajax();
        my_ajax.ajaxDialogue( "mul", operand1, operand2, callback );
   };

   this.div = function( operand1, operand2,  callback ) {
        var my_ajax = new Ajax();

        if(operand2 == 0) {
            callback( "Error division by zero" );
        }else {
            my_ajax.ajaxDialogue( "div", operand1, operand2, callback );
        }
   };

    return this;
}
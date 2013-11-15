"use strict";

function Ajax () {
    var dialogue = getAjax(),
        operation = {
            "add": "php/add.php",
            "sub": "php/sub.php",
            "mul": "php/mul.php",
            "div": "php/div.php"
        };

    function getAjax() {
        var ajax;
        if(XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject( "Microsoft.XMLHTTP" );
        }
        return ajax;
    }

    this.ajaxDialogue = function( operator, operand1, operand2, callback ) {
        var success,
            uri = operation[ operator ];

        success = function() {
            if( dialogue.readyState === 4 && dialogue.status === 200 ) {
             callback( dialogue.responseText );
            } else {
                callback("Response status- " + dialogue.status);
            }
        };

        dialogue.open( "GET", uri + "?operand1=" + operand1+ "&operand2="+ operand2, true );
        dialogue.onreadystatechange = success;
        dialogue.send( null );
    };
   return this;
}
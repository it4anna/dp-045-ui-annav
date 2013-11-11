"use strict";

function Ajax () {
    var dialogue = getAjax();
    
    
    function getAjax () {
        var ajax;
        
        if ( XMLHttpRequest ) {
            ajax = new XMLHttpRequest ();
        } else {
            ajax = new ActiveXObject ( "Microsoft.XMLHTTP" );
        }
        return ajax;
    }
    

    this.ajaxDialogue = function ( oper1, oper2, uri ) {
        var success;
        
        success = function () {
            if( dialogue.readyState === 4 && dialogue.status === 200 ) {
                console.log ( dialogue.responseText );
                document.getElementById ( "result_input" ).value = dialogue.responseText;
            }
        };
        
        dialogue.open ( "GET", uri + "?operand1=" + oper1+ "&operand2="+ oper2, true );
        dialogue.onreadystatechange = success;
        dialogue.send ();
    };
    
   return this;
}

"use strict";

function Ajax () {
    var dialogue = getAjax(),
        operation = {
            "add": "add.php",
            "sub": "sub.php",
            "mul": "mul.php",
            "div": "div.php"
        };

    function getAjax () {
        var ajax;
        if (XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return ajax;
    }

    this.ajaxDialogue = function(operator, oper1, oper2, callback) {
        var success,
            uri = operation[operator];

        success = function () {
            if(dialogue.readyState === 4 && dialogue.status === 200) {
                console.log (dialogue.responseText);
                console.log (callback.toString());
                document.getElementById("result_input").value = dialogue.responseText ;
//              callback( dialogue.responseText );
            }
        };

        dialogue.open("GET", uri + "?operand1=" + oper1+ "&operand2="+ oper2, true);
        dialogue.onreadystatechange = success;
        dialogue.send(null);
    };
   return this;
}
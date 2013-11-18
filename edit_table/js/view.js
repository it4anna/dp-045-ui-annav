"use strict";

 function View() {
     function createBtnPad(btn_pad) {
         var pad,
             btn,
             i,
             btn_value = [ "Row+", "Cell+", "Cell-", "Row-" ],
             btn_id = [ "_row_add", "_cell_add", "_cell_min",  "_row_min" ],
             btn_quantity = 4;

         pad = document.createElement( "div" );
         pad.className = "contBtnDiv" ;
         pad.id = btn_pad;
         pad.innerHTML = btn_pad + "<br>";
         for( i = 0; i < btn_quantity; i++ ){    //adds buttons to this panel
             btn = document.createElement( "input" );
             btn.type = "button";
             btn.id = btn_pad + btn_id[ i ];
             btn.value = btn_value[ i ];
             $( pad ).append( btn );
         }

         $( "#control_panel" ).append( pad );
     }


     this.addControlMenu = function(){
         createBtnPad( "First" );
         createBtnPad( "Center" );
         createBtnPad( "Last" );
     };


     return this;
 }
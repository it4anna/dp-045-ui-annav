"use strict";
//Views function is to develop DOM model
 function View (){

     function createBtnPad (btn_pad){
         var pad,
             btn,
             i,
             btn_value = ["Row+", "Row-", "Cell+", "Cell-"],
             btn_id = ["_row_add", "_row_min", "_cell_add", "_cell_min"];

         pad = document.createElement("div");
         pad.id = btn_pad;
         pad.innerHTML= btn_pad;
         for (i=0; i<=3; i++){    //adds buttons to this panel
             btn = document.createElement("input");
             btn.type = "button";
             btn.id = btn_pad + btn_id[i];
             btn.value = btn_value[i];
             $(pad).append(btn);
         }

         $("#control_panel").append(pad);
     }


     this.addControlMenu = function (){
         createBtnPad ("First");
         createBtnPad ("Center");
         createBtnPad ("Last");
     };

     return this;
 }
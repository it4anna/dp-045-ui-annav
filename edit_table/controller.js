"use strict";
//Controllers function is to add events and change DOM elements
function Controller (){
    var my_model= new Model_table ();

    this.addBtnEvents = function (){
        $("#First_row_add").click();
        $("#First_row_min").click();
        $("#First_cell_add").click( function(){ my_model.addCellFirst();} );
        $("#First_cell_min").click( function(){ my_model.removeCellFirst();} );


        $("#Center_row_add").click();
        $("#Center_row_min").click();
        $("#Center_cell_add").click( function(){ my_model.addCellCenter();} );
        $("#Center_cell_min").click( function(){ my_model.removeCellCenter();} );


        $("#Last_row_add").click();
        $("#Last_row_min").click();
        $("#Last_cell_add").click( function(){ my_model.addCellLast();} );
        $("#Last_cell_min").click( function(){ my_model.removeCellLast();} );
    };

    return this;
}

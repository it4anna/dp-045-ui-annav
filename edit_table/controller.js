"use strict";
//Controllers function is to add events and change DOM elements
function Controller (){
    var my_model= new Model_table ();

    this.addBtnEvents = function (){
        $( "#First_row_add" ).click( my_model.addRowFirst );
        $( "#First_row_min" ).click( my_model.removeRowFirst );
        $( "#First_cell_add" ).click( my_model.addCellFirst );
        $( "#First_cell_min" ).click( my_model.removeCellFirst );


        $( "#Center_row_add" ).click( my_model.addRowCenter );
        $( "#Center_row_min" ).click( my_model.removeRowCenter);
        $( "#Center_cell_add" ).click( my_model.addCellCenter );
        $( "#Center_cell_min" ).click( my_model.removeCellCenter );


        $( "#Last_row_add" ).click( my_model.addRowLast );
        $( "#Last_row_min" ).click( my_model.removeRowLast );
        $( "#Last_cell_add" ).click( my_model.addCellLast );
        $( "#Last_cell_min" ).click( my_model.removeCellLast );
    };

    return this;
}

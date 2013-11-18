"use strict";
//Controllers function is to add events and change DOM elements
function Controller (){
    var model= new Model_table();

    this.addBtnEvents = function() {
        $( "#First_row_add" ).click( model.addRowFirst );
        $( "#First_row_min" ).click( model.removeRowFirst );
        $( "#First_cell_add" ).click( model.addCellFirst );
        $( "#First_cell_min" ).click( model.removeCellFirst );


        $( "#Center_row_add" ).click( model.addRowCenter );
        $( "#Center_row_min" ).click( model.removeRowCenter);
        $( "#Center_cell_add" ).click( model.addCellCenter );
        $( "#Center_cell_min" ).click( model.removeCellCenter );


        $( "#Last_row_add" ).click( model.addRowLast );
        $( "#Last_row_min" ).click( model.removeRowLast );
        $( "#Last_cell_add" ).click( model.addCellLast );
        $( "#Last_cell_min" ).click( model.removeCellLast );
    };

    return this;
}

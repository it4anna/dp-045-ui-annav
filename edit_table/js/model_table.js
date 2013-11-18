"use strict";


function Model_table() {
    function createTd( value ) {
        var td;

        td = document.createElement( "td" );
        td.innerHTML = value;

        return td;
    }


    function createRow ( td_qty, value ) {
        var tr = document.createElement ( "tr" );

        while ( td_qty -- ) {
        $( tr ).append( createTd( value ) );
        }

        return tr;
    }


    function getCenterTd ( child, index ) {
        while ( index >0 ) {
            child = child.nextSibling;
            index --;
        }
        return child;
    }


    function isLastCell() {
        var last = 0,
            cells_quantity =$("tr").toArray().length / $("td").toArray().length;   //per row
            if (cells_quantity === 1) {
                last = 1;
                console.log("You can't remove last cell");
            }

        return last;
    }


    function isLastRow() {
        var last = 0,
            rows_quantity = $("td").toArray().length;
        if (rows_quantity === 1) {
            last = 1;
            console.log("You can't remove last row");
        }

        return last;
    }


    this.addCellFirst = function() {
        var rows = $( "tr" ).toArray(), //object of rows
            i = 0;

        while( rows[ i ] ){ //until the row is exists
            $( rows[ i ] ).prepend( createTd( "first Cell" ) ); // add new td in every row
            i++;
        }
    };


    this.addCellLast = function() {
        var rows =  $( "tr" ),    //object of rows
            i = 0;

        while( rows[ i ] ){    //until the row is exists
            $( rows[ i ] ).append( createTd( "last Cell" ) ); // add new td in every row
            i++;
        }
    };


    this.addCellCenter = function() {

        var rows = $( "tr" ).toArray(),
            rows_quantity = rows.length,
            cells = $( "td" ),
            cells_quantity = cells.size(),
            center = ( Math.floor ( ( cells_quantity / rows_quantity ) / 2 ) )-1,//index of center element
            first_td,
            i = 0,
            child;

        while( rows[ i ] ) {
            first_td = rows[ i ].firstChild;
            child = getCenterTd ( first_td, center );
            $( child ).after( createTd( "center Cell" ) );
            i ++;
        }

    };


    this.removeCellFirst = function() {
        var rows = $( "tr" ), //object of rows
            i = 0;
        if (isLastCell()) {
            return;
        }
        while( rows[ i ] ){ //until the row is exists
            $( rows[ i ].firstChild ).remove(); // add new td in every row
            i ++;
        }
    };


    this.removeCellLast = function() {
        var rows = $( "tr" ), //object of rows
            i = 0;

        if (isLastCell()) { //don't remove if last cell
            return;
        }

        while( rows[ i ] ){ //until the row is exists
            $( rows[ i ].lastChild).remove(); // add new td in every row
            i ++;
        }
    };


    this.removeCellCenter = function() {

        var rows = $( "tr" ).toArray(),
            rows_quantity = rows.length,
            cells = $( "td" ),
            cells_quantity = cells.size(),
            center = ( Math.floor ( ( cells_quantity / rows_quantity ) / 2 ) ), //index of center element
            first_td,
            i = 0,
            child;

        if (isLastCell()) {      //don't remove if last row
            return;
        }

        while( rows[ i ] ) {
            first_td = rows[ i ].firstChild;
            child = getCenterTd ( first_td, center );
            $( child ).remove();
            i ++;
        }
    };


    this.addRowFirst = function() {
        var rows = $( "tr" ),
            rows_quantity = rows.size(),
            cells = $( "td" ),
            cells_quantity = cells.size(),
            cells_per_row = cells_quantity / rows_quantity,
            tr;

        tr =  createRow ( cells_per_row, "First Row" );  //create new row
        $( rows[ 0 ] ).before( tr );  //adds the row in table
    };


    this.addRowLast = function() {
        var rows = $( "tr" ),
            rows_quantity = rows.size(),
            cells = $( "td" ),
            cells_quantity = cells.size(),
            cells_per_row = cells_quantity / rows_quantity,
            tr;

        tr = createRow ( cells_per_row, "Last Row" ); //create new row
        $( rows[ rows_quantity - 1 ] ).after( tr ); //adds the row in table
    };


    this.addRowCenter = function() {
        var rows = $( "tr" ).toArray(),
            rows_quantity = rows.length,
            cells = $( "td" ),
            cells_quantity = cells.size(),
            cells_per_row = cells_quantity / rows_quantity,
            center = ( Math.floor ( ( rows_quantity  / 2 ) ) - 1 ), //index of center element
            new_tr;

        new_tr = createRow ( cells_per_row, "Center Row" ); //create row
        $( rows[ center ] ).after( new_tr ); //insert the row in center

    };


    this.removeRowFirst = function () {
        var rows = $( "tr" ).toArray(); //array of rows

        if ( isLastRow() ) {    //don't remove if last row
            return;
        }

        $( rows[ 0 ] ).remove();
    };


    this.removeRowLast = function () {
        var rows = $( "tr" ).toArray(), //array of rows
            length = $( rows ).size();

        if ( isLastRow() ) {  //don't remove if last row
            return;
        }

        $( rows[ length - 1 ] ).remove();
    };


    this.removeRowCenter = function () {
        var rows = $( "tr" ).toArray(), //array of rows
            length = $( rows ).size(),
            center = Math.floor( ( (length / 2 ) ) );

        if ( isLastRow() ) {   //don't remove if last row
            return;
        }

        $( rows[ center ] ).remove();
    };

    return this;
}

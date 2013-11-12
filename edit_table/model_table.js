"use strict";

function Model_table() {

    function newTd( value ) { // create new td element
        var td;

        td = document.createElement( "td" );
        td.innerHTML = value;

        return td;
    }

    function newRow ( td_qty, value ) { //create new row
        var tr = document.createElement ( "tr" );

        while ( td_qty -- ) {
        $( tr ).append( newTd( value ) );
        }

        return tr;
    }

    function getCenterTd ( child, index ) {  //return center cell
        var i ;
        for ( i = 0; i <= index; i++ ) {
            child = child.nextSibling;
        }
        return child;
    }


    this.addCellFirst = function() {
        var rows = $( "tr" ), //object of rows
            i = 0;

        while( rows[ i ] ){ //until the row is exists
            $( rows[ i ] ).prepend( newTd( "first Cell" ) ); // add new td in every row
            i++;
        }
    };

    this.addCellLast = function() {
        var rows =  $( "tr" ),    //object of rows
            i = 0;

        while( rows[ i ] ){    //until the row is exists
            $( rows[ i ] ).append( newTd( "last Cell" ) ); // add new td in every row
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
            $( child ).after( newTd( "center Cell" ) );
            i ++;
        }

    };


    this.removeCellFirst = function() {
        var rows = $( "tr" ), //object of rows
            i = 0;

        while( rows[ i ] ){ //until the row is exists
            $( rows[ i ].firstChild ).remove(); // add new td in every row
            i ++;
        }
    };


    this.removeCellLast = function() {
        var rows = $( "tr" ), //object of rows
            i = 0;

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
//        console.log("rows_quantity= "+ rows_quantity + "center cell index= " + center);

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
        tr =  newRow ( cells_per_row, "First Row" );  //create new row
        $( rows[ 0 ] ).before( tr );  //adds the row in table
    };


    this.addRowLast = function() {
        var rows = $( "tr" ),
            rows_quantity = rows.size(),
            cells = $( "td" ),
            cells_quantity = cells.size(),
            cells_per_row = cells_quantity / rows_quantity,
            tr;
        tr = newRow ( cells_per_row, "Last Row" ); //create new row
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

        new_tr = newRow ( cells_per_row, "Center Row" ); //create row
        $( rows[ center ] ).after( new_tr ); //insert the row in center

    };


    this.removeRowFirst = function () {
        var rows = $( "tr" ).toArray(); //array of rows

        $( rows[ 0 ] ).remove();
    };


    this.removeRowLast = function () {
        var rows = $( "tr" ).toArray(), //array of rows
            length = $( rows ).size();

        $( rows[ length - 1 ] ).remove();
    };


    this.removeRowCenter = function () {
        var rows = $( "tr" ).toArray(), //array of rows
            length = $( rows ).size(),
            center = Math.floor( ( (length / 2 ) ) );

        $( rows[ center ] ).remove();

    };

    return this;
}

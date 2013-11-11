"use strict";

function Model_table() {

    function newTd( value ) { // create new td element
        var td;
        td = document.createElement("td");
        td.innerHTML = value;
        return td;
    }

    function getCenterTd (child, index) {
        for (var i=0; i<=index; i++) {
            child = child.nextSibling;
        }
        return child;
    }


    this.addCellFirst = function() {
        var rows = $("tr"), //object of rows
            i=0;

        while(rows[i]){        //until the row is exists
            $(rows[i]).prepend( newTd( "first R+" ) );      // add new td in every row
            i++;
        }
    };

    this.addCellLast = function() {
        var rows =  $("tr"),    //object of rows
            i=0;

        while(rows[i]){    //until the row is exists
            $(rows[i]).append( newTd( "last R+" ) );    // add new td in every row
            i++;

        }
    };


    this.addCellCenter = function() {

        var rows = $( "tr").toArray(),
            rows_quantity = rows.length,
            cells = $( "td"),
            cells_quantity = cells.size(),
            center = (Math.floor ( ( cells_quantity / rows_quantity ) / 2 ))-1,     //index of center element
            first_td,
            i = 0,
            child;
        console.log("rows_quantity= "+ rows_quantity + "center cell index= " + center);

        while( rows[i] ) {
            first_td = rows[i].firstChild;
            child = getCenterTd (first_td, center);
            $(child).after( newTd("center R+"));
            i++;
        }

    };

    this.removeCellFirst = function() {
        var rows = $("tr"), //object of rows
            i=0;

        while(rows[i]){        //until the row is exists
            $(rows[i].firstChild).remove();      // add new td in every row
            i++;
        }
    };

    this.removeCellLast = function() {
        var rows = $("tr"), //object of rows
            i=0;

        while(rows[i]){        //until the row is exists
            $(rows[i].lastChild).remove();      // add new td in every row
            i++;
        }
    };


    this.removeCellCenter = function() {

        var rows = $( "tr").toArray(),
            rows_quantity = rows.length,
            cells = $( "td"),
            cells_quantity = cells.size(),
            center = (Math.floor ( ( cells_quantity / rows_quantity ) / 2 )),     //index of center element
            first_td,
            i = 0,
            child;
        console.log("rows_quantity= "+ rows_quantity + "center cell index= " + center);

        while( rows[i] ) {
            first_td = rows[i].firstChild;
            child = getCenterTd (first_td, center);
            $(child).remove();
            i++;
        }

    };




    return this;
}

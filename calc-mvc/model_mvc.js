"use strict";

function Calculator () {

    this.plus = function (oper1,oper2) {
        return oper1+oper2;
    };

    this.minus = function (oper1,oper2) {
        return oper1-oper2;
    };

    this.multiply = function (oper1,oper2) {
        return oper1*oper2;
    };

    this.division = function (oper1,oper2) {
        if(oper2 == 0) {
            return "Error division by zero" ;
        }else {
            return oper1/oper2;
        }
    };
    return this;
}
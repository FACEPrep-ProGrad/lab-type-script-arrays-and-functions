"use strict";
exports.__esModule = true;
exports.ArrayComponent = void 0;
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    ArrayComponent.prototype.arrayMultiply = function (myArray) {
        console.log("HEllo");
    };
    ArrayComponent.prototype.arraySeparate = function (myArray) {
    };
    ArrayComponent.prototype.arraySplit = function (str) {
    };
    ArrayComponent.prototype.arraySort = function (myArray) {
    };
    ArrayComponent.prototype.arrayReplace = function (myArray) {
    };
    return ArrayComponent;
}());
exports.ArrayComponent = ArrayComponent;
var myArray = [34, 45, 60, 23, 13, 25, 70];
var array = new ArrayComponent();
console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));

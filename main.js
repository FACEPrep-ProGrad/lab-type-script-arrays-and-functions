"use strict";
exports.__esModule = true;
exports.ArrayComponent = void 0;
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    ArrayComponent.prototype.arraySeparate = function (myArray) {
        var strArr = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (typeof myArray[i] === "string") {
                strArr[j++] = myArray[i];
            }
        }
        return strArr;
    };
    //method is used to find the prime number in the mixed array. First identify the   numbers in the array, typecast it and then check whether the number is a prime number or not.
    ArrayComponent.prototype.arraySplit = function (myString) {
        var numInput = myString.split(" ");
        var primeNum = [];
        var k = 0;
        for (var i = 0; i < numInput.length; i++) {
            var y = +numInput[i];
            var prime = 0;
            if (y != 1) {
                for (var i_1 = 2; i_1 <= Math.sqrt(y); i_1++) {
                    if (y % i_1 == 0) {
                        prime++;
                    }
                }
                if (prime == 0) {
                    primeNum[k++] = y;
                }
            }
        }
        return primeNum;
    };
    // method is used to sort the given array of strings.
    ArrayComponent.prototype.arraySort = function (myArray) {
        return myArray.sort();
    };
    // method is to used to find the numbers which are divisible by 3 and replace it with 5.    
    ArrayComponent.prototype.arrayReplace = function (myArray) {
        var temp = [];
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 == 0) {
                temp[i] = 5;
            }
            else {
                temp[i] = myArray[i];
            }
        }
        return temp;
    };
    //method is used to find the multiples of 5 and 10 in the given array.
    ArrayComponent.prototype.arrayFindMultiples = function (myArray) {
        var temp = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
                temp[j] = myArray[i];
                j++;
            }
        }
        return temp;
    };
    return ArrayComponent;
}());
exports.ArrayComponent = ArrayComponent;
var myArray = [34, 45, 60, 23, 13, 25, 70];
var strArray = ["cat", "bat", "zoo", "apple", "5", "7"];
var str = "1 50 5 9 2";
var array = new ArrayComponent();
console.log("find multiples: " + array.arrayFindMultiples(myArray));
console.log("separate: " + array.arraySeparate(strArray));
console.log("sort: " + array.arraySort(strArray));
console.log("replace: " + array.arrayReplace(myArray));
console.log("split: " + array.arraySplit(str));

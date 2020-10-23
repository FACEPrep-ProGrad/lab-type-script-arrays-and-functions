import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {

    constructor() {}
    arraySeparate(myArray: any): string[] {
        let strArr = [],j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (typeof myArray[i] === "string") {
                strArr[j++] = myArray[i];
            }
        }
        return strArr;
    }
    //method is used to find the prime number in the mixed array. First identify the   numbers in the array, typecast it and then check whether the number is a prime number or not.
    arraySplit(myString: string): number[] {
        let numInput = myString.split(" ");
        let primeNum = [];
        let k: number = 0;
        for (let i = 0; i < numInput.length; i++){
            var y: number = +numInput[i];
            var prime: number = 0;
            if (y != 1) {
                for (let i = 2; i <= Math.sqrt(y); i++) {
                
                    if (y % i == 0) {
                        prime++;
                    }
                }
    
                if (prime == 0) {
                    primeNum[k++] = y;
                }  
            }
            
        }

        return primeNum;
        
    }

    // method is used to sort the given array of strings.
    arraySort(myArray: any): string[] {
        return myArray.sort();
    }

    // method is to used to find the numbers which are divisible by 3 and replace it with 5.    
    arrayReplace(myArray: any): Array<Number> {
        let temp = [];
        for (let i = 0; i < myArray.length; i++){
            if (myArray[i] % 3 == 0) {
                temp[i] = 5;
            } else {
                temp[i] = myArray[i];
            }
        }

        return temp;
    }

    //method is used to find the multiples of 5 and 10 in the given array.
    arrayFindMultiples(myArray: any): Array<Number> {
        let temp = [],
            j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
                temp[j] = myArray[i];
                j++;
            }
        }
        return temp;
    }    
}

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let strArray: string[] = ["cat", "bat", "zoo", "apple", "5", "7"];
let str: string = "1 50 5 9 2"
let array = new ArrayComponent();

console.log("find multiples: " +array.arrayFindMultiples(myArray));
console.log("separate: " +array.arraySeparate(strArray));
console.log("sort: " +array.arraySort(strArray));
console.log("replace: " +array.arrayReplace(myArray));
console.log("split: " +array.arraySplit(str));




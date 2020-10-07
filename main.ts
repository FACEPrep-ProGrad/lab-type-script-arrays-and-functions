import { ArrayService } from "./app-service";
class ArrayComponent implements ArrayService {
  constructor() {}

  //this array method to find values multiply by 5 and 10;
  public arrayFindMultiples(myArray: number[]): Array<Number> {
    var numbers = [];
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 5 == 0 && myArray[i] % 10 == 0) {
        numbers.push(myArray[i]);
      }
    }
    return numbers;
  }

  //to find the string values from the array;
  public arraySeparate(myArray: any): Array<string> {
    var strings = [];
    for (var i = 0; i < myArray.length; i++) {
      if (typeof myArray[i] === "string") {
        strings.push(myArray[i]);
      }
    }
    return strings;
  }

  //to find the prime numbers from mixed array
  public arraySplit(str: string): Array<number> {
    var num = str.split(",");
    var primes = [];
    for (var i = 0; i < num.length; i++) {
      if (typeof num[i] === "number") {
        var num1 = parseInt(num[i]);
        var flag = false;
        for (var i = 2; i <= num1 / 2; ++i) {
          if (num1 % i == 0) {
            flag = true;
            break;
          }
        }
        if (!flag) primes.push(num[i]);
      }
    }
    return primes;
  }

  //to sort the array
  public arraySort(myArray: any): Array<string> {
    myArray.sort();
    return myArray;
  }

  //to replace divisible by 3 wiwth 5;
  public arrayReplace(myArray: any): Array<number> {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 3 === 0) {
        myArray[i] = 5;
      }
    }
    return myArray;
  }
}

var myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
var array = new ArrayComponent();

console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));

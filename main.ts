import { ArrayService } from "./app-service";
class ArrayComponent implements ArrayService {

    constructor() {}

    //this array method
    public arrayFindMultiples(myArray: number[]): Array<Number>{
    }

    public arraySeparate(myArray: any) : Array<string>{
        
    }

    public arraySplit(str:string) : Array<number>{

    }

    public arraySort(myArray:any):Array<string>{
      
    }

    public arrayReplace(myArray:any):Array<number>{
       
}

var myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
var array = new ArrayComponent();

console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));




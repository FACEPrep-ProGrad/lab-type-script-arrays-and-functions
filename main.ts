import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {

    constructor() {}

    public arrayMultiply(myArray: number[]) : Array<Number> {
        console.log("HEllo");
    }

    public arraySeparate(myArray: any) : Array<string>{
        
    }

    public arraySplit(str:string) : Array<number>{

    }

    public arraySort(myArray:any):Array<string>{
      
    }

    public arrayReplace(myArray:any):Array<number>{
       
}

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let array = new ArrayComponent();

console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));




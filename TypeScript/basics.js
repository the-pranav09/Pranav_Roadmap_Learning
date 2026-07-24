"use strict";
// TypeScript is static type mostly.
// let a:string = "golu";
// let num:number = 45;
// console.log(a,num)
// let val:any = 7 // dont use 'any' data_type -'any' is data_type kon sa bhi type ka data de sakte ho.
// Data_type Declaration.
// let a:string = "golu";
// let num:number;
// num = 45
// let c: number | string;
// c = "Hit-Man"
// console.log(c)
// Array-------------------------------------------------------------------------------------------------------- //
// we can define type of array.(konse type ka array hai).
// let arr:number[] = [1,2,3,4,5]; // number ka array hai.
// let arr2:string[] = ["Raj", "Prem", "Goly", "Yash"] // string ka array hai.
// Tuple-------------------------------------------------------------------------------------------------------- //
// Tuple is array with fixed size with specific type.
// let arr:[string, number, boolean] = ["Golya",4, true] //size bhi fix and uss ke andar vale konsi location pe kay aayega vo bhi fixed hai.
// Enum-------------------------------------------------------------------------------------------------------- //
// Enum is thoda similar like 'object' that assign the readable name to values.
// enum Role {
//     ADMIN="admin",
//     GUEST="guest",
//     RANDOM="random",
// }
// console.log(Role.ADMIN)
// 'Type Inference'-------------------------------------------------------------------------------------------------------- //
// 'Inference' jab variable ko pata hai value kis type ki hai.
// Type_Script knows the variable type automatically.
// let a = 45
// let b = "HIT-MAN"
// 'Type Annotation'-------------------------------------------------------------------------------------------------------- //
// 'Annotation' declaring the data_type to variable.(For Better Clarity).
// let a:string = "Ro-Hit" // adding the data_type.
// let no:number = 45
// 'Function & Return Type'-------------------------------------------------------------------------------------------------------- //
// we can also declare the 'parameters type' and 'return value type'.
// function abc(a:number, b:number): number{ // function ko batana padta hai ki konsi type ki value return ho rahi hai.
//     return a+b;
// }
// console.log(abc(25, 20))
// 'void' use when jab function not returning vlaue. jab koi value return nahi hoti tab 'void' use karo.
// function welcome():void{ // 'void' show like undefine.
//     console.log("Hit-Man");
// } 
// welcome()
// we can also set default parameter value.
let abc = (a, b = "Hey") => {
    return a + b;
};
console.log(abc(45)); // here we pass only value of 'a' and value of 'b' is empty then they use default value.(45Hey)

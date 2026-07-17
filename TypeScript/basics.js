"use strict";
// TypeScript is static type mostly.
// let a:string = "golu";
// let num:number = 45;
// console.log(a,num)
// let val:any = 7 // dont use 'any' data_type -'any' is data_type kon sa bhi type ka data de sakte ho.
// Data_type Declaration.
let a = "golu";
let num;
num = 45;
let c;
c = "Hit-Man";
console.log(c, c);
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

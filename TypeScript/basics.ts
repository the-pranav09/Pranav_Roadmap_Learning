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
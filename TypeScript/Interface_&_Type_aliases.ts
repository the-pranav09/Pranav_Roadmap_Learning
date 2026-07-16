// // 'interface' hold data type ki object ki andar ki value kis type ki hogi.
// define the object structure.
// interface user { // 'interface_user' hold data types of object.
//     uname:string,
//     email:string,
//     password:string,
//     contact_no:number,
//     gender?:string
// }
// function abcd (obj: user){ // here 'object' use the interface of 'user' means ki "user jaisa type chahiye object ka" 
//     console.log(obj.email)
// }

// abcd({uname:"polu", email:"spkiller7666@gmail.com", password:"lolpoli",contact_no:7666788177})


// 'extending interface' extending interface hold the interface data type and also hold new data _type of object.

// interface User { //'interface_User' hold data types of object.
//     u_name:string;
//     email:string;
//     password:string;
//     gender?:string;
// }
// // 'extends' also hold extending object data_type.(extend khudka bhi and jo usne dusra extend kiya vo bhi data_type hold krta hai.)
// interface Admin extends User { //'interface Admin' hold data_type of object and 'extends' add 'User' data_type in Admin.
//     address:string;
//     contant_no:number;
//     age:number;
// }

// function pro(obj:Admin){
//     console.log(obj.age)
//     console.log(obj.u_name)
// }

// pro({u_name:"Polu", email:"lolpolu@gmail.com", password:"private", address:"antarwali", contant_no:9022204554, age:23})


// ------------------------------------------------------------------------------------------------------------------------------------ //
// "Type Aliases" create the custome name for data_type.

// type digit = number; // here we create the 'digit' type for hold 'numbers'(digit ab ek data_type hai jo ki numbers hold karega).
// let a:digit;
// a=24
// console.log(typeof(a)) // typeof() - show the data_type.

// // we can use this 'type_aliases' during giving multiple type of data on one variable.
// type mixed = number | string | boolean; // we create the 'mixed' data_type that hold the 3 types of value.
// let b = "hold_string"
// // let b = 23
// // let b= true
// console.log(typeof(b))


// "Union" 
// let a: string | number; // that '|' pipe sign is union.(is like 'OR').


// ------------------------------------------------------------------------------------------------------------------------------------ //
// 'Intersection Types' matlab sabhi types ka data avilable hona chahiye.(is like '&&')

// type Employee = { name: string; role: string };
// type Manager = { name: string; department: string };
// type TeamLead = Employee & Manager; // Must have properties of both.(jab hum 'TeamLead' use karunga tab dono type ka data avilable hona chahiye).

// type user = {
//     u_name:string,
//     email:string,
// }

// type admin = user & { // hold the 'user' type and 'admin' type.(need both are present).
//     age:number;
//     address:string;
// }

// function test(obj:admin){ //
//     console.log(obj.u_name)
//     console.log(obj.address)
// }
// test({u_name:"Polu", email:"lolpolu@gmail.com", age:23, address:"nalewadi"})


// // create reusable function for different data_type.
// function identity<T>(value: T): T {
//     return value;
// }
// let result = identity<string>("dalle"); // '<string>' we can change the type.(it's depend on data).
// console.log(result)
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
const prompt = require("prompt-sync")();


// readline.question("Enter Your Age :- ", (age) => {
//     console.log("age is", age);

    

// });

// let a = 10
// while(a>0){
//     console.log("yes true" ,a)    
//     a--
// }

// for(var a = 5; a>0; a--){
//     console.log("hello");
// }


// for(let i = 1; i<101; i++){
//     console.log(i)
//     if(i === 42){
//         break;
//     }
// }

// for(let j = 1; j<101; j++){
//     if(j === 50){ // skip the 50 number and jum on 51.
//         continue;
//     }

//     console.log(j)
// }


// let i=10
// while(i>=1){
//     console.log(i)
//     i--
// }

//even
// for(let i = 1; i<=20; i++){
//     if(i%2==0){
//         console.log("even",i)
//     }
// }

// odd
// let i=1
// while(i<=15){
//     if(i%2===1){
//         console.log('odd',i)
//     } i++
// }

// // multiply
// for(let i=1; i<=10; i++){
//     console.log(5*i)
// }

// // sum of number 1 to 100
// let add = 0
// for(let i = 1; i<=100; i++){
//     add= add+i
// }console.log(add)

// // print number divisible by 3 (1 to 50).
// for(let i = 1; i<=50; i++){
//     if(i%3===0){
//         console.log(i)
//     }
// }

// // even odd between user entered number.
// let num = prompt("Enter your number: ");
// for(let i = 1; i<=num; i++){
//     if(i%2===0){
//         console.log(i,"is even")
//     }
//     else{
//         console.log(i,"is odd")        
//     }
// }

// for(let i = 1; i<=100; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i,'divisible by 3 and 5')
//     }
// }

// // stop when number divide by 7. using break.
// for(let i = 1; i<=100; i++){
//     console.log(i)
//     if(i%7===0){
//         break;
//     }
// }

// // skip number that divisible by 3. using continue.
// for(let i = 1; i<=20; i++){
//     if(i%3===0) continue;
//     console.log(i)
// }

// // print first 5 odd numbers from 1 to 100.
// let count = 0
// for(let i = 1; i<=100; i++){
//     if(i%2===1){
//         console.log(i)
//         count++
//     }

//     if(count===5) break;
// }


// math.floor dont consider the decimal value.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


// readline.question("Enter Your Age :- ", (age) => {
//     console.log("age is", age);

//     if(age<18){
//         console.log("you can not drive the car")
//     }
//     else{
//         console.log("you can drive the car")
//     }

// });

// let a = 10

// '==' comparision operator check values insted of datatype.
// '===' 3 equal to operator check values and datatype both.
// '!=' same as '=='
// '!==' same as '==='

// if(a==b){
//     console.log("Correct")
// }
// else{
//     console.log("Wrong")
// }


// let c = 0 // 0 is false value.

// if(c){
//     console.log("true")
// }
// else{
//     console.log("false")
    
// }


function grade(score){ 

    if(score >= 90 && score <= 100) return "A+" // Use Early Return. 
    else if(score >= 80 && score <= 89) return "A" 
    else if(score >= 70 && score <= 79) return "B" 
    else if(score >= 60 && score <= 69) return "C" 
    else if(score >= 33 && score <= 55) return "D"
    else if(score >= 33 && score <= 55) return "D" 
    else return "Fail";
 
}

console.log(grade(75))


function RPS(user, computer){

  if(user === 'Rock' && computer === 'Scissor') return "User Win";
  if(user === 'Scissor' && computer === 'Paper') return "User Win";
  if(user === 'Paper' && computer === 'Rock') return "User Win";

  else return "Computer Win"

}

console.log(RPS("Rock", "Paper"))
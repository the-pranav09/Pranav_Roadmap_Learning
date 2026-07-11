// let boot = function() {
//     console.log("Done")

//     return 20+10;
// }

// function math(a,b) {
//     console.log("Done")
//     console.log(a+b)
// }

// let fat = ()=>{
//     console.log("Fat arrow function")

//     return 20+10;
// }


// let a = boot();
// console.log(a);
// math(20,40);
// fat();



// function evo(){} // function declaration & Satetment.

// let fox = function(){} //function Expression. (Function Expression means save the function in variable).

// let fat = () => {} // Fat Arrow Function. (Fat Arrow function also save in variable).


// function ant(v1=0,v2=0){} // set default parameter and we can send arrgument then default are chnage.
// ant(); // without arrgument we run function then they provide 'Default' Value.


//rest parameter. we use 'rest' when we have multiple value'arrgument' then we create the "Rest parameter" insted creating multiple parameter.
// that rest parameter store the all arrgument in array.(create the array of paased arrgument).
// (...name) --> that dot are "Rest".
// function tag(...v1){
//     console.log(v1)
// }

// tag(1,2,3,4,5,6);

// function TAG(a, b, ...v1){
//     console.log(a, b, v1)
// }

// TAG(1,2,3,4,5,6);


// return value.
// function val(v1){
//     return 10 + v1;
// }

// let vof = val(12)
// console.log(vof);

// First class function.
// function vox(value){
//     value(); // run the function.
// }

// vox(function(){
//     console.log("function use as value like (variable and its value).")
//     console.log("function call inside function.")
// })


// High Order Function.
// HOF is wo function hota hai jo "Function return kare Ya fir accept kare function ko as parameter main".

// function hof(){
//     return function(){ // return the function.
//         console.log("Function return the function.")
//     }
// }
// hof()(); // need to call function dual time for call inside function.

// // Accepting the function parameter.
// function HOF(fnc_accept){ // accept the function is a parameter
//     fnc_accept();
// }
// HOF(function(){
//     console.log("Passing the function in parameter and accept it.")
// });


// Hoisting.
// console.log(multiply(2, 12))

// function multiply(a, b){
//     return a*b;
// }

// addition using rest funation method.
// function score(...v1){
//     let add = 0
//     v1.forEach(function(val){
//         add = add + val
//     })
//     return add
// }

// console.log(score(10,20,30,40,50))



// // Early return.
// function checkAge(age){
//     if(age<18) return "Too Young"
//     else return "Allowed"
// }

// console.log(checkAge(20));


// Pass function into another function and execute it inside.
// function oox(val){
//     val();
// }

// oox(function(){
//     console.log("HAaa HEeee HOoooo")
// })


// closures.
// function outer(){
//     let count = 0;
//     return function(){
//         count++
//         console.log(count)
//     }
// }

// const counter = outer()
// counter()
// counter()



// IIFE.
// (function iife(){
//     console.log("that is IIFE.")
// })();


// BMI Calculator.
// function bmi(weight, height){
//     return weight/(height*height);
// }

// console.log(bmi(49, 2.5) .toFixed(2))


// reusable discount calculator.
// function discountCal(discount){
    
//     return function(price){
//         return price -price * (discount/100);

//     }
// }
// let ten = discountCal(10);
// console.log(ten(1200))

// let twenty = discountCal(20);
// console.log(twenty(1500))

// let fifty = discountCal(50);
// console.log(fifty(12000))


// function counter(){
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     }
// }

// let cou = counter(); // c is ifferenat count
// console.log(cou())
// console.log(cou())

// let d = counter(); // d  is differenat count.
// console.log(d())
// console.log(d())



// (function(){
//     let password="My PassWord"
//     console.log(password, "only show inside function.");
// })();

// console.log(password, "They can not show the value. becouse iife is create privete variable.");
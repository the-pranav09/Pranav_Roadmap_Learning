// let arr = [55, 88, 66, 22, 99]

// arr[2] = 12 // Update array value.

// arr.push(6) // add value at last position.
// console.log(arr)

// arr.unshift(0) // add the value at starting.
// console.log(arr)

// arr.pop() // remove the last value.
// console.log(arr)

// arr.shift() // remove the starting value.
// console.log(arr)

// arr.splice(2,2) // remove the element by entering index.(starting index from remove element, and how many element want remove).
// console.log(arr)

// let new_ar = arr.slice(0,2) // remove the element by entering index. "but create new array dont change the main array." (starting index from remove element, and how many element want remove).
// console.log(new_ar)

// arr.reverse() // reverse the array element.(last value at 1st position).
// console.log(arr)

// 'sort()' use this method for numbers.
// arr.sort(function(a,b){ 
//     return a-b; // sort in ascending order.
//     // return b-a; // sort in descending order.
// })
// console.log(arr)

// 'sort' use this methos on string only (not on number becouse the conver number into string).
// let names = ["Raj", "Prem", "Yash", "Abhishek"]

// names.sort() // ascending order.
// console.log(names)


// * forEach accept function and that function gives you value "one-by-one".
// forEach accept value one-by-one.
// 'forEach' main return nahi hota.

// arr.forEach(function(ele) { // 
//     console.log(ele + 5) // add the 5 in each element.
// })


// map accept function and that function return the value for each element "one-by-one".
// map use when you create new array on the basis of old array data.(purane array ke data ke basis pr naya array banana hai to map use krna hai).
// map array store the all data in new array.

// let new_arr = arr.map(function(ele){
//     // return "return the value for each element" 
//     if (ele>50) return ele;
// })
// console.log(new_arr)


// 'filter' accept function and that function return true and false.
// 'filter' also create new array.

// let new_arr = arr.filter(function(ele){ // if 'ture' then array element add in new array and if 'false' new array main nahi add hogi value.
    
//     if(ele>4) return true; // create the new array with element that satisfy the condition.
// })
// console.log(new_arr)


// 'reduce' use to reduce all array value in single value.(sare array ke element se ek value create karna).

// let new_arr = arr.reduce(function(accumulator,ele){
//     return accumulator + ele; 
// },0) // set accumulator value like we set '0'. accumulator remind its vlaue.
// console.log(new_arr)


// 'find' use the find the element in array and object.
// let new_arr = arr.find(function(ele){
//     return ele === 3;
// })
// console.log(new_arr)

// 'some' are use to check the vlaue.
// 'some' return the true & false.

// let new_arr = arr.some(function(ele){ // check the some element satisfy the condition if satisfy the return 'true' else return 'fasle'.
//     return ele>80 
// })
// console.log(new_arr)


// Destructuring. 
// tha use for array koi value jab hum kisi variable main store krna chahte hai to.
// let arrr = [1, 2, 3, 4, 5]
// let [a,b] = arrr // 'a' & 'b' are variable. a=index_1, b=index_2 .....continue.
// let [,,,c] = arrr 
// console.log(a,b,c)

// 'sprade' use to copy array.
// let arr2 = [...arr] // create new array use this [...arr] sprade operate to copy array value.
// console.log(arr2)




// practice-------------------------------------------------------------------------------------------------------------------
// let fruit = ["Banana","Apple","Mango"]
// console.log(fruit[1])

// fruit.push("Pineapple")
// fruit.unshift("kiwi")
// console.log(fruit)
// fruit.pop()
// fruit.push("Guava")
// console.log(fruit)

// let num = [1, 2, 3, 4]
// num.pop()
// console.log(num)

// add the 'Red' & 'Blue' at index 1st.
// splice also add the value [starting, number of element remove, add element].
// let color = ["Green", "Yellow"]
// color.splice(1, 0, "Red", "Blue")
// console.log(color)


// Extract the middle 3 element from array.
// let item = [1, 2, 3, 4, 5, 6]
// let new_arr = item.slice(1, 4);
// console.log(new_arr)   

// sort the array in alphabetical order and reverse order.

// let names = ["Raj", "Prem", "Yash", "Abhishek"]

// names.sort() // ascending order.
// console.log(names)
// names.sort().reverse() // descending order.
// console.log(names)

// use 'map()' to find square of each number
// let num = [1, 2, 3, 4]
// let square = num.map(function(ele){
//     return ele * ele
// })
// console.log(square)

// use 'filter()' to keep numbers greater than 10;
// let arr = [5, 12, 8, 20, 3];

// let new_arr = arr.filter((ele) => {
//     return ele > 10;
// })
// console.log(new_arr)

// use 'reduce()' to find sum of this array.
// let arr = [10, 20, 30, 40]
// let new_arr = arr.reduce((accumulator,ele) => {
//     return accumulator + ele
// },0);
// console.log(new_arr)

// use 'find()' to get the first number less than 10;
// let arr = [12, 15, 3, 8, 20]
// let new_arr = arr.find((ele) => {
//     return ele<10
// })
// console.log(new_arr)

// use 'some()' to check if any student mark has below 35.
// let arr = [45, 60, 28, 90]
// let new_arr = arr.some(function(ele){
//     return ele<35
// })
// console.log(new_arr)

// use 'every()' to check all number are even.
// let arr = [2, 4, 6, 8, 10]
// let new_arr = arr.every(function(ele){
//     return ele%2===0;
// })
// console.log(new_arr)

// destructure the array to get firstNmae and lastName.
// let names = ["Abhi", "Raj"]
// let [a,b] = names
// console.log(a)
// console.log(b)

// Merge two arras using spread operator.
// let a = [1, 2]
// let b = [3, 4]
// let new1 = [...a, ...b]
// console.log(new1)

// add 'india' to the  start of this array using spread.
// let countries = ["USA", "UK"]
// countries = ["INDIA" , ...countries]
// console.log(countries)

// clone this array properly. (don't copy referance).
let arr = [1, 2, 3]
let arr2 = [...arr]
console.log(arr2)
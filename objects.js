// let ob1 = {
//     Game:"Uncharted",
//     Price:10000,
//     Graphics: "Highend"
// } 
// console.log(ob1)
// console.log(ob1.Game)
// console.log(ob1['Graphics'])


// Nesting object and deep access.
// const user = {
//     name: "Raj",
//     Address: {
//         city: "pune",
//         pincode: 431205,
//         location: {
//             lat: 25.23,
//             lng: 77.24,
//         },
//     },
// };

// console.log(user.Address.location.lng) // access the 'lng'. 

// // Destructuring.
// let {lat,lng} = user.Address.location // location ke ander ke values ko variable me bana deta hai.
// console.log(lat, lng)

// loop on objects -----------------------------------------------------------------------------------.
// let ob1 = {
//     Game:"Uncharted",
//     Price:10000,
//     Graphics: "Highend",
//     Requirment:{
//         chip:"Ryzen",
//         Gcard: 4050
//     }
// } 

// for(let key in ob1){ // object ki har ek value one-by-one kr ke 'key' main aayegi.
//      console.log(key) // only show the 'key'.
//      console.log([key]) // only show the 'value'.
//      console.log(key, [key]) // show the both "Key: value"
//     }

// console.log(Object.keys(ob1)) // that add the all 'keys' in array.(use when you need to create the array of all 'keys').

// create the proper copy of object using spread operator. (but not copy the nested object, copy krta hai but as reffernace exact copy nahi banata).
// let obj2 = {...ob1}
// console.log(obj2)

// create the proper copy of object using "Object.assign".
// let obj2 = Object.assign({}, ob1)
// console.log(obj2)

// let obj2 = Object.assign({Best_player:"Pranav"}, ob1) // we can also add the new pair in object. 
// console.log(obj2)



"use strict";
// 'class' ek blueprint hai.
// uss blueprint se hum multiple object bana sakte hai.
// har ek object ke paas apni ek properties(data) hoti hai.
// also known as 'class constructor'.
class PS_5 {
    Game;
    Game_Type;
    Price;
    // 'constructor' ek special function hai jo object banate time chalta hai. 
    // and properties ko initialize krta hai.(properties ko data deta hai).
    // constructor object bane ke baad immediately run hota hai.
    constructor(Game, Game_Type, Price) {
        this.Game = Game;
        this.Game_Type = Game_Type;
        this.Price = Price;
    }
}
// 'G1' is object hai jo "PS_5" ke class se banaya gaya hai.
// and object ke andar data store kiya hai.
let G1 = new PS_5("Uncharted", "Action_Adventure", 9999);
console.log(G1);
let G2 = new PS_5("Last of Us", "Action", 5999); // multiple object.
console.log(G2);
let G3 = new PS_5("Wolverine", "Action", 7999);
console.log(G3);
// class Music{
//     constructor(public name:string, public artist:string, public thumbnail:string, public length:number, public free:boolean){}
// }
// let audio_1 = new Music("Why This Kolaveri Di", "Anirudha Ravichandran", "Anirudha-Dhanush", 4, true)
// console.log(audio_1)
// let audio_2 = new Music("Nee Singam Dhan", "Sid Sriram and Vivek", "", 4.7, false)
// console.log(audio_2)

"use strict";
// 'Constructor'
class Music {
    name;
    artist;
    thumbnail;
    length;
    free;
    constructor(name, artist, thumbnail, length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
    }
}
let audio_1 = new Music("Why This Kolaveri Di", "Anirudha Ravichandran", "Anirudha-Dhanush", 4, true);
console.log(audio_1);
let audio_2 = new Music("Nee Singam Dhan", "Sid Sriram and Vivek", "", 4.7, false);
console.log(audio_2);
class PS_5 {
    Game;
    Game_Type;
    Price;
    constructor(Game, Game_Type, Price) {
        this.Game = Game;
        this.Game_Type = Game_Type;
        this.Price = Price;
    }
}
let G1 = new PS_5("Uncharted", "Action_Adventure", 9999);
console.log(G1);
let G2 = new PS_5("Last of Us", "Action", 5999);
console.log(G2);

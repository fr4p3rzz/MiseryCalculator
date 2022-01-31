/** Function for string shuffling */
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

/** Some random numbers */
let rand0 = getRandom(0, 99);
let rand1 = getRandom(0, 99);
let rand2 = getRandom(0, 99);
let rand3 = getRandom(0, 99);
let rand4 = getRandom(0, 99);
let bingoString = "Lucky numbers are: " + rand0 + " " + rand1 + " " + rand2 + " " + rand3 + " " + rand4 + "."

let quotes = [
    "The average is so mediocre.",
    "Why are you here, craving unhappiness?",
    bingoString,
    "This will not improve your day.",
    "You should work right now.",
    "You should study right now.",
    "This was really a bad idea.",
    "Economy sucks.",
    "Don't think too much about that.",
    "Remember to drink water.",
    "At least you have some free time",
    "Never too late to shine",
    "Reality is disappointing",
    "Sure, skip this ad",
    "Money is your god, and you are a failure [cit.]",
    "You can live happily anyway",
    "We are all slaves"
];

/** more rare quotes */
let seed = getRandom(-9999, 9999)
var quote = "";

/** Output a random quote */ 
if(seed == 9999)
{
    quote = "Game Freak doens't know programming";
}
else if(bingoString.includes(seed))
{
    quote = bingoString + " Lucky! :D"
}
else if((((seed + 1234) / 7) + 1) % 2 == 0 && seed < 0)
{
    quote = quotes[getRandom(0, quotes.length - 1)].shuffle();
}
else
{
    quote = quotes[getRandom(0, quotes.length - 1)];
}

document.querySelector("#welcome-quote").innerText = quote;

/** Function for random value */
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min);
  }


/** Function for string shuffling */
String.prototype.shuffle = function () {
    let letterArray = this.split(""),
        n = letterArray.length;

    for(let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = letterArray[i];
        letterArray[i] = letterArray[j];
        letterArray[j] = tmp;
    }
    return letterArray.join("");
}

/** Function for random value in a range */
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min);
}

/** reteurn 1 or -1 based on the current moment */
function dateRandomSign()
{
    let date = Date.now();
    if(date % 2 == 0)
    {
        return 1;
    }
    else
    {
        return -1;
    }
}

/** Some random numbers */
let rand0 = getRandom(0, 99);
let rand1 = getRandom(0, 99);
let rand2 = getRandom(0, 99);
let rand3 = getRandom(0, 99);
let rand4 = getRandom(0, 99);
let signChanger = dateRandomSign();

let bingoString = "Lucky numbers are: " + rand0 + " " + rand1 + " " + rand2 + " " + rand3 + " " + rand4 + ".";

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
    "We are all slaves",
    "At least you can get vaccinated"
];

let rareQuotes = [
    "I am so bored",
    "I hope you're having fun ruining your day",
    "The only valuable number is 42 anyway",
    "The princess is in another bank account",
    "Oh look, a rare quote!"
];
let epicQuotes = [
    "Perkele",
    "I stole this quotes idea from Minecraft",
    "Quotes almost as rare as a RTX3080",
    "Go out and die",
    "The world is burning",
    "No change in yourself will change the world",
];
let legendaryQuotes = [
    "Se ni’ mondo esistesse un po’ di bene e ognun si honsiderasse suo fratello ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello",
    "https://www.youtube.com/watch?v=KuyF5kNvd7Y&ab_channel=Ikeaggg%C3%A9-Topic",
    "01010111 01100101 00100000 01100001 01110010 01100101 00100000 01110011 01110000 01101001 01100101 01100100 00100000 01100001 01101110 01100100 00100000 01110111 01100101 00100000 01100100 01100101 01110011 01100101 01110010 01110110 01100101 00100000 01101001 01110100"
];
let InfinityQuote = "Final Fantasy IX was the best one"

/** more rare quotes */
let seed = getRandom(-9999, 9999)
var quote = "";

/** Output a random quote, from rarest to most common */ 
if(seed == 9998)
{
    quote = InfinityQuote;
}
else if (rand4 + rand3 + rand2 + rand1 + rand0 == seed)
{
    quote = legendaryQuotes[getRandom(0, legendaryQuotes.length - 1)];
}
else if(bingoString.includes(seed))
{
    quote = bingoString + " Lucky! :D"
}
else if((rand4 * signChanger) + (rand2* signChanger) + (rand0 * signChanger) < seed && seed > -250 && seed < 250)
{
    quote = epicQuotes[getRandom(0, epicQuotes.length - 1)];
}
else if((((seed + 1234) / 7) + 1) % 2 == 0 && seed < -4321)
{
    quote = quotes[getRandom(0, quotes.length - 1)].shuffle();
}
else if((rand4 * rand3 + rand2) > seed && seed > 0)
{
    quote = rareQuotes[getRandom(0, rareQuotes.length - 1)];
}
else
{
    quote = quotes[getRandom(0, quotes.length - 1)];
}

document.querySelector("#welcome-quote").innerText = quote;
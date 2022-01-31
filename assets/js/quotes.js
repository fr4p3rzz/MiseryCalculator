let quotes = [
    "The average is so mediocre.",
    "Why are you here, craving unhappiness?",
    "Lucky numbers are: " + getRandom(0, 99) + " " + getRandom(0, 99) + " " + getRandom(0, 99) + " " + getRandom(0, 99) + " " + getRandom(0, 99) + ".",
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
    "You can live happily anyway"
];

/** Output a random quote */
var quote = quotes[getRandom(0, quotes.length - 1)]
document.querySelector("#welcome-quote").innerText = quote;


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min);
  }
let quotes = [
    "The average is so mediocre.",
    "Why are you here, craving unhappiness?",
    "Lucky numbers are: 04, 53, 67, 42, 09.",
    "This will not improve your day.",
    "You should work right now.",
    "You should study right now.",
    "This was really a bad idea.",
    "Economy sucks."
];

/** Output a random quote */
var quote = quotes[getRandom(0, quotes.length - 1)]
document.querySelector("#welcome-quote").innerText = quote;


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min);
  }
/** The bois */
let milionaires = [];
let elonMusk = new milionaire("Elon Musk", 281200000000);
let bernardArnault = new milionaire("Bernard Arnault", 42300000000);
let billGates = new milionaire("Bill gates", 10700000000);
let larryEllison = new milionaire("Larry Ellison", 34000000000);
let larryPage = new milionaire ("Larry Page", 16100000000);
let markZuckerberg = new milionaire("Mark Zuckemberg", 23400000);
let warrenBuffet = new milionaire("Warren Buffet", 380000);
let jeffBezos = new milionaire("Jeff Bezos", 64000000000);
let jkRowling = new milionaire("J.K. Rowling", 61125000);

milionaires.push(elonMusk);
milionaires.push(bernardArnault);
milionaires.push(larryEllison);
milionaires.push(larryPage);
milionaires.push(markZuckerberg);
milionaires.push(warrenBuffet);
milionaires.push(jeffBezos);
milionaires.push(jkRowling);

/** The place */
let cardGrid = document.getElementById("cards-row");
let cardTemplate = document.createElement("div");
cardTemplate = document.getElementById("card");
document.getElementById("template").remove();

/** The input */
let userYearIncome = 0;
document.getElementById("input-misery").addEventListener("keyup", (e) => {
    userYearIncome = parseInt(document.getElementById("input-misery").value);
})

document.getElementById("calculate-button").addEventListener("click", function(){

    cardGrid.innerHTML = "";
    for(let i = 0; i < milionaires.length; i++)
    {
        let newCard = document.createElement("div");
        newCard.setAttribute("id", "card-" + i);
        newCard.classList.add("col-lg-6", "align-self-center", "my-auto");
        newCard.appendChild(cardTemplate.cloneNode(true));
        
        newCard.querySelector("#who-is").innerText = milionaires[i].name;
        newCard.querySelector("#last-updated").innerText = "last data updated: " + milionaires[i].lastUpdated;

        newCard.querySelector("td.year-income").innerText = milionaires[i].yearIncome.format(2, 3, '.', ',');
        newCard.querySelector("td.year-compare").innerText = compareYear(milionaires[i].yearIncome, userYearIncome)

        newCard.querySelector("td.month-income").innerText = incomePerMonth(milionaires[i].yearIncome).format(2, 3, '.', ',');
        newCard.querySelector("td.month-compare").innerText = compareMonth(milionaires[i].yearIncome, userYearIncome);

        newCard.querySelector("td.minute-income").innerText = incomePerMinute(milionaires[i].yearIncome).format(2, 3, '.', ',');
        newCard.querySelector("td.minute-compare").innerText = compareMinute(milionaires[i].yearIncome, userYearIncome);

        newCard.querySelector("td.second-income").innerText = incomePerSecond(milionaires[i].yearIncome).format(2, 3, '.', ',');
        newCard.querySelector("td.second-compare").innerText = compareSecond(milionaires[i].yearIncome, userYearIncome);

        cardGrid.appendChild(newCard);
    }
})



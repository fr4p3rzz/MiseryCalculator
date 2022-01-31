/** The bois */
let milionaires = [];
let baseFilepath = "assets/imgs/";
let elonMusk = new milionaire("Elon Musk", 281200000000, "CEO at Tesla, Starlink", baseFilepath+"musk.jpeg");
let bernardArnault = new milionaire("Bernard Arnault", 42300000000, "Former chairman at Dior, Luis Vuitton and others",baseFilepath+"arnault.jpeg");
let billGates = new milionaire("Bill gates", 10700000000, "Founder at Microsoft, B&MFundation",baseFilepath+"gates.jpeg");
let satyaNadella = new milionaire("Satya Nadella", 4470000000, "CEO at Microsoft", baseFilepath+"nadella.jpeg");
let larryPage = new milionaire ("Larry Page", 16100000000, "Founder at Google, Alphabet", baseFilepath+"page.jpeg");
let michaelBloomberg = new milionaire("Michael Bloomberg", 15000000000, "retired CEO at Bloomberg LP", baseFilepath+"bloomberg.jpeg");
let francoiseMeyers = new milionaire("Françoise Bettencourt Meyers", 16900000000, "Vice-chairperson at L'Oréal", baseFilepath+"meyers.jpeg");
let jeffBezos = new milionaire("Jeff Bezos", 64000000000, "Founder at Amazon", baseFilepath+"bezos.jpeg");
let larryEllison = new milionaire("Larry Ellison", 34000000000, "Founder at Oracle Corp.", baseFilepath+"ellison.jpeg");

milionaires.push(elonMusk);
milionaires.push(bernardArnault);
milionaires.push(satyaNadella);
milionaires.push(larryPage);
milionaires.push(michaelBloomberg);
milionaires.push(francoiseMeyers);
milionaires.push(jeffBezos);
milionaires.push(larryEllison);

/** The place */
let cardGrid = document.getElementById("cards-row");
let cardTemplate = document.createElement("div");
cardTemplate = document.getElementById("card");
document.getElementById("template").remove();

/** The input */
let userYearIncome = 0;
let alertOn = false;
let realityCheck;
document.getElementById("input-misery").addEventListener("keyup", (e) => {
    userYearIncome = parseInt(document.getElementById("input-misery").value);
    dreamCrusher(500000);

});

let currencies = Array.from(document.getElementsByClassName("dropdown-item-currency"));
let currentCurrency = "USD";
for(let i = 0; i < currencies.length; i++)
{
    currencies[i].addEventListener("click", (e) =>{
        document.getElementById("currency-dropdown").innerText = currencies[i].innerText;
        currentCurrency = currencies[i].innerText.toString();
        
    })
}
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
        newCard.querySelector("#description").innerText =  milionaires[i].description;
        newCard.querySelector("#photo-of-the-rich").setAttribute("src", milionaires[i].filepath);

        convertedUserYearIncome = currencySelect(userYearIncome, currentCurrency);
        convertedMilionaireYearIncome = currencySelect(milionaires[i].yearIncome, currentCurrency);

        newCard.querySelector("td.year-income").innerText = convertedMilionaireYearIncome.format(2, 3, '.', ',');
        newCard.querySelector("td.year-compare").innerText = compareYear(convertedMilionaireYearIncome, convertedUserYearIncome)

        newCard.querySelector("td.month-income").innerText = incomePerMonth(convertedMilionaireYearIncome).format(2, 3, '.', ',');
        newCard.querySelector("td.month-compare").innerText = compareMonth(convertedMilionaireYearIncome, convertedUserYearIncome);

        newCard.querySelector("td.minute-income").innerText = incomePerMinute(convertedMilionaireYearIncome).format(2, 3, '.', ',');
        newCard.querySelector("td.minute-compare").innerText = compareMinute(convertedMilionaireYearIncome, convertedUserYearIncome);

        newCard.querySelector("td.second-income").innerText = incomePerSecond(convertedMilionaireYearIncome).format(2, 3, '.', ',');
        newCard.querySelector("td.second-compare").innerText = compareSecond(convertedMilionaireYearIncome, convertedUserYearIncome);

        cardGrid.appendChild(newCard);
    }
})



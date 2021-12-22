/** The bois */
let elonMusk = {
    name: "Elon Musk",
    yearIncome: 12648672874,
    description: ""
};

let bernardArnault = {
    name: "Bernard Arnault",
    yearIncome: 94100000000,
    description: ""
};

let billGates = 3796000000;
let larryEllison = 67261000;
let larryPage = 10000000;
let markZuckerberg = 3000000000;
let warrenBuffet = 13500000000;
let jeffBezos = 73000000000;
let jkRowling = 60000000;

/** change from dollar */
let euro = 0.89;
let yen = 114.31;
let ruble = 73.78;
let rupee = 75.50;

/** other stuff */
let commaValue = 2

function incomePermonth(income)
{
    return (income / 12).toFixed(commaValue);
}

function incomePerDay(income)
{
    return (income / 365).toFixed(commaValue);
}

function incomePerMinute(income)
{
    return (income / 525600).toFixed(commaValue);
}

function incomePerSecond(income)
{
    return (income / 31536000).toFixed(commaValue);
}

function toEur(income)
{
    return (income * euro).toFixed(commaValue);
}

function toYen(income)
{
    return (income * yen).toFixed(commaValue);
}

function toRuble(income)
{
    return (income * ruble).toFixed(commaValue);
}

function toRupee(income)
{
    return (income * rupee).toFixed(commaValue)
}
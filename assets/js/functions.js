/** Milionaire passport */
function milionaire(name, yearIncome, description, lastUpdated = "december, 2021", filepath = "assets/imgs/default.jpg")
{
    this.name = name;
    this.yearIncome = yearIncome;
    this.description = description;
    this.lastUpdated = lastUpdated;
    this.filepath = filepath;
}

/** Change from dollar updated to december 2021 */
let euro = 0.89;
let yen = 114.31;
let ruble = 73.78;
let rupee = 75.50;

/** Other stuff */
let commaValue = 2

/** Functions for money calculations */

function incomePerMonth(income)
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

function compareYear(value1, value2){

    return Math.floor(value1 / value2);
}

function compareMonth(value1, value2){

    return Math.floor(incomePerMonth(value1) / value2);
}

function compareMinute(value1, value2){

    return (incomePerMinute(value1) / value2).toFixed(commaValue);
}

function compareSecond(value1, value2){

    return (incomePerSecond(value1) / value2).toFixed(commaValue + 2);
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
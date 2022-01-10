/** Milionaire passport */
function milionaire(name, yearIncome, description, lastUpdated, filepath = "assets/imgs/default.jpg")
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
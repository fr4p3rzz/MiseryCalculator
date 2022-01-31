/** Milionaire passport */
function milionaire(name, yearIncome, description = "", filepath = "assets/imgs/default.jpg", lastUpdated = "december, 2021")
{
    this.name = name;
    this.yearIncome = yearIncome;
    this.description = description;
    this.lastUpdated = lastUpdated;
    this.filepath = filepath;
}

/** Change from dollar updated to december 2021 */
let swiss = 0.93;
let euro = 0.89;
let yen = 114.31;
let ruble = 73.78;
let rupee = 75.50;

/** Other stuff */
let commaValue = 2

/** Functions for money calculations */

function incomePerMonth(income)
{
    return income / 12;
}

function incomePerDay(income)
{
    return income / 365;
}

function incomePerMinute(income)
{
    return (income / 525600);
}

function incomePerSecond(income)
{
    return (income / 31536000);
}

function compareYear(value1, value2){

    return Math.floor(value1 / value2);
}

function compareMonth(value1, value2){

    return Math.floor(incomePerMonth(value1) / value2);
}

function compareMinute(value1, value2){
    result = (incomePerMinute(value1) / value2).toFixed(commaValue);
    return explicitTime(result);
}

function compareSecond(value1, value2){
    result = (incomePerSecond(value1) / value2);
    return explicitTime(result);
}

// Function to explicit time when it's less than 1 month
function explicitTime(time)
{
    let oneMonth = 0.1 // Percentage of 1 month in a year
    let twoWeeks = 0.04 // Percentage of one week in a year
    let oneWeek = 0.02 // Percentage of one week in a year
    let oneDay = 0.003 // Percentage of a day in a year
    let oneHour = 0.0001 // Percentage of 1 hour in a year
    let halfhour = 0.00006 // Percentage of 1 hour in a year
    let fiveMins = 0.00001 // Percentage of 5 minutes in a year

    // I hate this, need refactory
    if(time < oneMonth)
    {
        if(time < twoWeeks)
        {
            if(time < oneWeek)
            {
                if(time < oneDay)
                {
                    if(time < oneHour)
                    {
                        if(time < halfhour)
                        {
                            if(time < fiveMins)
                            {
                                return '~ 5min';
                            }
                            else
                            {
                                return '~ 30min';
                            }
                        }
                        else
                        {
                            return '~ 1hr';
                        }
                    }
                    else
                    {
                        return '~ 1 day';
                    }
                }
                else
                {
                    return '~ 1 week';
                }
            }
            else
            {
                return '~ 2 weeks'
            }
        }
        else
        {
            return '~ 1 month';
        }
    }
    else
    {
        return parseFloat(time).toFixed(commaValue);
    }
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

// Convert the submitted income to the selected currency
function currencySelect(income, currency)
{
    let multiplier = 1;
    switch(currency)
    {
        case 'USD':
            multiplier = 1;
            break;
        case 'EUR':
            multiplier = euro;
            break;
        case "CHF":
            multiplier = swiss;
            break;
        case 'YEN':
            multiplier = yen;
            break;
        case 'RUB':
            multiplier = ruble;
            break;
        case 'INR':
            multiplier = rupee;
            break;
        default:
            multiplier = 1;
            break;
    }

    return income * multiplier;
}

// If the user input a value > amount, show an alert 
function dreamCrusher(amount)
{
    if(userYearIncome > amount)
    {
        if(!alertOn)
        {
            realityCheck = document.createElement("div");
            realityCheck.classList.add("alert");
            realityCheck.classList.add("alert-danger");
            realityCheck.innerText = "Yeah, you'd like that";
            document.querySelector("#input-row").appendChild(realityCheck);
            alertOn = true;
        }
    }
    else
    {
        if(realityCheck != undefined)
        {
            realityCheck.remove();
            alertOn = false;
        }
    }
}

// Function to display values as income (xxx.yyy.zzz,aa)
Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};
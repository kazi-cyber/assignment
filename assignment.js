

//first problem kilometerToMeter

function kilometerToMeter(kilometer){
    var meter = 1000 * kilometer;
    return meter;
}
var total = kilometerToMeter;


 
//second problem budgetCalculator

var watchPrice = 50;
var mobilePrice = 100;
var laptopPrice = 500;

function budgetCalculator(watch, mobile, laptop){
    var watchCost = watch * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;

    return watchCost + mobileCost + laptopCost;
}
var total = budgetCalculator(2, 1, 2);



//third problem hotelCost

function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var tenDaysCost = 10 * 100;
        var remainingDays = day - 10;
        var moreCost = remainingDays * 80;
        cost = tenDaysCost + moreCost;
    } else {
        var tenDaysCost = 10 * 100;
        var moreCost = 10 * 80;
        var remainingDays = day - 20;
        var totalCost = remainingDays * 50;
        cost = tenDaysCost + moreCost + totalCost;
    }
    return day;
}


//fourth problem megaFreind

var listNames = [`rakibul`, `arafat`, `anisul`, `sajal`, `bohemian`];
var maxName = listNames[0];

function megaFreind(){
    for(var i = 0; i<listNames.length; i++){
        var element = listNames[i];
        if(element.length > maxName.length ){
            maxName = element;
        }
    }
    return maxName;

}
var largeName = megaFreind(listNames);

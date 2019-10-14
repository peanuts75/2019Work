const napierSymbols = "abcdefghijklmnopqrstuvwxyz"
var tempString = ""

function napierConvert(numberToConvert, toOrFrom){

    if (typeof numberToConvert == "number") tempString = String(numberToConvert)
    tempNumber = 0

    switch (toOrFrom){

        case "from":
            for (i=0;i<numberToConvert.length;i++){   
                tempNumber+=Math.pow(2,napierSymbols.search(numberToConvert.substr(i, 1)))}
        return tempNumber
        
        default:
            tempString = ""
            loopNo = 0
            for (i=1; i<=numberToConvert;i*=2){
                if (numberToConvert % (i*2) == i){
                    numberToConvert -= i
                    tempString += (napierSymbols.charAt(loopNo))}
                loopNo++}
        return tempString}}


function altNapierConvert(numberToConvert){
    if (typeof numberToConvert == "number"){
        tempNumber = 0
        for (i=0;i<numberToConvert.length;i++){ 
            tempNumber+=Math.pow(2,napierSymbols.search(numberToConvert.substr(i, 1)))}
        return tempNumber
    } else {
        tempString = ""
        loopNo = 0
            for (i=1; i<=numberToConvert;i*=2){
                if (numberToConvert % (i*2) == i){
                    numberToConvert -= i
                    tempString += (napierSymbols.charAt(loopNo))}
                loopNo++}
        return tempString}}

console.log(napierConvert("o", "from"))
console.log(napierConvert(559252, "to"))
// console.log(altNapierConvert("alphabet"))
// console.log(altNapierConvert(559252))
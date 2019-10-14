var theString = "The String"
console.log()
console.log(`The string is "${theString}"`)
console.log()
console.log("search:")
console.log(`The capital S is the ${theString.search("S")+1}th letter`)
console.log()
console.log("lastIndexOf:")
console.log(`The last (and only) n is at position ${theString.lastIndexOf("n")+1}`)
console.log()
console.log("slice:")
console.log(`The 4th to 6th letters are "${theString.slice(4,7)}"`)
console.log()
console.log("substring:")
console.log(`The last 4 letters are "${theString.substring(6,10)}"`)
console.log()
console.log("substr:")
console.log(`The second-to-last two letters are "${theString.substr(7,2)}"`)
console.log()
console.log("replace:")
console.log(`Replacing the 'e' with a 'y' results in "${theString.replace("e","y")}"`)
console.log()
console.log("concat:")
console.log(`If I add an 's', I get "${theString.concat("s")}"`)
console.log()
console.log("charAt:")
console.log(`The third letter of the string is "${theString.charAt(2)}"`)
console.log()

var gridSquares = ["0","1","2","3","4","5","6","7","8"]                             //This grid of squares holds all of the naughts, crosses and spaces for a game, but starts off with a number from 0 to 8 as a placeholder for each square
var tempNumber = 0                                                                   //tempNumber is used later in the flipper function. flipper function requires a random numberand it needs to re-write it, so the easiest approach is to make a temporary variable

function flipper(inputSquare){                                                      //The function flipper needs an input called inputSquare within, this is the grid square to be turned into an X, O or space by the function
    tempNumber = Math.floor(Math.random()*3)                                         //tempNumber is turned into a random integer from 0 to 2
    if (tempNumber == 0){gridSquares[inputSquare]="X"}                               //If tempNumber is 0, the grid square that the function is acting upon becomes an X. Similarly, the other possible values result in the square turning into an O or a space
    else if (tempNumber == 1){gridSquares[inputSquare]="O"}
    else {gridSquares[inputSquare]=" "}
}

function flipAll(){                                                                 //Flip all is a function which applies the flipper function to all of the grid squares. It flips the grid.
    for (i=0; i<9; i++){
        flipper(gridSquares[i])
    }
}

function displayGrid(flipped){                                                      //displayGrid draws a naughts and crosses grid including lines and spaces, and it includes a boolean parameter to determine whether or not to flip all of the grid squares
    if(flipped){flipAll()}
    console.log(`   |   |   `)
    console.log(` ${gridSquares[0]} | ${gridSquares[1]} | ${gridSquares[2]} `)
    console.log(`   |   |   `)
    console.log(`-----------`)
    console.log(`   |   |   `)
    console.log(` ${gridSquares[3]} | ${gridSquares[4]} | ${gridSquares[5]} `)
    console.log(`   |   |   `)
    console.log(`-----------`)
    console.log(`   |   |   `)
    console.log(` ${gridSquares[6]} | ${gridSquares[7]} | ${gridSquares[8]} `)
    console.log(`   |   |   `)
}

displayGrid(false)                                                                  //First the grid is displayed without flipping all of the tiles to prove that the squares are ordered correctly and display correctly before being flipped
console.log()
displayGrid(true)                                                                   //Then, the grid is redisplayed with flipped tiles to show that the flipping works.
console.log()

var password = "password"
if (password.length > 7){console.log("Your password has been accepted")}
else {console.log("Your password has been declined")}
console.log()

var num = 16                                                                        //Variable to be checked for its divisibility by 3 or 5
if (num % 3 != 0 || num % 5 != 0){                                                  //If "num % x != 0" then that means that x isn't divisible by x, so this is checking that num can't be divided by 3 OR 5
    if (num % 3 != 0 && num % 5 != 0){                                              //Once it has been checked for divisibility by 3 or 5, it is checked whether or not it is divisible by both. I could also have saved some time and effort by checking whether or not it was divisible by 15, but this is more of a proof of concept and that functionality isn't really what I'm trying to show
        console.log("This is not divisible by 3 or 5")                              //If both 'if' checks have been passed (If it isn't divisible by 3 OR 5, and it isn't divisible by 3 AND 5), this is displayed; it isn't divisible by either
    }
    else {console.log("This is divisible by 3 or 5")}                               //If only the first check has been passed then it is only divisible by 3 OR 5, and this is shown instead; it is divisible by either
}
else{ console.log ("this is divisible by 3 and 5")}                                 //If both checks are failed, then it has to be divisible by 3 and 5; it is divisible by both

//Note that it isn't necessary to use this 'backwards' logic. I could easily change "num % x != y" to "num % x == y" and flip the resultant console.log statements
//I've only done it this way to demonstrate unorthadox (and perhaps whimsical) methodologies

if (
    num % 3 == 0 &&                                                                 //If num is divisible by 3 but...
    num % 5 != 0){                                                                  //num isn't divisible by 5,
        console.log("Fizz")                                                         //then say "Fizz"
}
else if (                                                                           
    num % 3 != 0 &&                                                                 //If num isn't divisible by 3 but...
    num % 5 == 0){                                                                  //num is divisible by 5,
        console.log("Buzz")                                                         //then say "Buzz"
}
else if (
    num % 3 == 0 &&                                                                 //If num is divisible by 3 and...
    num % 5 == 0){                                                                  //num is divisible by 5,
        console.log("Fizz Buzz")                                                    //then say "Fizz Buzz"
}
else {
    console.log(num)                                                                //If none of these situations are applicable, then just say the original number
}
console.log()

var tempString = ""                                                                 //A temporary string is created for the following palindrome tester, it's required in order to create a new string with the reverse of the number being checked, so that I can check that the number is the same as itself reversed, and thus a palindrome

function palindromeTester (numberToTest) {                                          //The palindrome tester function requires a number, called numberToTest
    tempString = ""                                                                 //The temporary string is reset to an empty string in case it has been used, since we'll need to start from a blank slate
    for (i = String(numberToTest).length; i >= 0; i--){                             //There's a for loop which is as long as the number we're testing, which works in reverse order. To do this, we're not directly reading the number, but instead reading the number converted to a string because only strings have the required length property
        tempString += String(numberToTest).charAt(i)                                //In each iteration of the loop, the temporary string gains the next character of the same numberToTest variable in reverse order, again with a string that contains the number rather than the number itself. At the end of this loop the temporary variable will be the same as the number being tested, but in reverse
    }
    if (tempString == numberToTest){                                                //Now that the temporary variable is the same as the number being tested, we can check that the number being checked is the same as the itself backwards
        console.log(`${numberToTest} is a palindrome`)                              //If it is the same, we'll say that the variable is a palindrome
    }
    else {                                                                          //If it isn't a palindrome, 
        console.log(`${numberToTest} is not a palindrome`)                          //well, that's worth saying, too
    }
}

palindromeTester(10102)                                                             //First we try a number that isn't a palindrome,
palindromeTester(10101)                                                             //Then we try a number that is a palindrome
console.log()

playerScore = 1000                                                                  //The player has an initial score of 1000
bonus = 100                                                                         //We want to award the player with a bonus of 100 points
playerScore += bonus                                                                //Now, the player's score is 100 points more; it's playerScore plus 100
console.log(`The player has a score of ${playerScore}`)                             //To verify, we say the player's score
console.log()

// var time = 0
// var placeOfWork = ""    What are these supposed to contain?
// var townOfHome = ""

function checkLastVowel(textToCheck) {                                              //The function checkLastVowel checks for the last vowel in a parameter called textToCheck
    tempNumber = textToCheck.toLowerCase().lastIndexOf("a")                         //Initially, it sets the tempNumber to the last "a" in the text being checked. tempNumber will store the last location of a vowel, and this starts by finding the last "a"
    if (tempNumber < textToCheck.toLowerCase().lastIndexOf("e")){                   //Then, if the last "e" occurs later than the last "a", 
        tempNumber = textToCheck.toLowerCase().lastIndexOf("e")                     //tempNumber will update to reflect that the last vowel is at that position
    }
    if (tempNumber < textToCheck.toLowerCase().lastIndexOf("i")){                   //This repeats for the other vowels
        tempNumber = textToCheck.toLowerCase().lastIndexOf("i")                     //It's worth mentioning that this actually uses toLowerCase so that, in case there are any capital letters in the mix, both capital letters and lower case letters are read as lower case letters and so case is not important
    }
    if (tempNumber < textToCheck.toLowerCase().lastIndexOf("o")){
        tempNumber = textToCheck.toLowerCase().lastIndexOf("o")
    }
    if (tempNumber < textToCheck.toLowerCase().lastIndexOf("u")){
        tempNumber = textToCheck.toLowerCase().lastIndexOf("u")
    }
    tempNumber ++                                                                   //tempNumber is then incremented just to make up for how the range starts at 0 rather than 1. 0 is good for machines, but 1 is good for humans and we want this response to be human readable
    return tempNumber                                                               //The function ends with returning the tempNumber, which now contains the location of the last vowel
}

console.log(`The last occurance of a vowel was at position ${checkLastVowel("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi")}`)
console.log()


function checkFirstAndLastLetter(wordToCheck){
    if(
        wordToCheck.toLowerCase().substr(0,1) == wordToCheck.toLowerCase().substr(-1,1)
    ){
        console.log(`The first and last letters of ${wordToCheck} are the same`)
    } else {
        console.log(`The first and last letters of ${wordToCheck} are not the same`)
    }
}
console.log()

var word = "Word"
checkFirstAndLastLetter(word)
checkFirstAndLastLetter("Racecar")

if (1 === "1"){                                                                     //"If the number 1 is the same value and data type as the string 1
    console.log(true)                                                               //These have different types, so the console will output false
}
else {
    console.log(false)
}

if (1 == "1"){                                                                      //"If the number 1 is equal to the string 1, regardless of type"
    console.log(true)                                                               //These are equal, so the console will output true
}
else {
    console.log(false)
}

if (1 !== "1"){                                                                     //"If the number 1 is NOT the same value and data type as the string 1"
    console.log(true)                                                               //These have different types, so this is and will output true
}
else {
    console.log(false)
}

if (1 != "1"){                                                                      //"If the number 1 is NOT equal to the string 1, regardless of type"
    console.log(true)                                                               //These are equal, so the console will output false
}
else {
    console.log(false)
}
console.log()

var num1 = 3
var num2 = 5
if (((num1 + num2)%2)==0){
    console.log(num1+num2)
}
else{
    console.log(num1*num2)
}
console.log()

var name = "Jacob"
if (name == "Jacob" || name == "Stuart"){
    console.log("Yes, I can serve you")
}
else{
    console.log("Sorry, you aren't the right person")
}
console.log()

if (gridSquares[0] == gridSquares[1] && gridSquares[1] == gridSquares[2]){
    console.log("The top three squares of the naughts and crosses grid are the same")
}
else{
    console.log("The top three squares of the naughts and crosses grid are not the same")
}

function numberStringifier(numberToStringify){ //2
    return String(numberToStringify)
}

function incrementor(numberToIncrement){ //3
    return numberToIncrement + 1
}

function decrementor(numberToDecrement){ //4
    return numberToDecrement - 1
}

function numberAdder(numberToAdd1, numberToAdd2){ //5
    return numberToAdd1 + numberToAdd2
}

function numberTaker(initialNumber, numberToTake){ //6
    return initialNumber - numberToTake
}

function numberMultiplier(firstNumber, secondNumber){ //7
    return firstNumber * secondNumber
}

function numberDivider(initialNumber, numberToDivideBy){ //8
    return initialNumber / numberToDivideBy
}

function numberSquarer(numberToSquare){ //9
    return numberToSquare *= numberToSquare
}


function numberOperator(firstNumber, secondNumber, operator){ //10
    switch (operator){
        case "!": break;
        case "@":
        case "+":
            return `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`
        case "-":
            return `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`
        case "x" || "*":
            return `${firstNumber} x ${secondNumber} = ${firstNumber * secondNumber}`
        case "/" || "\\":
            return `${firstNumber} ÷ ${secondNumber} = ${firstNumber / secondNumber}`
    }
}

function numberComparitor(firstNumber, secondNumber){ //11, 12, 13, 14, 15
    if (firstNumber > secondNumber){
        return `${firstNumber}, the first number, is bigger`
    }
    else if (firstNumber == secondnumber){
        return `Both numbers are ${firstNumber}`
    }
    else {
        return `${secondNumber}, the second number, is bigger`
    }
}

function oddnessAnalyser(inputNumber){ //16, 17
    if (inputNumber % 2){                                                           //If this number is odd then the modulous will have a remainder, and that will make the result of the check 1, which is equal to true. This means that I don't have to say "== 0" or "== 1"
        return `${inputNumber} is odd`
    }
    else{
        return `${inputNumber} is even`
    }
}

function numberGrader(inputNumber){ //18
    if (inputNumber > 89){
        return `${inputNumber} is an A`
    }
    else if (inputNumber > 79){
        return `${inputNumber} is a B`
    }
    else if (inputNumber > 69){
        return `${inputNumber} is a C`
    }
    else if (inputNumber > 59){
        return `${inputNumber} is a D`
    }
    else {
        return `${inputNumber} is an F`
    }
}

var place = "Manchester"
var country = "UK"
var age = "24"
var weather = "cloudy"

if (place == "Manchester" && weather == "sunny"){
    console.log("Check again")
}
else if (place == "Manchester" && weather == "rain"){
    console.log("Obviously...")
}
else{
    console.log("What, it isn't raining?")
}
if (age > 17 && country == "UK"){
    console.log("Something is supposed to be here")
}

var favouriteFilm = "No idea"

if (favouriteFilm == "The Godfather" || favouriteFilm == "Ghostbusters"){
    console.log("You're living the good life")
}
else{
    console.log("You're living your own life")
}

console.log(numberOperator(2,2,"+"))
console.log(numberOperator(2,2,"-"))
console.log(numberOperator(2,2,"/"))
console.log(numberOperator(2,2,"x"))
console.log(numberOperator(2,2,"!"))
console.log(numberOperator(2,2,"@"))
console.log()

function toppingChecker(pizzaTopping){
    switch (pizzaTopping.toLowerCase()){
        case "saussage":
        case "cheese":
        case "pepperoni":
        case "meatballs":
        case "bacon":
            return "decent topping"
        case "lettuce":
        case "tomato":
        case "onion":
        case "pineapple":
        case "olive":
            return "disturbing topping"
        default:
            return "unrecognised topping"
    }
}

function concatonateStrings(string1, string2){ //19
    return string1 + string2
}

console.log(concatonateStrings("two ", "strings"))
console.log()

tempNumber = 0 //20
function vowelCounter(textToCheck){
    tempNumber = 0
    for (i = 0; i < textToCheck.length; i++){
        if (textToCheck.toLowerCase().charAt(i) == "a" ||
        textToCheck.toLowerCase().charAt(i) == "e" ||
        textToCheck.toLowerCase().charAt(i) == "i" ||
        textToCheck.toLowerCase().charAt(i) == "o"||
        textToCheck.toLowerCase().charAt(i) == "u"){
            tempNumber++
        }
    }
    return tempNumber
}

var tempArray = [1, 3, 5, 7, 9]
console.log(`'${tempArray}' is the array`)
tempArray.shift()
console.log(`'${tempArray}' is the array with shift applied`)
tempArray.unshift(11)
console.log(`'${tempArray}' is the array with 11 unshifted into it`)
console.log(`'${tempArray.slice(1,4)}' is a slice of the array`)

const orderCoffee = (size, typeOfDrink) => {
    console.log(`You have ordered a ${size} ${typeOfDrink}`)
}

orderCoffee("little", "latte")

let orderCount = 0

const takeOrder = (topping1, topping2, topping3) => {
    console.log(`Pizza with ${topping1}, ${topping2} and ${topping3}`)
    orderCount++
}

takeOrder("pineapple", "olives", "cheese")

const cashMachine = (pin, amount) => {
    if ( pin == 1234 && amount <= 5000){
        console.log("success")
    }
    else {console.log("failure")}
}

cashMachine(1234, 4000)
cashMachine(2468, 9876)
console.log()

let favouriteSongs = [
    "19-2000 - Gorrilaz",
    "Wanderlust - Quick Brown Fox",
    "Automatonic Electonic Harmonics - Steam Powered Giraffe"
]
console.log(favouriteSongs)
console.log()
console.log(favouriteSongs[0])
console.log(favouriteSongs[1])
console.log(favouriteSongs[2])
console.log()
favouriteSongs[5] = "19-2000 (Soulchild remix) - Gorrilaz"
console.log(favouriteSongs)
console.log(favouriteSongs.length)
favouriteSongs.pop()
console.log(favouriteSongs)
favouriteSongs.push("Another song")
console.log(favouriteSongs)
console.log()

var favouriteWebsites = ["Youtube.com", "Pointlesssites.com", "Mail.google.com"]        //array defined
console.log(favouriteWebsites)                                                          //array logged to console
favouriteWebsites.pop();                                                                //last element removed
console.log(favouriteWebsites)                                                          //array redisplayed
console.log(favouriteWebsites.shift())                                                  //first element removed and displayed to console
favouriteWebsites.unshift("Youtube.com")                                                //previous first element returned to the same position in the array
console.log(favouriteWebsites)                                                          //array redisplayed
console.log(favouriteWebsites.slice(0, 1))                                              //displaying slice starting at element 0 and ending before element 1 (just element 0)
console.log(favouriteWebsites.slice(0))                                                 //displaying slice starting at element 0 and ending at the end of the array (both elements)
console.log(favouriteWebsites.splice(1))                                                //removing element at position 1 via splice, whilst displaying the name of the element being removed
console.log(favouriteWebsites)                                                          //displaying the only remaining element of the array
favouriteWebsites = ["Youtube.com", "Pointlesssites.com", "Mail.google.com"]            //returning the favourite websites to their original values
console.log(favouriteWebsites)                                                          //redisplaying the array
console.log(favouriteWebsites.reverse())                                                //reversing the array and then displaying it
console.log(favouriteWebsites)                                                          //redisplaying the array to prove that it has been changed, not just shown in reverse
favouriteWebsites.sort()                                                                //sorting the websites alphabetically
console.log(favouriteWebsites)                                                          //redisplaying the array, which is unchanged as it was already in alphabetical order
favouriteWebsites.sort((a,b) => a.length - b.length)                                    //sorting the websites by the length of the string
console.log(favouriteWebsites)                                                          //redisplaying the array
favouriteWebsites.fill("Youtube")                                                       //filling the array with youtube
console.log(favouriteWebsites)                                                          //redisplaying the array

var arr = [15, 30, 45, 60, 75]
for (i = 0; i < arr.length; i++){
    console.log(`array entry ${i} is ${arr[i]}`)
}
console.log()

let balance = 5
while (balance > 0){
    console.log(balance)
    balance--
}
console.log()

var films = ["Casper", "The Grinch", "Monsters inc", "A Christmas Carol"]

const filmcheck = () => {
    if (films[2] == "Ghostbusters"){
        console.log("woo")
    }
    else{console.log("boo")}
}

filmcheck()
films[2] = "Ghostbusters"
filmcheck()
console.log()

var badarr = new Array(5)

console.log(badarr)
console.log(badarr[3])
console.log()

var arrmap = arr.map(x => x / 15)
console.log(arrmap)
arr.push(90)
console.log(arrmap)
console.log(arr.map(x => x / 15))
console.log()

tempNumber = 0
for (i=1;i<=1000;i++){
    if (i %3 == 0 || i %5 == 0){
        tempNumber +=i
    }
}
console.log(tempNumber)
console.log()

tempString = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"

console.log(tempString.search("hi"))
console.log(tempString.lastIndexOf("hi"))
// for (i=0;i<tempString.length;i++){console.log(tempString.substr(i, 1))}
console.log()

for (i = 0; i < tempString.length; i++){
    if(tempString.substr(i, 2) == "hi"){console.log(i)}
}
console.log()

// tempNumber = 0
// for (i=1;i<9028374;i++){
//     if (i == String(i).split("").reverse().join("")) {tempNumber++}
// }
// console.log(`${tempNumber} palindrome numbers between 1 and 9028374`)  <-- This is the palindrome checker for the huge number in the challenges, but replaced with a more reasonable number

const café = {
    name: "Coffee Café",
    seatingCapacity: 100,
    hasSpecialOffers: false,
    drinks: [
        "Coffee",
        "Coff",
        "ee"],
    breakfastOffer: "Big Coffee",
    lunchOffer: "Coffee Jelly",
    noOffer: "No Coffee"}

const me = {
    name: "Robert",
    age: 24,
    interests: ["games","computers", "computer games"],
    sayHi(){console.log(`Hi, I'm ${this.name}`)}
}

console.log(me.name)
console.log(me["name"])
console.log()


const clock = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am"
}

let day = "Friday"
let alarm ="";

if (day == "Monday" ||
    day == "Tuesday" ||
    day == "Wednesday" ||
    day == "Thursday" ||
    day == "Friday"){
        alarm = clock.weekdayAlarm
} else {
    alarm = clock.weekendAlarm
}

console.log(alarm)
console.log()

me.favouriteSongs = favouriteSongs
console.log(me.favouriteSongs)

const thing = {
    otherThing: "g"
}

thing.music = "song"

console.log(thing.music)
me.sayHi()
console.log()

function wordCounter(stringToCountWordsOf){
    tempNumber = stringToCountWordsOf.match(/\w+/g).length
    console.log(tempNumber)
}

wordCounter("Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself to be caught no less than forty seven times in various disguises.")
console.log()

const pet = {
    name: "Phoebe",
    typeOfPet: "dog",
    age: 12,
    colour: "brown",
    drink(){console.log(`${this.name} is drinking water`)},
    eat(food){console.log(`${this.name} is eating ${food}`)}
}

function checkNumberForN(number){
    if (number == 11 || number == 18 || String(number).substr(0,1)=="8"){return "n"}
    else {return ""}}

console.log(`My pet, ${pet.name}, is a${checkNumberForN(pet.age)} ${pet.age} year old ${pet.colour} ${pet.typeOfPet}`)
pet.drink()
pet.eat("dog food")
console.log()

function digitAdder(numberToAddDigitsOf){
    tempNumber = 0
    tempString = numberToAddDigitsOf
    for (i=0;i<tempString.length;i++){
        tempNumber += Number(tempString.charAt(i))
    }
    return tempNumber
}

console.log(digitAdder("371072875339021027987979982208375902465101357402504637693767749000971264812489697007805041701826053874324986199524741059474233309513058123726617309629919422133635741615725224305633018110724061549082502306758820753934617117198031042104751377806324667689261670696623633820136378418383684177343617267572811287981284997940806548193159262169127588983273844274228917432520321923589422876796487670272189318474514457360013064390911672168568445887116031532767038648610584302543993961982891759366568675793495162176457141856560629502157223196586755079324193331"))
console.log()

var orderTotal = 0
const coffeeShop = {
    branch: "Manchester",
    drinks: {
        beer: 5,
        water: 1,
        mojito: 10,
        order(drink){
            orderTotal+=this[drink]
            return `You've ordered a ${drink} for £${this[drink]}`},
        check(drink){return `A ${drink} would cost £${this[drink]}`}
    },
    food: {
        burrito: 10,
        taco: 5,
        burger: 2.5,
        order(item){
            orderTotal+=this[item]
            return `You've ordered a ${item} for £${this[item]}`},
        check(item){return `A ${item} would cost £${this[item]}`}
    },
}

console.log(coffeeShop.drinks.beer)
console.log(coffeeShop.drinks.order("water"))
console.log(coffeeShop.food.order("taco"))
console.log(orderTotal)
console.log()

class Animal {
    constructor(name, legs){
        this.animalName = name
        this.numberOfLegs = legs
    }
    get name(){
        return this.animalName
    }
    get noOfLegs(){
        return this.numberOfLegs
    }
    set changeName(newName){
        this.animalName = newName
    }
}

var dog = new Animal("Phoebe", 4)
console.log(dog.animalName)
console.log(dog.noOfLegs)
dog.changeName = "Phoebes"
console.log(dog.animalName)

class Hedgehog extends Animal {
    constructor(name, legs, spikes){
        super(name, legs)
        this.spikeNumber = spikes
    }
}

const Sonic = new Hedgehog("Sonic", 2, "many")
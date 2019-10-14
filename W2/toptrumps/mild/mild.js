
var cards = [ //amazingness /10
    ["Señor Firefist", 7],
    ["Mr Flowersmith", 3],
    ["Fred", 1],
    ["Bomb dude", 6],
    ["Magic man", 9], //5
    ["Demigod Drake", 10],
    ["Dragon Mike", 8],
    ["The Toe Trampler", 2],
    ["Fancypants Mcgee", 3],
    ["Dazzles", 6], //10
    ["Animage", 7],
    ["Mrs Swordhands", 5],
    ["Captain Candycrush", 1],
    ["Sir Loin", 2],
    ["Lady Lance", 7], //15
    ["Shoe-shine Sammy", 3],
    ["Chip-shop Charlie", 4],
    ["Cola Carla", 5],
    ["Ratling Reggie", 6],
    ["Colonel Cash", 8], //20
    ["Maniacle Metamancer", 10],
    ["Cindy", 8],
    ["The Inanimate Rod", 1],
    ["Jazzman", 2],
    ["Badger Barbera", 4], //25
    ["Budgie Ben", 4],
    ["Bendy Becky", 5],
    ["Psyclops", 9],
    ["Lucky", 9],
    ["Goku", 10]] //30

// var btn = document.createElement("BUTTON")
// btn.innerHTML = "get a new card"
// document.body.appendChild(btn)

var random

random = Math.floor(Math.random()*30),
document.getElementById("name").innerHTML=cards[random][0],
document.getElementById("power").innerHTML=`awesomeness: ${cards[random][1]}`,
document.getElementById("desc").innerHTML="refresh the page for a new card"

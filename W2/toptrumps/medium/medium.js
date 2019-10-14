var cards = [ //rating, characters, weird characters, happiness, comments
    ["¯\_(ツ)_/¯", 3440, 9, 3, 2, 1191],
    ["( ͡° ͜ʖ ͡°)", 2638, 8, 6, 4, 1167],
    ["ಠ_ಠ", 1122, 3, 2, 1, 22],
    ["(╯°□°）╯︵ ┻━┻", 968, 12, 8, 1, 27],
    ["ノ┬─┬ノ ︵ ( \o°o)\\", 931, 16, 6, 2, 48], //5
    ["┬──┬◡ﾉ(° -°ﾉ)", 588, 13, 7, 2, 11],
    ["(o.o)", 1, 5, 0, 2, 0],
    ["༼ つ ◕_◕ ༽つ", 458, 10, 8, 2, 4],
    ["ᕕ( ᐛ )ᕗ", 411, 7, 3, 4, 5],
    ["╰( ⚆ _ ⚆ )つ──☆*:・ﾟ", 1, 17, 6, 2, 0], //10
    ["ʕ•ᴥ•ʔ", 380, 5, 5, 3, 8],
    ["(☞ﾟヮﾟ)☞", 379, 5, 3, 5, 6],
    ["•ᴗ•", 346, 3, 3, 5, 12],
    ["ԅ(≖‿≖ԅ)", 244, 7, 5, 3, 3],
    ["ಠᴗಠ", 234, 3, 3, 3, 5], //15
    ["ฅ^•ﻌ•^ฅ", 204, 7, 5, 4, 5],
    ["[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]", 162, 12, 12, 5, 6],
    ["(⊙_☉)", 157, 5, 2, 2, 5],
    ["(づ￣ ³￣)づ", 151, 7, 5, 4, 4],
    ["(∩｀-´)⊃━☆ﾟ.*･｡ﾟ", 149, 13, 9, 3, 4], //20
    ["(ง •̀_•́)ง", 129, 7, 5, 1, 4],
    ["(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧", 125, 11, 7, 5, 3],
    ["ᕦ(ò_óˇ)ᕤ",116, 8, 5, 2, 3],
    ["ლ(ಠ_ಠლ)", 112, 7, 4, 1, 0],
    ["( ˇ෴ˇ )", 106, 7, 3, 3, 3], //25
    ["ಠ_ರೃ", 100, 3, 2, 1, 1],
    ["ʘ‿ʘ", 94, 3, 3, 5, 5],
    ["( ˘ ³˘)♥", 88, 8, 4, 5, 4],
    ["(　＾∇＾)", 78, 6, 1, 5, 0],
    ["o(╥﹏╥)o", 77, 7, 3, 1, 2]] //30

var newcards = [[
    ["¯\_(ツ)_/¯", 3440, 9, 3, 2, 1191], //0 0
    ["( ͡° ͜ʖ ͡°)", 2638, 8, 6, 4, 1167],
    ["ಠ_ಠ", 1122, 3, 2, 1, 22],
    ["(╯°□°）╯︵ ┻━┻", 968, 12, 8, 1, 27],
    ["ノ┬─┬ノ ︵ ( \o°o)\\", 931, 16, 6, 2, 48], //0 4
    ["┬──┬◡ﾉ(° -°ﾉ)", 588, 13, 7, 2, 11],
    ["(o.o)", 1, 5, 0, 2, 0],
    ["༼ つ ◕_◕ ༽つ", 458, 10, 8, 2, 4],
    ["ᕕ( ᐛ )ᕗ", 411, 7, 3, 4, 5],
    ["╰( ⚆ _ ⚆ )つ──☆*:・ﾟ", 1, 17, 6, 2, 0], //0 9
    ["ʕ•ᴥ•ʔ", 380, 5, 5, 3, 8],
    ["(☞ﾟヮﾟ)☞", 379, 5, 3, 5, 6],
    ["•ᴗ•", 346, 3, 3, 5, 12],
    ["ԅ(≖‿≖ԅ)", 244, 7, 5, 3, 3],
    ["ಠᴗಠ", 234, 3, 3, 3, 5]],  //0 14
    [["ฅ^•ﻌ•^ฅ", 204, 7, 5, 4, 5], //1 0
    ["[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]", 162, 12, 12, 5, 6],
    ["(⊙_☉)", 157, 5, 2, 2, 5],
    ["(づ￣ ³￣)づ", 151, 7, 5, 4, 4],
    ["(∩｀-´)⊃━☆ﾟ.*･｡ﾟ", 149, 13, 9, 3, 4], //1 4
    ["(ง •̀_•́)ง", 129, 7, 5, 1, 4],
    ["(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧", 125, 11, 7, 5, 3],
    ["ᕦ(ò_óˇ)ᕤ",116, 8, 5, 2, 3],
    ["ლ(ಠ_ಠლ)", 112, 7, 4, 1, 0], 
    ["( ˇ෴ˇ )", 106, 7, 3, 3, 3], //1 9
    ["ಠ_ರೃ", 100, 3, 2, 1, 1],
    ["ʘ‿ʘ", 94, 3, 3, 5, 5],
    ["( ˘ ³˘)♥", 88, 8, 4, 5, 4], 
    ["(　＾∇＾)", 78, 6, 1, 5, 0],
    ["o(╥﹏╥)o", 77, 7, 3, 1, 2]]] //1 14
// var btn = document.createElement("BUTTON")
// btn.innerHTML = "get a new card"
// document.body.appendChild(btn)

var random
var turnPlayer = 0
var turnCount = 0
var player0attributes = [0,0,0,0,0]
var player1attributes = [0,0,0,0,0]
var score = [0,0]
const switchPlayer = () => {if(turnPlayer){turnPlayer=false}else{turnPlayer=true}}



// textfields = [[
//     document.getElementById("emoticon1").innerHTML,
//     document.getElementById("rating1").innerHTML,
//     document.getElementById("characters1").innerHTML,
//     document.getElementById("wierds1").innerHTML,
//     document.getElementById("happy1").innerHTML,
//     document.getElementById("comments1").innerHTML],
        
//    [document.getElementById("emoticon2").innerHTML,
//     document.getElementById("rating2").innerHTML,
//     document.getElementById("characters2").innerHTML,
//     document.getElementById("wierds2").innerHTML,
//     document.getElementById("happy2").innerHTML,
//     document.getElementById("comments2").innerHTML]]

const randomCards = () => {
    random = Math.floor(Math.random()*30),
    document.getElementById("emoticon1").innerHTML=cards[random][0],
    document.getElementById("rating1").innerHTML=`Rating: ${cards[random][1]}`,
    document.getElementById("characters1").innerHTML=`Characters: ${cards[random][2]}`,
    document.getElementById("wierds1").innerHTML=`Unusual Characters: ${cards[random][3]}`,
    document.getElementById("happy1").innerHTML=`Happiness: ${cards[random][4]}`,
    document.getElementById("comments1").innerHTML=`Comments: ${cards[random][5]}`,
    player0attributes = [cards[random][1],cards[random][2],cards[random][3],cards[random][4],cards[random][5]],
    console.log(player0attributes),

    random = Math.floor(Math.random()*30),
    document.getElementById("emoticon2").innerHTML=cards[random][0],
    document.getElementById("rating2").innerHTML=`Rating: ${cards[random][1]}`,
    document.getElementById("characters2").innerHTML=`Characters: ${cards[random][2]}`,
    document.getElementById("wierds2").innerHTML=`Unusual Characters: ${cards[random][3]}`,
    document.getElementById("happy2").innerHTML=`Happiness: ${cards[random][4]}`,
    document.getElementById("comments2").innerHTML=`Comments: ${cards[random][5]}`,
    player1attributes = [cards[random][1],cards[random][2],cards[random][3],cards[random][4],cards[random][5]],
    console.log(player1attributes)}

const getCards = () => {
    document.getElementById("emoticon1").innerHTML=newcards[0][turnCount][0]
    document.getElementById("rating1").innerHTML=newcards[0][turnCount][1]
    document.getElementById("characters1").innerHTML=newcards[0][turnCount][2]
    document.getElementById("wierds1").innerHTML=newcards[0][turnCount][3]
    document.getElementById("happy1").innerHTML=newcards[0][turnCount][4]
    
}


const hideOtherPlayer = () => {
    document.getElementById(`player${turnPlayer}`).hidden=false             //playerturn is a number, which can be taken using the $notation
    document.getElementById(`player${Number(!turnPlayer)}`).hidden=true}    //in this case, this is interpreted as true or false, which can then be converted to a number
    
const returnPlayers = () => {
    document.getElementById(`player0`).hidden=false   
    document.getElementById(`player1`).hidden=false   }

const showAttributes = () => {
    document.getElementById("attributes").hidden=false    
    document.getElementById("continue").hidden=true}

const showWinner = () => {
    document.getElementById("attributes").hidden=true
    document.getElementById("continue").hidden=false    
}
const phase1 = () => {
    randomCards()
    hideOtherPlayer()
    showAttributes()}

const decideWinner = (attribute) => {
    var decision= 0 
    if (player0attributes[attribute] == player1attributes[attribute]){
        decision=2}
    else if (player0attributes[attribute] > player1attributes[attribute]){
        decision = 0}
    else{
        decision = 1}
    
    switch (decision){
        case 0:
            document.getElementById("wintext").innerHTML="player 1 wins"
            score[0]++
            break
        case 1:
            document.getElementById("wintext").innerHTML="player 2 wins"
            score[1]++
            break
        default:
            document.getElementById("wintext").innerHTML="Draw"
            break}
    phase2()}

console.log(newcards[1][1])
const phase2 = () => {
    returnPlayers()
    showWinner()
    switchPlayer}

phase1()
// hideOtherPlayer()
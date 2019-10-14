console.log("This file is purely for recreational purposes. I make no effort to apply strict programming conventions. Read the code at your own risk.")

var GP = ["0","1","2","3","4","5","6","7","8"]
var winner = " "
var tempNumber = 0
var loopNo = 0

//GP = Grid Piece


GPNone = "   "
GPXTop = "╲ ╱"
GPXMid = " ╳ "
GPXBot = "╱ ╲"
GPOTop = "╭─╮"
GPOMid = "│ │"
GPOBot = "╰─╯"
GPHLine = "───┼───┼───"

function GPDecider(position, line){
    switch (GP[position]){
        case "O":
            switch (line){
                case "top": return GPOTop
                case "mid": return GPOMid
                case "bot": return GPOBot}
        case "X":
            switch (line){
                case "top": return GPXTop
                case "mid": return GPXMid
                case "bot": return GPXBot}
        default:
            return GPNone}}

function displayGrid(){
    console.log(`${GPDecider(0,"top")}│${GPDecider(1,"top")}│${GPDecider(2,"top")}`)
    console.log(`${GPDecider(0,"mid")}│${GPDecider(1,"mid")}│${GPDecider(2,"mid")}`)
    console.log(`${GPDecider(0,"bot")}│${GPDecider(1,"bot")}│${GPDecider(2,"bot")}`)
    console.log(GPHLine)
    console.log(`${GPDecider(3,"top")}│${GPDecider(4,"top")}│${GPDecider(5,"top")}`)
    console.log(`${GPDecider(3,"mid")}│${GPDecider(4,"mid")}│${GPDecider(5,"mid")}`)
    console.log(`${GPDecider(3,"bot")}│${GPDecider(4,"bot")}│${GPDecider(5,"bot")}`)
    console.log(GPHLine)
    console.log(`${GPDecider(6,"top")}│${GPDecider(7,"top")}│${GPDecider(8,"top")}`)
    console.log(`${GPDecider(6,"mid")}│${GPDecider(7,"mid")}│${GPDecider(8,"mid")}`)
    console.log(`${GPDecider(6,"bot")}│${GPDecider(7,"bot")}│${GPDecider(8,"bot")}`)}

function randomiseGrid(){
    for (i=0; i<9; i++){
        tempNumber = Math.floor(Math.random()*3)
        console.log(tempNumber)
        if (tempNumber==0){GP[i]="X"}
        else if (tempNumber==1){GP[i]="O"}
        else {GP[i]=" "}}}

function checkLine(piece1, piece2, piece3){
    // if ((piece1 == piece2 && piece2 == piece3) && (piece1 == "O" || piece1 == "X")){ //if all the pieces are the same and they're an O or X
    if (piece1 == piece2){ //if the first two pieces are the same
        if (piece2 == piece3){ //if the second two pieces are the same
            if (piece1 == "O" || piece1 == "X"){ 
                    if(winner == " "){winner = piece1}
                    else if (winner == "draw" || winner == piece1){}
                    else {winner = piece1}}}}}
//         switch (winner){
//             case " ": winner = piece1 //if there isn't a current winner, the winner will be the one who made a line
//             case !piece1: winner = "Draw" //if the piece that made a line isn't the current winner, then both have made lines and it's a draw
//             default: break;}}} //in any other scenario (repeat wins), there's no change

function checkAllLines(){
    checkLine(GP[0], GP[1], GP[2]); checkLine(GP[3], GP[4], GP[5]); checkLine(GP[6], GP[7], GP[8])
    checkLine(GP[0], GP[3], GP[6]); checkLine(GP[1], GP[4], GP[7]); checkLine(GP[2], GP[5], GP[8])
    checkLine(GP[0], GP[4], GP[8]); checkLine(GP[2], GP[4], GP[6])}

randomiseGrid()
GP[1]="O"
GP[2]="X"
displayGrid()
checkAllLines()
console.log(winner)

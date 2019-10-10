var rawScore = ".......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W".toLowerCase
var score = [0,0,0,0,0,0,0,0,0,0,0]
var out = [false,false,false,false,false,false,false,false,false,false,false]
var tempstring = ""
var playerNumber = 0

for (i=0;i<rawScore.length;i++){
    tempstring = rawScore.charAt(i)
    switch(tempstring){
        case ".": break
        case "1": score[playerNumber]++; break
        case "2": score[playerNumber]+=2; break
        case "3": score[playerNumber]+=3; break
        case "4": score[playerNumber]+=4; break
        case "6": score[playerNumber]+=6; break
        case "w": out[playerNumber] == true; playerNumber++; break
    }
}
var unconverted = "ivxlcdmdclxvi".toLowerCase()
var chraracter = ""
var total = 0

for (i = 0; i < unconverted.length; i++){
    character = unconverted.charAt(i)
    switch (character) {
        case "i":
            if (unconverted.substring(i, unconverted.length).includes("v")){
                total -= 1;break}
            else if (unconverted.substring(i, unconverted.length).includes("x")){
                total -= 1;break}
            else if (unconverted.substring(i, unconverted.length).includes("l")){
                total -= 1;break}
            else if (unconverted.substring(i, unconverted.length).includes("c")){
                total -= 1;break}
            else if (unconverted.substring(i, unconverted.length).includes("d")){
                total -= 1;break}
            else if (unconverted.substring(i, unconverted.length).includes("m")){
                total -= 1;break}
            else {
                total += 1;break}
        case "v":
            if (unconverted.substring(i, unconverted.length).includes("x")){
                total -= 5;break}
            else if (unconverted.substring(i, unconverted.length).includes("l")){
                total -= 5;break}
            else if (unconverted.substring(i, unconverted.length).includes("c")){
                total -= 5;break}
            else if (unconverted.substring(i, unconverted.length).includes("d")){
                total -= 5;break}
            else if (unconverted.substring(i, unconverted.length).includes("m")){
                total -= 5;break}
            else {
                total += 5;break}
        case "x":
            if (unconverted.substring(i, unconverted.length).includes("l")){
                total -= 10;break}
            else if (unconverted.substring(i, unconverted.length).includes("c")){
                total -= 10;break}
            else if (unconverted.substring(i, unconverted.length).includes("d")){
                total -= 10;break}
            else if (unconverted.substring(i, unconverted.length).includes("m")){
                total -= 10;break}
            else {
                total += 10;break}
        case "l":
            if (unconverted.substring(i, unconverted.length).includes("c")){
                total -= 50;break}
            else if (unconverted.substring(i, unconverted.length).includes("d")){
                total -= 50;break}
            else if (unconverted.substring(i, unconverted.length).includes("m")){
                total -= 50;break}
            else {
                total += 50;break}
        case "c":
            if (unconverted.substring(i, unconverted.length).includes("d")){
                total -= 100;break}
            else if (unconverted.substring(i, unconverted.length).includes("m")){
                total -= 100;break}
            else {
                total += 100;break}
        case "d":
            if (unconverted.substring(i, unconverted.length).includes("m")){
                total -= 500;break}
            else {
                total += 500;break}
        case "m":
            total += 1000;break}}

console.log(total)
// console.log(Papa.parse("csvtest.csv", {}))

// const getText = (index) => {
//     fetch("areas.json")
//     .then( (response) => response.json())
//     .then( data => document.getElementById("titleName").innerHTML = data[index].title)
//     .then( data => document.getElementById("subtitleName").innerHTML = data[index].subtitle)
//     // .then( data => document.getElementById("gametext").innerHTML = `data is ${data[index].desc}`)
//     // .then( (response) => response.json())
//     // .then( (data) => document.getElementById("gametext").innerHTML = `data is: ${data[0].Title}`)
// }

// var data
// $.getJSON("areas.json", function(json){
//     data = json[0]
    
// })
// console.log(data)

var json = fetch('areas.json', {method: 'get'})

console.log(json)
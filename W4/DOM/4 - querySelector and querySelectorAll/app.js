const listItems = document.querySelectorAll("li:nth-child(even");

for (i=0;i<listItems.length;i++){
    listItems[i].style.color = "lightgreen"
}

console.log(listItems)
console.log(listItems.length)
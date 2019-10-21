const list = document.getElementsByTagName("li")

list[0].style.color = "#0f0"
list[2].hidden=true
list[3].innerText="D"

for (i = 0; i < list.length; i++){
    list[i].style.fontSize= `${500/(i+1)}pt`
}
const notOrange = document.getElementsByClassName("not-orange")
for (i=0;i<notOrange.length;i++){
    notOrange[i].style.color = "#f00"
}
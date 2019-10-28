const input = document.getElementById("input")
const submit = document.getElementById("submit")

submit.addEventListener("click", () =>{
    let listItem = document.createElement("li")
    listItem.textContent = input.value
    console.log(listItem)
})
const image = document.getElementById("cat")

console.log(image.style)

const button = document.getElementById("submit")

button.addEventListener("click", () => {
    if (image.style.display != 'none') {
        console.log("aewth")
        image.style.display = 'none'
        button.innerText = "unhide"
    } else {
        image.style.display = 'block'
        button.innerText = "hide"}})
var image = document.getElementById("image")

const input = document.getElementById("input")
const button = document.getElementById("submit")

const changeImage = () => {
    image.src = input.value
}


console.log(image)
const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
const listItem = document.getElementsByTagName("li")


button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

removeBtn.addEventListener('click', () => {
    let listItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];

    list.removeChild(listItem);
})

for (let i=0;0<listItem.length;i++){
    listItem[i].addEventListener("mouseover", () =>{
        listItem[i].textContent = listItem[i].textContent.toUpperCase() })
    listItem[i].addEventListener("mouseout", () =>{
        listItem[i].textContent = listItem[i].textContent.toLowerCase() })   } 

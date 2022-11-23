const button = document.querySelector("#button");
const input = document.getElementById("input");
const text = document.getElementById("text");

button.addEventListener("click", () => {
const result = input.value.split("").reverse().join("") ;
text.innerHTML = result
})









button.addEventListener("click", ()=>{

    text.innerHTML = userText.value.split(" ").map(letter => letter.split("").reverse().join(""));
})
const test = document.querySelector("a");
test.addEventListener("click", (event) => {
    test.textContent=prompt("Введите текст");
    event.preventDefault();
})
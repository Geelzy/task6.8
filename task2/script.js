const cons = document.querySelector("#consoleLog");
cons.onclick = function(){
    alert("Метод для ввывода сообщения в веб-консоль");
}
const ala = document.querySelector("#alert");
ala.addEventListener("click", () => {
    alert("Показывает диалоговое окно с сообщением и кнопкой OK. ")
}
)
const pr = document.querySelector('#prompt');
pr.addEventListener("click", () =>{
    a = prompt("Отображает диалоговое окно с запросом на ввод текста")
    console.log(a)
})


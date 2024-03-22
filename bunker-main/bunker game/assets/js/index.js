let title = document.getElementById("title")
let card = document.querySelector(".person")
let btnGenerate = document.querySelector(".navi-btn")
console.dir(title);
btnGenerate.addEventListener("click", () => {
    title.style.opacity = 0;
    setTimeout(() => {
        title.style.display = "none";
        card.style.opacity = 100;
        card.style.display = "flex";
    }, 1000);
})

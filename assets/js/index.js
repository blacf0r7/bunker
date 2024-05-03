import nameMass from "./name.js";
import professions from "./profession.js";
import { diseas } from "./disease.js";
import phobia from "./phobia.js";
import hobby from "./hobby.js";

let personItemMass = document.querySelectorAll(".person-item")
let title = document.getElementById("title")
let card = document.querySelector(".person")
let btnGenerate = document.querySelector(".navi-btn")
console.dir(title);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function ageFormat(age) {
    if (age % 10 < 5 && age % 10 > 0 && (age > 20 || age < 5)) {
        return `${age} ${age % 10 == 1 ? " год" : " года"}`;
    } else {
        return age + " лет";
    }

}

btnGenerate.addEventListener("click", () => {
    title.style.opacity = 0;
    let age = random(1, 80);
    personItemMass[0].innerText = "Имя:" + nameMass[random(0, nameMass.length)];
    personItemMass[1].innerText = 'Возвраст:' + ageFormat(age);
    if (age > 14) {
        personItemMass[2].innerText = 'Профессия:' + professions[random(0, professions.length)];
        let workExp = random(0, age / 1.8);
        personItemMass[3].innerText = 'Стаж работы:' + ageFormat(workExp);
    } else {
        personItemMass[2].innerText = 'Профессия: Безработный';
        personItemMass[3].innerText = 'Стаж работы:' + ageFormat(age);
    }
    if (random(0, 1) == 1) {
        personItemMass[4].innerText = 'Здоров';
    } else {
        personItemMass[4].innerText = 'Заболевание:' + diseas[random(0, diseas.length)];
    }
    personItemMass[5].innerText = 'Плодовитость:' + random(0, 10); 
    personItemMass[6].innerText = 'Фобия:' + phobia[random(0, phobia.length)];
    personItemMass[7].innerText = 'Хобби:' + hobby[random(0, hobby.length)]
    setTimeout(() => {
        title.style.display = "none";
        card.style.display = "flex";

        setTimeout(() => {
            card.style.opacity = 100;
        }, 1000)
    }, 1000);
})

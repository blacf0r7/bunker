let range = document.querySelector(".range");
let btnOnOff = document.querySelector(".music");
let audio = document.getElementById("audio");

console.log(range, btnOnOff, audio);

btnOnOff.onclick = () => {
 if (audio.paused == true) {
    audio.play();
 }   else {
    audio.pause();
 }
};
range.addEventListener("input", ()=> {
    console.log(range.value / 100);
    audio.volume = range.value / 100;
});
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}
function cancel() {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

AOS.init({offset:0});

const lang = document.documentElement.lang;
const texts = lang === 'fr'
    ? ["Etudiant en informatique", "Développeur web", "Passionné par la technologie"]
    : ["Computer Science Student", "Web Developer", "Passionate about Technology"];

let speed = 100;
const textElement = document.querySelector('.typewriter-text');
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    typeWriter();
});
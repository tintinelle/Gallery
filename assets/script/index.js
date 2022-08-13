"use strict";

const changeImageNext = () => {
    const characterImage = document.getElementById('characterImage');
    characterImage.src = "assets/img/ciri.jpeg";

    const characterName = document.getElementById('characterName');
    characterName.innerHTML = "Cirilla";
}

const changeImageBack = () => {
    const characterImage = document.getElementById('characterImage');
    characterImage.src = "assets/img/geralt.jpg";
    const characterName = document.getElementById('characterName');
    characterName.innerHTML = "Geralt from Rivia";
}
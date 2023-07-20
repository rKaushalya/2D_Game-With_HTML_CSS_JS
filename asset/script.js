var ninja = document.getElementById("ninja");
let idleImgNumber = 0;
let idleAnimationNumber = 0;

function idleNinja() {
    idleImgNumber ++;

    if (idleImgNumber == 11){
        idleImgNumber = 1;
    }

    ninja.src = "asset/img/sprites/Idle__"+idleImgNumber+".png";
}

function idleAnimationStart() {
    idleAnimationNumber = setInterval(idleNinja, 200);
}
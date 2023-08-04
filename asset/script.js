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
    idleAnimationNumber = setInterval(idleNinja, 100);
}

let runAnimationNumber = 0;
let runAnimationStartNumber = 0;

function runAnimation() {
    runAnimationNumber ++;

    if (runAnimationNumber == 11){
        runAnimationNumber = 1;
    }

    ninja.src = "asset/img/sprites/Run__"+runAnimationNumber+".png";
    ninja.style.width = '10%';
}

function runAnimationStart() {
    runAnimationStartNumber = setInterval(runAnimation,80);
    clearInterval(idleAnimationNumber);
}

function keyCheck(event) {
    if (event.code == "Enter"){
        if (runAnimationStartNumber == 0){
            runAnimationStart();
        }
        if (moveBackgroundId == 0){
            moveBackgroundId = setInterval(moveBackground,80);
        }
    }
    if (event.code == "Space"){
        if (jumpAnimationStartNumber == 0){
            jumpAnimationStart();
        }
        if (moveBackgroundId == 0){
            moveBackgroundId = setInterval(moveBackground,80);
        }
    }
}

let backgroundX = 0;
let moveBackgroundId = 0;

function moveBackground() {
    backgroundX -= 20;
    document.getElementById("background").style.backgroundPositionX = backgroundX + "px";
}

let jumpAnimationNumber = 0;
let jumpAnimationStartNumber = 0;
let ninjaMarginTop = 470;

function jumpAnimation() {
    jumpAnimationNumber ++;

    if (jumpAnimationNumber <= 6){
        ninjaMarginTop = ninjaMarginTop -35;
        ninja.style.top = ninjaMarginTop + "px";
    }
    if (jumpAnimationNumber >= 7){
        ninjaMarginTop = ninjaMarginTop +35;
        ninja.style.top = ninjaMarginTop + "px";
    }

    if (jumpAnimationNumber == 11){
        jumpAnimationNumber = 1;
        clearInterval(jumpAnimationStartNumber);
        jumpAnimationStartNumber = 0;
        runAnimationStart();
    }

    ninja.src = "asset/img/sprites/Jump__"+jumpAnimationNumber+".png";
}

function jumpAnimationStart() {
    clearInterval(idleAnimationNumber);
    idleAnimationNumber = 0;
    clearInterval(runAnimationStartNumber);
    runAnimationStartNumber = 0;
    jumpAnimationStartNumber = setInterval(jumpAnimation,80);
}



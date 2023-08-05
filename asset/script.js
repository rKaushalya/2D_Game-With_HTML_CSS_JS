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
        if (boxAnimationId == 0){
            boxAnimationId = setInterval(boxAnimation,80);
        }
    }
    if (event.code == "Space"){
        if (jumpAnimationStartNumber == 0){
            jumpAnimationStart();
        }
        if (moveBackgroundId == 0){
            moveBackgroundId = setInterval(moveBackground,80);
        }
        if (boxAnimationId  == 0){
            boxAnimationId = setInterval(boxAnimation,80);
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
        ninjaMarginTop = ninjaMarginTop -55;
        ninja.style.top = ninjaMarginTop + "px";
    }
    if (jumpAnimationNumber >= 7){
        ninjaMarginTop = ninjaMarginTop +55;
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

let left = 580;

function createBoxes() {
    for (let i = 0; i < 10; i++) {
        let box = document.createElement("div");
        box.className = "box";
        document.getElementById("background").appendChild(box);
        box.style.left = left + "px";
        box.id = "box" + i;

        if (i <= 5){
            left += 600;
        }
        if (i >= 5){
            left += 400;
        }
    }
}

let boxAnimationId = 0;

function boxAnimation() {
    for (let i = 0; i < 10; i++) {
        var id = document.getElementById("box"+i);
        var currentLeft = getComputedStyle(id).left;
        var newLeft = parseInt(currentLeft) -25;
        id.style.left = newLeft + "px";

        if (newLeft > -95 & newLeft <= 100){
            if (ninjaMarginTop > 360){
                clearInterval(boxAnimationId);

                clearInterval(runAnimationStartNumber);
                runAnimationStartNumber = -1;

                clearInterval(jumpAnimationStartNumber);
                jumpAnimationStartNumber = -1;

                clearInterval(moveBackgroundId);
                moveBackgroundId = -1;

                deadAnimationNumber = setInterval(deathAnimation,100);
            }
        }
    }
}

let deadImageNumber = 0;
let deadAnimationNumber = 0;

function deathAnimation(){
    deadImageNumber ++;

    if (deadImageNumber == 11){
        deadImageNumber = 10;
    }

    ninja.src = "asset/img/sprites/Dead__"+deadImageNumber+".png";
    ninja.style.width = '12%';
    ninja.style.top = '470px';
}





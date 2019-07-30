let imgCounter = 1;
let timer = 0;

window.onload = function() {
    banerLoop();
}

let startBannerLoop = setInterval(function() {
    banerLoop();
}, timer); 

let firstImg = document.querySelector("#img1");
let secondImg = document.querySelector("#img2");
let thirdImg = document.querySelector("#img3");

function banerLoop() {
    if(imgCounter === 1) {
        secondImg.style.opacity = "0";

        setTimeout(function(){
            firstImg.style.right = "0px";
            firstImg.style.zIndex = "1000";
            secondImg.style.right = "-100vw";
            secondImg.style.zIndex = "1500";
            thirdImg.style.right = "100vw";
            thirdImg.style.zIndex = "500";
         }, 500);
     
        setTimeout(function(){
            secondImg.style.opacity = "1";
        }, 1000);

        imgCounter = 2;
    }

    else if(imgCounter === 2) {
        thirdImg.style.opacity = "0";

        setTimeout(function(){
            secondImg.style.right = "0px";
            secondImg.style.zIndex = "1000";
            thirdImg.style.right = "-100vw";
            thirdImg.style.zIndex = "1500";
            firstImg.style.right = "100vw";
            firstImg.style.zIndex = "500";
         }, 500);
     
        setTimeout(function(){
            thirdImg.style.opacity = "1";
        }, 1000);

        imgCounter = 3;
    }
    else if(imgCounter === 3) {
        firstImg.style.opacity = "0";

        setTimeout(function(){
            thirdImg.style.right = "0px";
            thirdImg.style.zIndex = "1000";
            firstImg.style.right = "-100vw";
            firstImg.style.zIndex = "1500";
            secondImg.style.right = "100vw";
            secondImg.style.zIndex = "500";
         }, 500);
     
        setTimeout(function(){
            firstImg.style.opacity = "1";
        }, 1000);

        imgCounter = 1;
    }
}
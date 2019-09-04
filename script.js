
const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function() {
    const current = this.wordIndex % this.words.length;

    const fulltxt = this.words[current];

    if(this.isDeleting){
        this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Initial Type Speed
    let typeSpeed = 300;
    if(this.isDeleting){
        typeSpeed /= 2;
    }

    //If word is complete
    if(!this.isDeleting && this.txt === fulltxt) {
        //Make a pause at the end
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
}

document.addEventListener("DOMContentLoaded", init);

function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");

    new TypeWriter(txtElement, words, wait);

    let wrapper = document.getElementById("wrapper");
    let topLayer = wrapper.querySelector(".top");
    let handle = wrapper.querySelector(".handle");
    let delta = 0;
    let skew = 0;

    if(wrapper.className.indexOf("skewed") != -1) {
        skew = 990;
    }

    wrapper.addEventListener("mousemove", function(e){
        delta = (e.clientX - window.innerWidth / 2 ) * 0.5;

        handle.style.left = e.clientX + delta + "px";

        topLayer.style.width = e.clientX + skew + delta + "px";
    });
   
}



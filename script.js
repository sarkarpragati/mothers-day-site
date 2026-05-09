function enterSite(){

    document.getElementById("welcome").style.display = "none";

    document.getElementById("main-content").style.display = "block";
}


/* Typing Animation */

const text =
"Thank you for loving me endlessly, supporting me silently, and standing beside me always ❤️";

let index = 0;

function typeText(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText,50);
    }
}

typeText();


/* Popup */

function showLove(){

    document.getElementById("popup").style.display = "flex";
}

function closePopup(){

    document.getElementById("popup").style.display = "none";
}


/* Hearts */

for(let i=0;i<25;i++){

    let heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.classList.add("heart");

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration =
    (Math.random()*5 + 5) + "s";

    document.body.appendChild(heart);
}


/* Flowers */

for(let i=0;i<20;i++){

    let flower = document.createElement("div");

    flower.innerHTML = "🌸";

    flower.classList.add("flower");

    flower.style.left = Math.random()*100 + "vw";

    flower.style.animationDuration =
    (Math.random()*5 + 5) + "s";

    document.body.appendChild(flower);
}


/* Sparkles */

for(let i=0;i<30;i++){

    let sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random()*100 + "vw";

    sparkle.style.top = Math.random()*100 + "vh";

    document.body.appendChild(sparkle);
}


/* Fireflies */

for(let i=0;i<15;i++){

    let firefly = document.createElement("div");

    firefly.classList.add("firefly");

    firefly.style.left = Math.random()*100 + "vw";

    firefly.style.top = Math.random()*100 + "vh";

    document.body.appendChild(firefly);
}


/* Slideshow */

let slides = [

    "images/mom1.jpeg",
    "images/mom2.jpeg",
    "images/mom3.jpeg"
];

let current = 0;

function changeSlide(){

    current++;

    if(current >= slides.length){

        current = 0;
    }

    document.getElementById("slide").src = slides[current];
}

setInterval(changeSlide,3000);
function unlock() {

    let password = document.getElementById("password").value;

    let message = document.getElementById("message");


    if (password === "sanskrithu") {

        message.innerHTML = "✨ Welcome Sansu ❤️";


        setTimeout(function(){

            document.querySelector(".lock-screen")
            .style.display = "none";


            document.getElementById("mainContent")
            .style.display = "block";


        }, 1000);


    } 
    
    else {

        message.innerHTML =
        "Oops... that's not our secret 💔";

    }

}function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";


    heart.style.left =
    Math.random() * 100 + "%";


    heart.style.animationDuration =
    (Math.random() * 5 + 5) + "s";


    document.querySelector(".hearts")
    .appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },8000);

}


setInterval(createHeart,500);function createStar(){

    const star = document.createElement("div");

    star.className = "star";

    star.innerHTML = "✦";


    star.style.left =
    Math.random() * 100 + "%";


    star.style.top =
    Math.random() * 100 + "%";


    star.style.animationDuration =
    (Math.random() * 3 + 2) + "s";


    document.querySelector(".stars")
    .appendChild(star);

}


for(let i = 0; i < 50; i++){

    createStar();

}
function startStory(){

    let story = document.getElementById("storySection");

    story.classList.remove("hidden");

    revealOnScroll();

    story.scrollIntoView({
        behavior: "smooth"
    });

}

function revealOnScroll(){

    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element)=>{

        let windowHeight = window.innerHeight;

        let elementTop = element.getBoundingClientRect().top;

        let elementVisible = 100;


        if(elementTop < windowHeight - elementVisible){

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

let cards = document.querySelectorAll(".story-card");

cards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.5}s`;

});

// Flip cards

let flipCards = document.querySelectorAll(".flip-card");


flipCards.forEach((card)=>{

    card.addEventListener("click", ()=>{

        card.classList.toggle("active");

    });

});

let reasonsSection = document.querySelector(".reasons-section");


window.addEventListener("scroll", ()=>{

    let position = reasonsSection.getBoundingClientRect().top;

    let screenHeight = window.innerHeight;


    if(position < screenHeight - 100){

        reasonsSection.classList.add("show");

    }

});

let memoryMusic = document.getElementById("memoryMusic");
let memorySection = document.querySelector(".memory-section");

let musicStarted = false;

window.addEventListener("scroll", function () {

    if (musicStarted) return;

    let sectionTop = memorySection.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (sectionTop < screenHeight * 0.7) {

        memoryMusic.play()
            .then(() => {
                musicStarted = true;
            })
            .catch(() => {
                console.log("Autoplay blocked until user interacts.");
            });

    }

});

function showSecret(){

    let secret = document.getElementById("secretMessage");

    secret.classList.remove("hidden");

    secret.scrollIntoView({
        behavior: "smooth"
    });

}

function showFinalSurprise(){

    let final = document.getElementById("finalSurprise");

    final.classList.remove("hidden");

    final.scrollIntoView({
        behavior: "smooth"
    });

}

function updateTimer(){

    let startDate = new Date("January 5, 2026 00:00:00");

    let now = new Date();

    let difference = now - startDate;


    let days = Math.floor(difference / (1000 * 60 * 60 * 24));

    let hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    let minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    let seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}


setInterval(updateTimer, 1000);

updateTimer();
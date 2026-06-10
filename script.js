// Typing Animation

const text =
"Full Stack Developer & Cyber Security Enthusiast";

const typingElement =
document.querySelector(".typing-text");

let index = 0;

typingElement.textContent = "";

function typeText() {

    if(index < text.length){

        typingElement.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 80);
    }

}

typeText();


// Navbar Scroll Effect

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(2,6,23,.98)";

        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,.4)";

    }
    else{

        navbar.style.background =
        "rgba(2,6,23,.9)";

        navbar.style.boxShadow =
        "none";
    }

});


// Scroll Reveal Animation

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

    if(entry.isIntersecting){

        entry.target.classList.add("show");
    }

});

},
{
threshold:0.15
});

document
.querySelectorAll(
".about-card,.skill-card,.project-card,.contact-box"
)
.forEach((el)=>{

observer.observe(el);

});


// Smooth Button Hover Effect

document
.querySelectorAll(".btn")
.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform =
"translateY(-4px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform =
"translateY(0) scale(1)";

});

});


// Social Icon Animation

document
.querySelectorAll(".social-icons a")
.forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform =
"translateY(-5px)";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform =
"translateY(0)";

});

});


// Console Message

console.log(
"Arun PS Portfolio Loaded Successfully"
);
function revealSections() {

    const reveals =
    document.querySelectorAll(".reveal");

    reveals.forEach((element) => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        const revealPoint = 150;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();
let navButton = document.getElementById("nav-btn");
let navFlag = false;

let toggleNav = function()
{
    let navMenu = document.getElementById("nav-links-container");

    if(navFlag === false)
    {
        navMenu.classList.add("open-menu");
        navFlag = true;
    }
    else if(navFlag === true)
    {
        navMenu.classList.remove("open-menu");
        navFlag = false;
    }

}

let linkClick = function()
{
    let navMenu = document.getElementById("nav-links-container");
    navMenu.classList.remove("open-menu");
    navFlag = false;
}

let educationFlag = true;

let toggleWorkDisplay = function()
{
    let educationDisplay = document.getElementById("education");
    let workDisplay = document.getElementById("work");
    let workBtn = document.getElementById("work-btn");
    let educationBtn = document.getElementById("education-btn");
    if(educationFlag === true)
    {
        educationDisplay.classList.remove("experience-active");
        educationBtn.classList.remove("experience-btn-active");
        workDisplay.classList.add("experience-active");
        workBtn.classList.add("experience-btn-active");
        educationFlag = false;
    }
}

let toggleEducationDisplay = function()
{
    let educationDisplay = document.getElementById("education");
    let workDisplay = document.getElementById("work");
    let workBtn = document.getElementById("work-btn");
    let educationBtn = document.getElementById("education-btn");
    if(educationFlag === false)
    {
        workDisplay.classList.remove("experience-active");
        workBtn.classList.remove("experience-btn-active");
        educationDisplay.classList.add("experience-active");
        educationBtn.classList.add("experience-btn-active");
        educationFlag = true;
    }
}


let previousPosition = window.pageYOffset;
window.onscroll = function()
{
    let currentPosition = window.pageYOffset;
    let navMenu = document.getElementById("header");
    if(previousPosition > currentPosition)
    {
        navMenu.style.top = "0";
    }
    else
    {
        navMenu.style.top = "-100%";
    }
    previousPosition = currentPosition;
}

function scrollToTop() 
{
    let backToTop = document.getElementById("back-to-top");
    if(this.scrollY >= 560)
    {
        backToTop.style.bottom = "5rem";
    }
    else
    {
        backToTop.style.bottom = "-20%";
    }
}

window.addEventListener("scroll", scrollToTop);
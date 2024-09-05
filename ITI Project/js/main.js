//
let iconElement = document.querySelector('#icon')
let ulElement = document.querySelector(".links ul")
let navUiItems = document.querySelectorAll("nav .container ul li")
let learnMoreBtn =document.getElementById('learn-more');

if (window.location.href.includes('index.html')) {
    learnMoreBtn.onclick = ()=> {
        location.href = '../html/courses.html'
    }
}

iconElement.onclick = function () {
    ulElement.style.display = "block"
}

document.addEventListener("click", function (event) {
    // Check if the click event occurred outside the menu and icon
    if (event.target !== iconElement ) {
        ulElement.style.display = "none";
    }
});

// handel click in ul spans in corses section 


let allDivs = document.querySelectorAll('.course-details-section-tow .container .row .rgh-side-container .tab-pane');

let spans = document.querySelectorAll('.course-details-section-tow .container .row .lf-side-container ul li span');

let targetIds = Array.from(allDivs).map((div) => div.id);

// add active class on clicked link
spans.forEach((span) => {
    span.onclick = () => {
        spans.forEach((span) => span.classList.remove('active'));
        span.classList.add('active')
        let ID = span.getAttribute('data-targetId')
        showDiv (ID)
    }
})

// add class show on target div
function showDiv (id) {
    allDivs.forEach((div) => div.classList.remove('show'));
    let divWillShow = document.querySelector(id);
    divWillShow.classList.add('show')
}


const scrollToTopButton = document.getElementById("scroll-to-top-button");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) { // Show the buttons when scrolled down 200px
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

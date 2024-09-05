
// Define a function for revealing elements
function revealElements(selector, revealClass, revealPoint) {
    let reveals = document.querySelectorAll(selector);
    for (let i = 0; i < reveals.length; i++) {
        let revealTop = reveals[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add(revealClass);
        } else {
            reveals[i].classList.remove(revealClass);
        }
    }
}

// Define a function for counting numbers
function startCountingNumbers(nums) {
    nums.forEach((num) => {
        let goal = num.dataset.goal;
        let currentValue = 0;
        let interval = setInterval(() => {
            if (currentValue < goal) {
                currentValue++;
                num.textContent = currentValue;
            } else {
                clearInterval(interval);
            }
        }, 1500 / goal);
    });
}

// Add scroll event listeners to reveal elements
window.addEventListener("scroll", () => revealElements(".reveal", "active", 150));
window.addEventListener("scroll", () => revealElements(".reveal_from_right", "active-right", 100));
window.addEventListener("scroll", () => revealElements(".reveal_from_left", "active-left", 100));
window.addEventListener("scroll", () => revealElements(".showFromRight", "show", 100));
window.addEventListener("scroll", () => revealElements(".showFromLeft", "show", 100));


// Check if we are on a specific page and add additional scroll event listener
if (window.location.href.includes('index.html') || window.location.href.includes('about.html')) {
    window.addEventListener("scroll", scroll);
}

let windowHeight = window.innerHeight;
let section_3 = document.querySelector(".sec-3");
let started = false;

// Scroll function for counting numbers
function scroll() {
    let revealPoint = 100;
    let revealTop = section_3.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint && !started) {
        started = true;
        startCountingNumbers(document.querySelectorAll(".nums .num"));
    }
}

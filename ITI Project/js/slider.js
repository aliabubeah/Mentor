
// slider
// create array from imgs inside container
let sliderImgs =Array.from (document.querySelectorAll(".slider-card"));

console.log(sliderImgs)
// img length
let slidesCount = sliderImgs.length

console.log(slidesCount)
// set currant slide
let currantSlide = 1;


// create ul bullets
function createUlElement(sCount) {
    // create pagination Element
    let paginationElement = document.createElement("ul");
    paginationElement.id = 'pagination-ul'
    for (let index = 1; index <= sCount; index++) {
        // create pagination Items
        let paginationItems = document.createElement("li");
        paginationItems.dataset.index = index;
        paginationItems.append(document.createTextNode(index));
        paginationElement.append(paginationItems);
    }
    document.getElementById('indicators').append(paginationElement);
}

// create Ul 
createUlElement(slidesCount);

// get pagination UL element
let paginationCreatedUl = document.getElementById('pagination-ul')
let paginationArray = Array.from(document.querySelectorAll('#pagination-ul li'));

// handle click on the bullets
for (let i = 0; i < paginationArray.length; i++) {
    paginationArray[i].onclick = function() {
        currantSlide = parseInt(this.getAttribute('data-index'));
        checker()
    }
}


// checker function
function checker() {
    // set and remove active class on current img
    sliderImgs.forEach((slide) => {
        slide.classList.remove('active');
        sliderImgs.forEach((slide, index) => {
            if (currantSlide-1 === index){
                slide.classList.add('active')
            }
        })
    })
    // set and remove active class on pagination Item
    paginationArray.forEach((bullets) => {
        bullets.classList.remove('active')
        paginationArray.forEach((bullets, index) => {
            if (currantSlide -1 === index) {
                bullets.classList.add('active')
            }
        })
    })
}

checker() 

// ... (previous code)

// Function to advance to the next slide
function nextSlide() {
    currantSlide++;
    if (currantSlide > slidesCount) {
        currantSlide = 1;
    }
    checker();
}

// Automatically advance the slider every 3 seconds
const slideInterval = setInterval(nextSlide, 2000);

// Stop the automatic sliding when the user clicks on a pagination bullet
for (let i = 0; i < paginationArray.length; i++) {
    paginationArray[i].onclick = function () {
        currantSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }
}

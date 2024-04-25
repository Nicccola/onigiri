const onigiri = document.querySelector('.onigiri');
const bites = document.querySelectorAll('.bite');
const shadow = document.querySelector('.shadow');
const crumb = document.querySelector('.crumb'); 
const lastCrumbs = document.querySelector('.last-crumb');
const startAgain = document.querySelector('.eat-again');

let currentIndex = 0; 
let animationComplete = false; 
let currentSprinkleIndex = 0; 

//Function to reset animation 
function eatAgain() {
    bites.forEach(bite => {
        bite.classList.add('hide-bite');
    });
    currentIndex = 0; 
    animationComplete = false;
    crumb.classList.add('hide-bite');
    lastCrumbs.classList.add('hide-bite');
    startAgain.classList.add('hide');

    setShadowWidth('17rem');
}

//Take a bite every click & adjust shadow size 
function nextBite() {
    if (!animationComplete) {
        if (currentIndex < bites.length) {
        bites[currentIndex].classList.remove('hide-bite');
        currentIndex++;
   
        if (currentIndex === 6) {
            setShadowWidth('12rem');
            crumb.classList.remove('hide-bite');
        }

        if (currentIndex === 7) {
            setShadowWidth('9rem'); 
        }

        if (currentIndex === bites.length) {
            setShadowWidth('0rem'); 
            lastCrumbs.classList.remove('hide-bite');
            startAgain.classList.remove('hide');
         } 
  } else {
        eatAgain();
    } 
  } 
}


function setShadowWidth(width) {
    shadow.style.width = width;
}

document.addEventListener('click', function(event) {
    nextBite();
});

//Add eating 'effect' to each bite
const sprinkles = document.querySelectorAll('.sprinkles');

function nextSprinkle() {
    if (!animationComplete) {
        if (currentSprinkleIndex < sprinkles.length) {
            const currentSprinkles = sprinkles[currentSprinkleIndex];
            currentSprinkles.classList.remove('hide-sprinkle');
            currentSprinkleIndex++;

            setTimeout(function() {
                currentSprinkles.classList.add('hide-sprinkle');
            }, 600);
        } else {
            currentSprinkleIndex = 0; 
        }
    } 
}

document.addEventListener('click', function(event) {
    nextSprinkle();
});


//Create bouncing up & down effect 
const onigiriBounce = document.querySelector('.onigiri-bounce');
const shadowBounce = document.querySelector('.shadow-bounce'); 
const clickMe = document.querySelector('.click');

document.addEventListener('click', stopBounce);

function stopBounce() {
    onigiriBounce.classList.remove('onigiri-bounce');
    shadowBounce.classList.remove('shadow-bounce'); 
    clickMe.classList.add('hide-click');

    onigiri.removeEventListener('click', stopBounce);
}



let background = document.getElementById('background');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let front = document.getElementById('front');
let header = document.querySelector('header');
let parent = document.querySelector('#parent'); 

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  background.style.left = value + 'px';
  text.style.marginRight = value * 2 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';

  // Check the animation on scroll
  checkAnimation();
});

// Function to handle typewriter effect
function typewriterEffect() {
    const textElement = document.getElementById('typewriter');
    const text = textElement.textContent;
    textElement.textContent = ''; // Clear the text
  
    let i = 0;
    const speed = 50; // Typing speed in milliseconds
  
    function type() {
      if (i < text.length) {
        textElement.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
  
    type();
  }
  
  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll events
  function handleScroll() {
    const parentElement = document.querySelector('#parent');
    
    if (isInViewport(parentElement)) {
      typewriterEffect();
      window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener once triggered
    }
  }
  
  // Add a scroll event listener to trigger the typewriter effect
  window.addEventListener('scroll', handleScroll);
 
// Get references to the cursor images
const normalCursor = 'url("img/cursor_normal.png"), auto';
const clickedCursor = 'url("img/cursor_clicked.png"), auto';

// Variable to track the cursor state
let isCursorClicked = false;

// Function to change cursor
function changeCursor() {
    if (isCursorClicked) {
        document.body.style.cursor = normalCursor;
    } else {
        document.body.style.cursor = clickedCursor;
    }
}

// Add a click event listener to toggle the cursor state
document.addEventListener('click', () => {
    isCursorClicked = !isCursorClicked;
    changeCursor();
});

// Set the initial cursor
changeCursor();
  

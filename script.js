// Get references to DOM elements
let background = document.getElementById('background'); // The background element
let text = document.getElementById('text'); // The text element
let btn = document.getElementById('btn'); // The button element
let front = document.getElementById('front'); // The front element
let header = document.querySelector('header'); // The header element
let parent = document.querySelector('#parent'); // The parent element

// Add a scroll event listener to respond to user scrolling
window.addEventListener('scroll', function () {
  let value = window.scrollY;

  // Update the position of elements based on scroll value
  background.style.left = value + 'px';
  text.style.marginRight = value * 2 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';

  // Check for animations when scrolling
  checkAnimation();
});

// Function to handle a typewriter effect
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

// Add a scroll event listener to trigger the typewriter effect when the parent element is in the viewport
window.addEventListener('scroll', handleScroll);

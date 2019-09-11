// Your code goes here

// Main-navigation
const navBackground = document.querySelector('.main-navigation');
navBackground.addEventListener('mouseover', function(e){
    e.target.style.background = 'yellow';
    e.preventDefault();
});

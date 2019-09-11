// Your code goes here

// Main-navigation
const navBackground = document.querySelector('.main-navigation');
navBackground.addEventListener('mouseover', function(e){
    e.target.style.background = 'yellow';
    e.preventDefault();
});

// Body
const bodyStyle = document.querySelector('body');
bodyStyle.addEventListener('wheel', function(e){
    e.target.style.background= 'lightBlue';
});

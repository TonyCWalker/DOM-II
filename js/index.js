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

// Logo
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('dblclick', function(e){
    e.target.style.color='lightblue';
    e.target.style.fontWeight ='bold';
    e.target.style.fontSize= '80px';
});

// Navigation item
const navLink = document.querySelector('nav');
navLink.addEventListener('click', function(e){
    e.target.style.fontSize= '25px';
    e.target.style.fontWeight= 'bold';
    e.target.style.color= 'purple';
    console.log(`This is the ${e.srcElement.innerText} link!`); 
});

// Header image
const headerImg = document.querySelector('header img');
headerImg.addEventListener('mousemove', function(e){
    e.target.style.padding= '40px 40px';
    e.stopPropagation();
});

// Intro title
const headerTitle = document.querySelector('.intro h2');
headerTitle.addEventListener('mouseup', function(e){
    e.target.style.visibility= 'hidden';
    console.log('Where did the title go!');
});
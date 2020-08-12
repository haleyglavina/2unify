// Adjust socials dropdown menu visibility for mobile view
const dropdown = document.querySelector('.socials__dropdown');
const socialIcons = document.querySelector('.socials__icons');
let socialsDisplayed = false;

// Show/hide dropdown from clicking on dropdown icon
dropdown.addEventListener('click', e => {
    if (socialsDisplayed) {
        socialsDisplayed = false;
        socialIcons.style.display = "none";

    } else {
        socialsDisplayed = true;
        socialIcons.style.display = "block";
    }
});

// Hide dropdown from clicking anywhere off dropdown
document.querySelector('body').addEventListener('click', e => {
    if (!e.target.closest('.socials__dropdown')) {
        socialIcons.style.display = "none";
        socialsDisplayed = false;
    }
});

// Social icon hover effects
const insta = document.querySelectorAll('.socials__insta');
const fb = document.querySelectorAll('.socials__fb');
const linkedin = document.querySelectorAll('.socials__linkedin');

const colouredHover = (iconElements, iconName) => {
    iconElements.forEach(icon => {
        icon.addEventListener('mouseover', e => {
            e.target.src = `../assets/images/${iconName}-hover.svg`;});
        icon.addEventListener('mouseout', e => {
            e.target.src = `../assets/images/${iconName}.svg`;});
    });
}

colouredHover(insta, 'instagram');
colouredHover(fb, 'facebook');
colouredHover(linkedin, 'linkedin');
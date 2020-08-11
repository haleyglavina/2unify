// Drop-down socials menu on moblie view
const dropdown = document.querySelector('.socials__dropdown');
const socialIcons = document.querySelector('.socials__icons');

let socialsDisplayed = false;

dropdown.addEventListener('click', e => {
    if (socialsDisplayed) {
        // hide socials dropdown
        socialsDisplayed = false;
        socialIcons.style.display = "none";

    } else {
        // show socials dropdown
        socialsDisplayed = true;
        socialIcons.style.display = "block";
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
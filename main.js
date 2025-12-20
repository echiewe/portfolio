'use strict';
document.addEventListener('DOMContentLoaded', function() {
    /* ---------------------------------  WAVE ANIMATION  --------------------------------- */
    const welcome = "Welcome to my portfolio!";
    const text = document.getElementById('wave-text');
    const shadow = document.getElementById('wave-shadow');

    text.innerHTML = welcome
    .split('')
    .map((char, i) => `<span style="--i:${i}">${char}</span>`)
    .join("");

    shadow.innerHTML = welcome
    .split('')
    .map((char, i) => `<span style="--i:${i}">${char}</span>`)
    .join("");

    /* ---------------------------------  INTRO MENU NAV  --------------------------------- */
    // nav items
    const aboutMeNav = document.getElementById('about-me-nav');
    const workExpNav = document.getElementById('work-exp-nav');
    const skillsNav = document.getElementById('skills-nav');

    // content
    const aboutMe = document.getElementById('about-me');
    const workExp = document.getElementById('work-exp');
    const skills = document.getElementById('skills');

    const header = document.getElementById('intro-section');

    aboutMeNav.addEventListener('click', function() {
        aboutMe.style.display = 'block';
        workExp.style.display = 'none';
        skills.style.display = 'none';
        header.textContent = "About Me";
        aboutMeNav.style.borderBottom = '2px solid var(--accent)';
        workExpNav.style.borderBottom = 'none';
        skillsNav.style.borderBottom = 'none';
    });
    workExpNav.addEventListener('click', function() {
        aboutMe.style.display = 'none';
        workExp.style.display = 'block';
        skills.style.display = 'none';
        header.textContent = "Work Experience";
        aboutMeNav.style.borderBottom = 'none';
        workExpNav.style.borderBottom = '2px solid var(--accent)';
        skillsNav.style.borderBottom = 'none';
    });
    skillsNav.addEventListener('click', function() {
        aboutMe.style.display = 'none';
        workExp.style.display = 'none';
        skills.style.display = 'block';
        header.textContent = "Skills";
        aboutMeNav.style.borderBottom = 'none';
        workExpNav.style.borderBottom = 'none';
        skillsNav.style.borderBottom = '2px solid var(--accent)';
    });
});
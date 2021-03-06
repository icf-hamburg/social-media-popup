/* 
* Social Media Pop-Up
* Copyright © ICF Hamburg
*/

/* Modal-Hintergrund */
var modalBackground = document.createElement('div');
modalBackground.setAttribute('class', 'modal-background');
modalBackground.onclick = function(event) {
    if(event.target == modalBackground) {
        modalBackground.remove();
    }
}

modalBackground.style.cssText = `
top:0; 
display:flex; 
justify-content: center; 
align-items: center; 
width: 100%; 
height: 100%; 
background-color: rgba(0, 0, 0, 0.7); 
position: fixed;
z-index: 10;
`;

/* Modal-Popop-Fenster */
var modalWindow = document.createElement('div');
modalWindow.setAttribute('class', 'modal-content');
modalWindow.style.cssText = `
background-color: white;
border-radius: 7px;
max-width: 30rem;
text-align: center;

padding: 1rem;
padding-top: 10 rem;

position: relative;
z-index: 11;
`;

modalBackground.appendChild(modalWindow);

/* Button zum Schließen */
var closeButton = document.createElement('a');
closeButton.innerHTML = '+';
closeButton.setAttribute('class', 'modal-close');
closeButton.onclick = function(event) {
    event.preventDefault();
    modalBackground.remove();
}

closeButton.style.cssText = `
position: absolute;
top: 0;
right: 0.5rem;
cursor: pointer;

font-size: 2rem;
text-decoration: none;
color: black;

transform: rotate(45deg);
z-index: 12;
`;

modalWindow.appendChild(closeButton);

function openModal() {
    if (!cookieSet()) {
        writeCookie();
        document.body.appendChild(modalBackground);
    }
}

function writeCookie() {
    // Sets cookie with an expiration date 6 months in the future

    let now = new Date();
    now.setMonth( now.getMonth() + 6);

    let key = 'popupShown'
    let value = 'true'
    
    document.cookie = `${key}=${value};path=/;expires=${now.toUTCString()}`;
}

function deleteCookie(name) {
    document.cookie = `${name}=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

function cookieSet() {
    // Creates object out of cookie string and checks for cookie, returning a boolean
    var cookies = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => 
        ({...accumulator, [key.trim()]: decodeURIComponent(value)}), 
    {});

    if (cookies.popupShown == "true") {
        return true;
    } else return false;
}

/* Inhalte */
function createIcon(buttonId, imageUrl, darkImageUrl, linkUrl) {
    var iconContainer = document.createElement('a')
    iconContainer.setAttribute('href', linkUrl);
    iconContainer.setAttribute('id', buttonId);
    iconContainer.setAttribute('class', 'social-media-button');
    iconContainer.style.textDecoration = "none;";

    var socialMediaIcon = document.createElement('img');
    socialMediaIcon.setAttribute('src', imageUrl);
    socialMediaIcon.style.cssText = `
    width: 5rem;
    margin: 10px;
    z-index: 12;
    `;

    socialMediaIcon.addEventListener('mouseenter', e => {
        socialMediaIcon.setAttribute('src', darkImageUrl);
    });

    socialMediaIcon.addEventListener('mouseleave', e => {
        socialMediaIcon.setAttribute('src', imageUrl);
    });

    iconContainer.appendChild(socialMediaIcon);
    modalWindow.appendChild(iconContainer);
}

function createTitle() {
    var text = document.createElement('h3');
    text.style.marginTop = '5px';
    text.innerHTML = 'Moin, moin!';
    modalWindow.appendChild(text);
}

function createText() {
    var text = document.createElement('p');
    text.innerHTML = 'Willst du uns noch besser kennenlernen? Dann schau bei unseren sozialen Medien vorbei.';
    modalWindow.appendChild(text);
}

setTimeout(openModal, 40000);

/* Layout Generieren */ 
createIcon('popup-facebook-button', 'https://icf-hamburg.github.io/social-media-popup/icons/facebook-icon.png', 'https://icf-hamburg.github.io/social-media-popup/icons/facebook-dark-icon.png', 'https://www.facebook.com/icfhamburg/');
createIcon('popup-instagram-button', 'https://icf-hamburg.github.io/social-media-popup/icons/instagram-icon.png', 'https://icf-hamburg.github.io/social-media-popup/icons/instagram-dark-icon.png', 'https://www.instagram.com/icfhamburg/');
createIcon('popup-telegram-button', 'https://icf-hamburg.github.io/social-media-popup/icons/telegram-icon.png', 'https://icf-hamburg.github.io/social-media-popup/icons/telegram-dark-icon.png', 'https://t.me/ICFHH');
createIcon('popup-youtube-button', 'https://icf-hamburg.github.io/social-media-popup/icons/youtube-icon.png', 'https://icf-hamburg.github.io/social-media-popup/icons/youtube-dark-icon.png', 'https://www.youtube.com/channel/UC89iSG16TeT75MUNCQS3iag');

createTitle();
createText();
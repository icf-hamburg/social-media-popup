/* 
* Social Media Pop-Up
* Copyright © ICF Hamburg
*/

/* Modal-Hintergrund */
var modalBackground = $('<div></div>');
modalBackground.attr('class', 'modal-background');
modalBackground.click(function (e) { 
    e.preventDefault();
    if ($(e.target).is('.modal-background')) {
        modalBackground.remove();
    }
});
modalBackground.attr('style', `
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.7);
position: absolute;
top:0;
display:flex;
justify-content: center;
align-items: center;
`);

/* Modal-Popop-Fenster */
var modalWindow = $('<div></div>');
modalWindow.attr('class', 'modal-content');
modalWindow.attr('style', `
background-color: white;
border-radius: 7px;
max-width:30rem;
text-align: center;

padding: 1rem;
padding-top: 10 rem;

position: relative;
`);

$(modalWindow).appendTo(modalBackground);

/* Button zum Schließen */
var closeButton = $('<a>+</a>');
closeButton.attr('class', 'modal-close');
closeButton.attr('onClick', '$(".modal-background").remove();');
closeButton.attr('style', `
position: absolute;
top: 0;
right: 0.5rem;
cursor: pointer;

font-size: 2rem;
text-decoration: none;
color: black;

transform: rotate(45deg);
`);
$(closeButton).appendTo(modalWindow);

function openModal() {
    $(modalBackground).appendTo('body');
}

/* Inhalte */
function createIcon(imageUrl, darkImageUrl, linkUrl) {
    var iconContainer = $('<a></a>');
    iconContainer.attr('href', linkUrl);
    iconContainer.attr('style', `
    text-decoration: none;
    `)
    
    var socialMediaIcon = $('<img>');
    socialMediaIcon.attr('src', imageUrl);
    socialMediaIcon.attr('style', `
    width: 5rem;
    margin: 10px;
    `);

    socialMediaIcon.mouseenter(function() {
        $(this).attr('src', darkImageUrl);
    });

    socialMediaIcon.mouseleave(function() {
        $(this).attr('src', imageUrl);
    });

    $(socialMediaIcon).appendTo(iconContainer);
    $(iconContainer).appendTo(modalWindow);
}

function createTitle() {
    var text = $('<h3></h3>');
    text.text('Moin, moin!');
    $(text).appendTo(modalWindow);
}

function createText() {
    var text = $('<p></p>');
    text.text('Schau dir gerne mal unsere sozialen Medien an!');
    $(text).appendTo(modalWindow);
}

setTimeout(openModal, 5000);

createIcon('icons/facebook-icon.png', 'icons/facebook-dark-icon.png', 'https://www.facebook.com/icfhamburg/');
createIcon('icons/instagram-icon.png', 'icons/instagram-dark-icon.png', 'https://www.instagram.com/icfhamburg/');
createIcon('icons/telegram-icon.png', 'icons/telegram-dark-icon.png', 'https://t.me/ICFHH');
createIcon('icons/youtube-icon.png', 'icons/youtube-dark-icon.png', 'https://www.youtube.com/channel/UC89iSG16TeT75MUNCQS3iag');

createTitle();
createText();
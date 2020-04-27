/* Modal-Hintergrund */
var modalBackground = $('<div></div>');
modalBackground.attr('class', 'modal-background');
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

$(modalBackground).appendTo('html');

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
font-weight: bold;
text-decoration: none;
color: black;

transform: rotate(45deg);
`);
$(closeButton).appendTo(modalWindow);

/* Inhalte */
function createIcon(imageUrl, linkUrl) {
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

    $(socialMediaIcon).appendTo(iconContainer);
    $(iconContainer).appendTo(modalWindow);
}

loremIpsum = `
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
`
function createTitle() {
    var text = $('<h3></h3>');
    text.text('Sed ut perspiciatis');
    $(text).appendTo(modalWindow);
}

function createText() {
    var text = $('<p></p>');
    text.text(loremIpsum);
    $(text).appendTo(modalWindow);
}


createIcon('icons/facebook.svg', 'https://www.facebook.com/icfhamburg/');
createIcon('icons/instagram.svg', 'https://www.instagram.com/icfhamburg/');
createIcon('icons/telegram.svg', 'https://t.me/ICFHH');
createIcon('icons/youtube.svg', 'https://www.youtube.com/channel/UC89iSG16TeT75MUNCQS3iag');

createTitle();
createText();
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
text-align: center;

padding: 1rem;
padding-top: 10 rem;

position: relative;
`);

$(modalWindow).appendTo(modalBackground);

/* Inhalte */
var closeButton = $('<a>+</a>');
closeButton.attr('class', 'modal-close');
closeButton.attr('href', '#');
closeButton.attr('style', `
position: absolute;
top: 0;
right: 0.5rem;

font-size: 2rem;
font-weight: bold;
text-decoration: none;
color: black;

transform: rotate(45deg);
`);
$(closeButton).appendTo(modalWindow);

function createIcon(url) {
    var socialMediaIcon = $('<img>');
    socialMediaIcon.attr('src', url);
    socialMediaIcon.attr('style', 'width: 5rem;');

    $(socialMediaIcon).appendTo(modalWindow);
}

createIcon('icons/facebook.svg');
createIcon('icons/telegram.svg');
createIcon('icons/instagram.svg');
createIcon('icons/youtube.svg');
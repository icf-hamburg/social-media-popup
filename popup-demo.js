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

console.log('Styling background...');
modalBackground.style.cssText = `
top:0; 
display:flex; 
justify-content: center; 
align-items: center; 
width: 100%; 
height: 100%; 
background-color: rgba(0, 0, 0, 0.7); 
position: absolute;`;

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
`;

modalBackground.appendChild(modalWindow);

/* Button zum Schließen */
var closeButton = document.createElement('a');
closeButton.innerHTML = '+';
closeButton.setAttribute('class', 'modal-close');
closeButton.onclick = modalBackground.remove();

closeButton.style.cssText = `
position: absolute;
top: 0;
right: 0.5rem;
cursor: pointer;

font-size: 2rem;
text-decoration: none;
color: black;

transform: rotate(45deg);
`;

modalWindow.appendChild(closeButton);

function openModal() {
    document.body.appendChild(modalBackground);
}

/* Inhalte */
// function createIcon(imageUrl, darkImageUrl, linkUrl) {
//     var iconContainer = $('<a></a>');
//     iconContainer.attr('href', linkUrl);
//     iconContainer.attr('style', `
//     text-decoration: none;
//     `)
    
//     var socialMediaIcon = $('<img>');
//     socialMediaIcon.attr('src', imageUrl);
//     socialMediaIcon.attr('style', `
//     width: 5rem;
//     margin: 10px;
//     `);

//     socialMediaIcon.mouseenter(function() {
//         $(this).attr('src', darkImageUrl);
//     });

//     socialMediaIcon.mouseleave(function() {
//         $(this).attr('src', imageUrl);
//     });

//     $(socialMediaIcon).appendTo(iconContainer);
//     $(iconContainer).appendTo(modalWindow);
// }

// function createTitle() {
//     var text = $('<h3></h3>');
//     text.text('Moin, moin!');
//     $(text).appendTo(modalWindow);
// }

// function createText() {
//     var text = $('<p></p>');
//     text.text('Schau dir gerne mal unsere sozialen Medien an!');
//     $(text).appendTo(modalWindow);
// }

//setTimeout(openModal, 5000);
openModal();

// createIcon('icons/facebook-icon.png', 'icons/facebook-dark-icon.png', 'https://www.facebook.com/icfhamburg/');
// createIcon('icons/instagram-icon.png', 'icons/instagram-dark-icon.png', 'https://www.instagram.com/icfhamburg/');
// createIcon('icons/telegram-icon.png', 'icons/telegram-dark-icon.png', 'https://t.me/ICFHH');
// createIcon('icons/youtube-icon.png', 'icons/youtube-dark-icon.png', 'https://www.youtube.com/channel/UC89iSG16TeT75MUNCQS3iag');

// createTitle();
// createText();
var modal = $('<div></div>');
modal.attr('class', 'modal-background');
modal.attr('style', `
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.7);
position: absolute;
top:0;
display:flex;
justify-content: center;
align-items: center;
`);

$(modal).appendTo('html');

var modalContent = $('<div></div>');
modalContent.attr('class', 'modal-content');
modalContent.attr('style', `
width: 500px;
height: 300px;
background-color: white;
border-radius: 7px;
text-align: center;
`);

$(modalContent).appendTo(modal);
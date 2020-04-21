function setFont() {
    fontStylesheet = $('link');
    fontStylesheet.attr('href', 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    fontStylesheet.attr('rel', 'stylesheet');
    $('h1').css("font-family", "Roboto");
}

function runDummyCode() {
    const txt1 = "<h1>Abboniere unsere Social Media Kanäle</h1>";               // Create element with HTML      
    const txt2 = $("<p></p>").text("Text.");   // Create with jQuery     var txt3 = document.createElement("p");  // Create with DOM
    $("body").append(txt1, txt2);      // Append the new elements 
}

function setTimer() {
    // TODO: Timer implementieren
}

function createPopUpWindow() {
    popUpWindow = $('div');
    popUpWindow.attr('id', 'icf-social-media-popup');
    popUpWindow.css('width', '180rem')
}

function createPopUp() {
    createPopUpWindow()
}

function runPopUp() {}

function main() {
    runDummyCode()
    setFont()
}

main()
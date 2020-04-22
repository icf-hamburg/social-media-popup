function loadMaterializeCSS() {
    /* 
    Materialize: CSS-Framework für App GUIs 
    https://materializecss.com
    */

    // CSS
    materialStylesheet = $('link');
    materialStylesheet.attr('rel', 'stylesheet');
    materialStylesheet.attr('href', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
    $('head').append(materialStylesheet);
    
    // JavaScript
    materialScripts = $('script');
    materialScripts.attr('src', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
    $('body').append(materialScripts);
}


function setTimer() {
    // TODO: Timer implementieren
}

function createContainer() {
    const container = $('div')
    container.attr('class', 'container')
    $('body').append(container);
}

function createPopUp() {
    popUpWindow = $('div');
    popUpWindow.attr('class', 'card');
    popUpWindow.css('width', '180rem')

    content = $('p')
    const contentString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    content.text(contentString)
    popUpWindow.append()
}

function main() {
    loadMaterializeCSS()
    createContainer()
}

main()
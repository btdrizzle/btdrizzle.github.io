//Array of objects - project links for portfolio.html //
var portfolioLinks = [
    {name: "Weather API with Charts",
    link: "https://btdrakeweatherapp.herokuapp.com/",
    pic: "./images/weatherapp.png"},
    {name: "Google Books Search",
    link: "https://btdrakegooglebooks.herokuapp.com/",
    pic: "./images/google.png"},
    {name: "React Memory Game",
    link: "https://btdrizzle.github.io/reactclickygame/",
    pic: "./images/reactclicky.png"},
    {name: "Cowboy Boots E-Commerce Store",
    link: "https://boots-n-stuff.herokuapp.com/",
    pic: "./images/boots.png"},
    {name: "Friend Finder Interactive App",
    link: "https://btdrakefriendfinder.herokuapp.com/",
    pic: "./images/friendFinder.png"},
    {name: "SQL Handlebars Burger App",
    link: "https://btdrakeburger.herokuapp.com/",
    pic: "./images/burger.png"},
    {name: "Hooligans Interactive Game",
    link: "https://irichard03.github.io/Project1/index.html",
    pic: "./images/hooligans.png"},
    {name: "Liri CLI Server-Side Entertainment Search Engine",
    link: "https://github.com/btdrizzle/liri-node-app",
    pic: "./images/liri.png"},
    {name: "Word Guess CLI Game",
    link: "https://github.com/btdrizzle/WordGuess-CLI",
    pic:"./images/wordGuess.png" },
    {name: "Interactive Giphy Search",
    link: "https://btdrizzle.github.io/GifsNotJifs/index.html",
    pic: "./images/gifs.png"},
    {name: "Horror Movie Trivia Game",
    link: "https://btdrizzle.github.io/TriviaGame/index.html",
    pic: "./images/trivia.png"},
    {name: "RPSLS Multiplayer Game",
    link: "https://btdrizzle.github.io/RPSLS-Multiplayer/index.html",
    pic: "./images/rpsls.png"},
]
//Creating project display  / links on portfolio.html //
portfolioLinks.forEach(function(link) {
    let newDiv = $('<div>');
    newDiv.addClass('view overlay d-inline-block work mr-2 mb-2 z-depth-2');
    newDiv.attr('data-name',link.name);
    newDiv.attr('data-link',link.link);
    let newImg = $('<img>');
    newImg.addClass('img-fluid workImg');
    newImg.attr('src',link.pic);
    let subDiv = $('<div>');
    subDiv.addClass('mask flex-center rgba-blue-strong');
    let newP = $('<p>');
    newP.addClass('white-text');
    newP.text(link.name);
    subDiv.append(newP);
    newDiv.append(newImg);
    newDiv.append(subDiv);
    $('#projects').append(newDiv);
})
//Opens Links in Projects on Profile Page //
$(document).on('click','.work', function() {
    window.open($(this).attr('data-link'));
})
//Opens Modal with Contact Info //
$(document).on('click','#contactModalOpen',function() {
    $('#contactModal').modal('show');
});


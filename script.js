//Array of objects - project links for portfolio.html //
var portfolioLinks = [
    {name: "Hooligans Interactive Game",
    link: "https://irichard03.github.io/Project1/index.html",
    pic: "./images/hooligans.png"},
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


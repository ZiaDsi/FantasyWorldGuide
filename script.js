
function showPage(pageId) {

    document.getElementById("mainMenu").hidden = true;
    document.getElementById("introduction").hidden = true;
    document.getElementById("subgenres").hidden = true;
    document.getElementById("recommendations").hidden = true;

    document.getElementById(pageId).hidden = false;

}

function goBack() {

    showPage("mainMenu");

}

function showGenre(genreId) {

    document.getElementById("genreMenu").hidden = true;

    document.getElementById(genreId).hidden = false;

}


function backToGenres() {

    document.getElementById("epicFantasy").hidden = true;
    document.getElementById("darkFantasy").hidden = true;
    document.getElementById("urbanFantasy").hidden = true;

    document.getElementById("genreMenu").hidden = false;

}

function showBookGenre(bookGenreId) {

    document.getElementById("bookMenu").hidden = true;

    document.getElementById(bookGenreId).hidden = false;

}


function backToBookMenu() {

    document.getElementById("epicBooks").hidden = true;
    document.getElementById("darkBooks").hidden = true;
    document.getElementById("urbanBooks").hidden = true;

    document.getElementById("bookMenu").hidden = false;

}

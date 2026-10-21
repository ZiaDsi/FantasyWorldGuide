// IDs of the screens in each navigation level.
const mainPages = ["mainMenu", "introduction", "subgenres", "recommendations"];
const fantasyGenres = ["genreMenu", "epicFantasy", "darkFantasy", "urbanFantasy"];
const bookGenres = ["bookMenu", "epicBooks", "darkBooks", "urbanBooks"];

// Show one screen and hide the others in the same navigation level.
function showOnly(screenIds, selectedId) {
    for (const id of screenIds) {
        document.getElementById(id).hidden = id !== selectedId;
    }
}

// Main menu navigation.
function showPage(pageId) {
    showOnly(mainPages, pageId);
}

function goBack() {
    showPage("mainMenu");
}

// Fantasy subgenre navigation.
function showGenre(genreId) {
    showOnly(fantasyGenres, genreId);
}

function backToGenres() {
    showGenre("genreMenu");
}

// Book recommendation navigation.
function showBookGenre(bookGenreId) {
    showOnly(bookGenres, bookGenreId);
}

function backToBookMenu() {
    showBookGenre("bookMenu");
}

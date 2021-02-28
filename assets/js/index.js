let homePage = $(".home");
let aboutPage = $(".about");
let projectPage = $(".projects");

function showHome() {
    homePage.removeClass("hidden");
    aboutPage.addClass("hidden");
    projectPage.addClass("hidden");
};

function showAbout() {
    aboutPage.removeClass("hidden");
    homePage.addClass("hidden");    
    projectPage.addClass("hidden");
}

function showProjects() {
    projectPage.removeClass("hidden");
    aboutPage.addClass("hidden");
    homePage.addClass("hidden");
}
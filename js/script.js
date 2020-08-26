$(function () {
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth< 990) {
            $("#navbarNav").collapse('hide');
        }        
    });
});

(function (global) {
    var dc ={};
    var homeHtml = "snippets/home-snippet.html";
    global.$dc= dc;
})(window);
$(document).ready(function () {
    resizeBodyTopMargin();
});

$(window).resize(function () {
    resizeBodyTopMargin();
});

function resizeBodyTopMargin() {
    var navHeight = $(".navbar").height();
    if (navHeight > 70) {
        $("body").css("padding-top", 130 + "px");
    }
    else {
        $("body").css("padding-top", 70 + "px");
    }
}
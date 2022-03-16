let aboutTop = $("#about").offset().top
$(window).scroll(function () {
    // console.log('hii');

    let scrollTop = $(window).scrollTop();
    // console.log(scrollTop);
    if (scrollTop >= aboutTop) {
        $("#mainNav").css("background-color", "burlywood")
    }
    else {
        $("#mainNav").css("background-color", "transparent")
    }
})






$(".nav-link").click(function () {
    let Href = $(this).attr("href")
    console.log(Href);
    let aboutTop = $(Href).offset().top
    console.log(aboutTop);
    $("html , body").animate({ scrollTop: aboutTop }, { queue: false, duration: 2000 })
})
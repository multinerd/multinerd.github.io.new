$(function() {
    // Load Animations
    loadWow();

    // Stick footer to bottom of page
    stickyFooterToBottomOfPage();

    // Hide `Scroll to Top` button if already at the top
    $(window).scroll(checkScrollPosition);
    checkScrollPosition();


    // initialize scrollspy
    $('body').scrollspy({
        target: '.dotted-scrollspy'
    });

    $('[data-toggle="tooltip"]').tooltip()


    // initialize lightbox
    $(function () {
        $("#mdb-lightbox-ui").load("/resources/lib/mdbootstrap-4.5.3/mdb-addons/mdb-lightbox-ui.html");
    });

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

});


function loadWow() {
    new WOW().init();
}

function stickyFooterToBottomOfPage() {
    var doc = $(window);
    var footer = $('#footer');

    // Force footer to bottom of page
    var docHeight = doc.height();
    var footerHeight = footer.height();
    var footerTop = footer.position().top + footerHeight;

    if (footerTop < docHeight) {
        footer.css('margin-top', 10 + (docHeight - footerTop) + 'px');
    }
}

function checkScrollPosition() {
    var doc = $(window);
    var scrollButton = $('#scrollToTop');

    doc.scrollTop() < 200 ?  scrollButton.fadeOut('slow') : scrollButton.fadeIn('slow');
}
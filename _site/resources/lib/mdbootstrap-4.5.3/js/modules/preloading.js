'use strict';

// Preloading script

$(document).ready(function () {
  $('#preloader-markup').load('/resources/lib/mdbootstrap-4.5.3/mdb-addons/preloader.html', function () {
    $(window).on('load', function () {
      $('#mdb-preloader').fadeOut('slow');
    });
  });
});
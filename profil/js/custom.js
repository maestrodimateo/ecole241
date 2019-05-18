
$(document).ready(function () {
    let img = $('#my-pic');
    TweenLite.from(img, 3, { x: -200, opacity: 0 });
});
/* WINDOW LOAD EVENTS */
jQuery(window).load(function () {
    "use strict";
    jQuery("body").find('#site-loading').fadeOut(500);

    // La carte
    var mymap = L.map('mapid').setView([0.4208681, 9.4418447], 15);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibWFlc3Ryb2RpbWF0ZW8iLCJhIjoiY2pycmp4dTMxMWg2dTN5cHM5dDR4M204ZSJ9.oLlAJspzh3NIuxO-A7jLiw'
    }).addTo(mymap);
    L.marker([0.4208681, 9.4418447]).addTo(mymap);
});

/* SUBMENU */

jQuery('#cv-sidebar').find(".cv-submenu ul > li > a").on('click', function () {
    "use strict";
    var nxt = jQuery(this).next();
    if ((nxt.is('ul')) && (nxt.is(':visible'))) {
        nxt.slideUp(300);
        jQuery(this).removeClass("cvdropdown2").addClass("cvdropdown");
    }
    if ((nxt.is('ul')) && (!nxt.is(':visible'))) {
        jQuery('#cv-sidebar').find('.cv-submenu ul ul:visible').slideUp(300);
        nxt.slideDown(100);
        jQuery('#cv-sidebar').find('.cv-submenu > ul > li:has(ul) > a').removeClass("cvdropdown2").addClass("cvdropdown");
        jQuery(this).addClass("cvdropdown2");
    }
    if (nxt.is('ul')) {
        return false;
    } else {
        return true;
    }
});

/* SIDEBAR */

jQuery("body").find(".cv-menu-button").on("click", function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).toggleClass("rotate-menu-icon");
    jQuery("#cv-sidebar").toggleClass("open");
});

/* BACK TO TOP */

jQuery("#cv-back-to-top").on('click', function (event) {
    "use strict";
    event.preventDefault();
    jQuery('#cv-page-right').animate({
        scrollTop: 0
    }, 500);
});

/* OTHER EVENTS */

jQuery(document).ready(function () {
    "use strict";
    /* SIDEBAR CUSTOM SCROLLBAR */
    if (jQuery(window).width() > 1024) {
        jQuery("#cv-sidebar-inner").mCustomScrollbar({
            scrollInertia: 500,
            autoHideScrollbar: true,
            theme: "light-thick",
            scrollButtons: {
                enable: true
            },
            advanced: {
                updateOnContentResize: true
            }
        });
    }

    /* ADD SUBMENU DROPDOWN ARROWS */
    jQuery('#cv-sidebar').find('.cv-submenu > ul > li:has(ul) > a').addClass("cvdropdown");

    /* DON'T ACTIVATE TOOLTIPS ON MOBILE DEVICES */
    if (jQuery(window).width() > 1024) {

        /* MENU TOOLTIP */
        jQuery("body").find('.tooltip-menu').tooltipster({
            theme: 'tooltipster-dark',
            delay: 0,
            hideOnClick: true,
            touchDevices: false,
            position: 'right',
            animation: 'swing'
        });

        /* GO TO TOP TOOLTIP */
        jQuery("body").find('.tooltip-gototop').tooltipster({
            theme: 'tooltipster-gototop',
            delay: 0,
            hideOnClick: true,
            touchDevices: false,
            position: 'top',
            animation: 'grow'
        });

    }


});
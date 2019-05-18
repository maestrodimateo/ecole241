// GALLERY 1
jQuery('#gallery1').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/gaboniseme.png',
            'thumb': 'images/photos/gaboniseme.png',
            'subHtml': 'Gabonise me'
        }]
    })
});

// GALLERY 2
jQuery('#gallery2').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Videos
        dynamicEl: [
            {
                "src": "images/photos/jobconnect.png",
                'thumb': "images/photos/jobconnect.png",
                "subHtml": "Jobconnect"
            }
        ]
    });
});

// GALLERY 3
jQuery('#gallery3').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: false,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/acte-afrique.PNG',
            'thumb': 'images/photos/acte-afrique.PNG',
            'subHtml': 'Refonte du site web de Acte Afrique'
        }]
    })
});

// GALLERY 4
jQuery('#gallery4').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/bouc.png',
            'thumb': 'images/photos/bouc.png',
            'subHtml': 'Defis personnel'
        }]
    })
});
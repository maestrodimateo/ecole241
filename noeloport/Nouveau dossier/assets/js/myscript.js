window.onload = function () {
    var mymap = L.map('mapid').setView([0.4208681, 9.4418447], 15);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibWFlc3Ryb2RpbWF0ZW8iLCJhIjoiY2pycmp4dTMxMWg2dTN5cHM5dDR4M204ZSJ9.oLlAJspzh3NIuxO-A7jLiw'
    }).addTo(mymap);
    L.marker([0.4208681, 9.4418447]).addTo(mymap);
}
$(document).ready(function () {
    let img = $('#my-pic');
    TweenLite.from(img, 3, { x:-200, opacity: 0 });
});


/* TweenLite.from(img, 3, { x: -200, opacity: 0 });
    TweenLite = the main object
    from = the main function
    img = the choosen tag
    3 = the duration
    {} = the object containing the differents animation rules

*/

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}
//-----------------------------/SCROLLING FUTURE/-----------------------------------
$(window).scroll(function () {
    if ($(document).scrollTop() > 800) {
        $('.hiddenNav').addClass("navTop");
    } else {
        $('.hiddenNav').removeClass("navTop");
    }
})


window.sr = ScrollReveal();
sr.reveal('.about', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});
sr.reveal('.headerText', {
    duration: 2000,
    origin: "bottom",
    distance: "300px"

});
//---------------------------/SCROLLING FUTURE END/-------------------------------

// var userEmail = '';
// var userName = '';
// var userPassword = '';

var userName = $('#userName').val();
var userEmail = $('#userEmail').val();
var userPassword = $('#userPassword').val();

$('#signUpBtnPressed').on('click', function (e) {
    e.preventDefault();
    alert('test')
    console.log(userEmail);
    console.log(userName);
    console.log(userPassword);


});


// $('.close').on('click', function () {
//     $('#singUp').modal(hide);
// })



//---------------------------/MAPS API/-------------------------------



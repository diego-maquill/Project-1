

//-----------------------------/SCROLLING FUTURE/-----------------------------------
$(window).scroll(function () {
    if ($(document).scrollTop() > 800) {
        $('.hiddenNav').addClass("showNav");
    } else {
        $('.hiddenNav').removeClass("showNav");
    }
})


// https://scrollrevealjs.org/api/noop.html documentaion to read about scrooling 

window.sr = ScrollReveal();
sr.reveal('#homePageLgo', {
    duration: 3000,
    distance: '400px',
    origin: 'top',
})

//Main page Logo & lable
sr.reveal('.logoLable', {
    duration: 3000,
    distance: '300px',
    origin: 'bottom',
})
sr.reveal('.lableText', {
    duration: 2000,
    distance: "300px",
    origin: "left"
});

// Main Page Each Section
sr.reveal('.mainAbout', {
    duration: 2000,
    distance: '300px',
    origin: 'bottom',
    viewFactor: 0.1
});

sr.reveal('.mainJobs', {
    duration: 2000,
    distance: "300px",
    origin: "bottom"
});


sr.reveal('.mainEvents', {
    duration: 2000,
    distance: "300px",
    origin: "bottom"
});


sr.reveal('.mainFood', {
    duration: 2000,
    origin: "bottom"
});

sr.reveal('.teamPics', {
    duration: 2000,
    origin: "bottom"
});

sr.reveal('.logoDiv', {
    duration: 3000,
    origin: "top"
});
//---------------------------/SCROLLING FUTURE END/-------------------------------


//---------------------------/Events Scrolling/-------------------------------
sr.reveal('.eventLogo', {
    duration: 3000,
    origin: "left",
    distance: "300px"
});


sr.reveal('.bottomTopLeft', {
    duration: 3000,
    origin: "left",
    distance: "100px"
});


sr.reveal('.bottomTopRight', {
    duration: 3000,
    origin: "right",
    distance: "100px"
});

sr.reveal('.sliderPics', {
    duration: 3000,
    origin: "bottom",
    distance: "50px"
});

//---------------------------/MAPS API/-------------------------------


// var map;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8
//     });
// }
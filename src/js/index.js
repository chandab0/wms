/*
Author: Saptarshi Basu (https://www.sapbasu.com)
*/

import style from "../sass/styles.scss";
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', function (e) {
    window.onscroll = function () { scrollFunction() };
    document.getElementsByClassName("footer__copyright").item(0).querySelector('p').innerHTML = 'Copyright &copy; ' + new Date().getFullYear() + ' World Marketing Summit';
});

function scrollFunction() {
    if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && !document.getElementById("navbar").classList.contains("c-navbar__sticky")) {
        document.getElementById("navbar").classList.add("c-navbar__sticky");
        document.getElementsByClassName("c-navbar__mob-menu-btn")[0].classList.add("c-navbar__mob-menu-btn-scroll");
    } else if (!(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && document.getElementById("navbar").classList.contains("c-navbar__sticky")) {
        document.getElementById("navbar").classList.remove("c-navbar__sticky");
        document.getElementsByClassName("c-navbar__mob-menu-btn")[0].classList.remove("c-navbar__mob-menu-btn-scroll");
    }
}

AOS.init({
    once: true,
    disable: 'mobile'
});

window.showAllFeatures = function (sponsorshipPackage) {
    var e = document.getElementsByClassName('more');
    if (sponsorshipPackage === 'title') {
        e[0].classList.remove('packages__features__hide');
        document.getElementsByClassName('link-regular')[0].classList.add('packages__features__hide');
    }
    else if (sponsorshipPackage === 'principal') {
        e[1].classList.remove('packages__features__hide');
        document.getElementsByClassName('link-regular')[1].classList.add('packages__features__hide');
    }
    else if (sponsorshipPackage === 'platinum') {
        e[2].classList.remove('packages__features__hide');
        document.getElementsByClassName('link-regular')[2].classList.add('packages__features__hide');
    }
    else if (sponsorshipPackage === 'gold') {
        e[3].classList.remove('packages__features__hide');
        document.getElementsByClassName('link-regular')[3].classList.add('packages__features__hide');
    }
    else if (sponsorshipPackage === 'silver') {
        e[4].classList.remove('packages__features__hide');
        document.getElementsByClassName('link-regular')[4].classList.add('packages__features__hide');
    }
    else if (sponsorshipPackage === 'bronze') {
        e[5].classList.remove('packages__features__hide');
        document.getElementsByClassName('link-regular')[5].classList.add('packages__features__hide');
    }
}

window.toggleHamburger = function () {
    if (document.getElementsByClassName("hamburger")[0].classList.contains("is-active")) {
        document.getElementsByClassName("hamburger")[0].classList.remove("is-active");
        document.getElementsByClassName("c-navbar")[0].classList.remove("c-navbar__mobile-menu");
        document.getElementById("navbar").classList.remove("c-navbar__sticky");
        document.getElementsByClassName("c-navbar__mob-menu-btn")[0].classList.remove("c-navbar__mob-menu-btn-scroll");
        scrollFunction();
    } else {
        document.getElementsByClassName("hamburger")[0].classList.add("is-active");
        document.getElementsByClassName("c-navbar")[0].classList.add("c-navbar__mobile-menu");
        document.getElementById("navbar").classList.add("c-navbar__sticky");
        document.getElementsByClassName("c-navbar__mob-menu-btn")[0].classList.add("c-navbar__mob-menu-btn-scroll");
    }
}

window.closePopup = function () {
    $(".popup").toggleClass("popup__closed")
}

$(function () {

    $('.same-page').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 60
        }, 500, 'linear');
    });

});

window.closeMobMenu = function () {
    document.getElementsByClassName("hamburger")[0].classList.remove("is-active");
    document.getElementsByClassName("c-navbar")[0].classList.remove("c-navbar__mobile-menu");
}

window.changeBorderColor = function (id) {
    console.log("=========");
    $(".side-content__selected-border").toggleClass("side-content__selected-border");
    $(id).toggleClass("side-content__selected-border");
};

$(document).ready(function () {
    timer();

    scrollFunction();

    $("#sponsorForm").submit(function (event) {
        $.ajax({
            url: 'https://suslence.com/wms/sendEmail',
            method: 'POST',
            data: {
                request: {
                    to: "sponsors@wms18.com",
                    subject: $('#inputPkg').val(),
                    text: $('#inputName').val() + " | " + $('#inputEmail').val() + " | " + $('#inputContactNo').val() + " | " + $('#inputMsg').val(),
                    html: "<h1>" + $('#inputPkg').val() + "</h1><p>" + $('#inputName').val() + "</p><p>" + $('#inputEmail').val() + "</p><p>" + $('#inputContactNo').val() + "</p><p>" + $('#inputMsg').val() + "</p>"
                }
            },
            success: function (response) {
                window.alert("Your request is successfully submitted. We'll get back to you shortly");
                $('#submissionFormModal').modal('toggle');
            },
            error: function () {
                window.alert('Something went wrong. Please try again.');
            },
            dataType: "json"
        });
        event.preventDefault();
    });

    $(document).on("click", ".packages__pkg-header .c-btn", function () {
        var pkgName = $(this).data('pkg');
        $("#inputPkg").val(pkgName);
    });

    $(".submit-button").click(function () {
        $("#sponsorForm").submit();
        return false;
    });
});

$('#sponsor-carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                slidesToShow: 1
            }
        }
    ]
});

window.timer = function () {
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 14, 2018 08:30:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

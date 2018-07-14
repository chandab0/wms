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
    } else {
        document.getElementsByClassName("hamburger")[0].classList.add("is-active");
        document.getElementsByClassName("c-navbar")[0].classList.add("c-navbar__mobile-menu");
        document.getElementById("navbar").classList.add("c-navbar__sticky");
        document.getElementsByClassName("c-navbar__mob-menu-btn")[0].classList.add("c-navbar__mob-menu-btn-scroll");
    }
}

$(function () {

    $('.same-page').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

});

window.closeMobMenu = function () {
    document.getElementsByClassName("hamburger")[0].classList.remove("is-active");
    document.getElementsByClassName("c-navbar")[0].classList.remove("c-navbar__mobile-menu");
}

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

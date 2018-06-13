import style from "../sass/styles.scss";
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', function(e) {
    window.onscroll = function () { scrollFunction() };
    document.getElementsByClassName("footer__copyright").item(0).querySelector('p').innerHTML = 'Copyright &copy; ' + new Date().getFullYear() + ' World Marketing Summit';
});

function scrollFunction() {
    if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && !document.getElementById("navbar").classList.contains("c-navbar__sticky")) {
        document.getElementById("navbar").classList.add("c-navbar__sticky");
    } else if (!(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && document.getElementById("navbar").classList.contains("c-navbar__sticky")) {
        document.getElementById("navbar").classList.remove("c-navbar__sticky");
    }
}

AOS.init({
    once: true,
    disable: 'mobile'
});

window.showAllFeatures = function(sponsorshipPackage) {
    var e = document.getElementsByClassName('more');
    if(sponsorshipPackage === 'strategic') {
        e[0].classList.remove('packages__features__hide');
        document.getElementsByClassName('link-regular')[0].classList.add('packages__features__hide');
    }
}
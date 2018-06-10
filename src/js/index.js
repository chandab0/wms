import style from "../sass/styles.scss";
import AOS from 'aos';


/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}*/

AOS.init({
    once: true,
    disable: 'mobile'
});
document.getElementsByClassName("footer__copyright").item(0).querySelector('p').innerHTML = 'Copyright &copy; ' + new Date().getFullYear() + ' World Marketing Summit';
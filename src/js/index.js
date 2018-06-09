import style from "../sass/styles.scss";
import AOS from 'aos';

AOS.init({
    once: true,
    disable: 'mobile'
});
document.getElementsByClassName("footer__copyright").item(0).querySelector('p').innerHTML = 'Copyright &copy; ' + new Date().getFullYear() + ' World Marketing Summit';
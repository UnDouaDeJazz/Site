import "./Contact.css";
import Header from "./Header.js"
import fb from '../media/logo-fb-2.png';
import insta from '../media/logo-insta-2.png';
import spotify from '../media/spotify.png';
import deezer from '../media/deezer.png';

function Contact() {
return (
    <div id="contact">
        <div id="headerContact">
        <div id="imgHeaderContact">
        </div>
        <Header /></div>

        <div id="contentContact">
            <p id="contactTitle">Nous contacter</p>
            <hr/>
            <p class="contactSubtitle">Nous contacter par mail</p>
            <p>communication@undouadejazz.com</p>
            <p class="contactSubtitle">Notre adresse</p>
            <p>20 Avenue Albert Einstein<br/>69100 Villeurbanne</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.3197782217976!2d4.870349815788239!3d45.78482092001249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eaa13d9dc71f%3A0x80d631cdd01455a5!2s20%20Av.%20Albert%20Einstein%2C%2069100%20Villeurbanne!5e0!3m2!1sfr!2sfr!4v1652006005494!5m2!1sfr!2sfr" id="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
            <p class="contactSubtitle">Suivez-nous sur les réseaux</p>

            <div id="contactReseaux">
                <a href="https://www.facebook.com/undouadejazz/"><img src={fb} alt="facebook" id="fb" class="logo"/></a>
                <a href="https://www.instagram.com/undouadejazz"><img src={insta} alt="instagram" id="insta" class="logo"/></a>
                <a href="https://open.spotify.com/user/312acys3roxmmzofsq7b2ap2xege?si=87a2bcb41b5d4b95"><img src={spotify} alt="spotify" id="spotify" class="logo"/></a>
                <a href="https://www.deezer.com/en/profile/4947798762?gclid=CjwKCAiAmJGgBhAZEiwA1JZoll60RUIiPA0e2_QU8EL2eKl6El9DMpJrCmOGQEmYDLTs_lmrp4VzfBoCTjMQAvD_BwE"><img src={deezer} alt="deezer" id="deezer" class="logo"/></a>
            </div>

        </div>
            
            <hr/>
    </div>
);
}

export default Contact;
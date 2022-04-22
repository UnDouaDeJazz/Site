import "./Contact.css";
import Header from "./Header.js"

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
            <p>contact@undouadejazz.com</p>
            <p class="contactSubtitle">Notre adresse</p>
            <p>20 Avenue Albert Einstein<br/>69100 Villeurbanne</p>
            
            </div>
            <hr/>
    </div>
);
}

export default Contact;
import "./Partenaires.css";
import Header from "./Header.js"
import logo1 from '../media/logo-villeurbanne.png'
import logo2 from '../media/logo-lyon.jpg'
import logo3 from '../media/logo-rhinojazz.jpg'
import logo4 from '../media/logo-va.png'
import logo5 from '../media/logo-insa.png'
import logo6 from '../media/logo-helloasso.png'
import logo7 from '../media/logo-crous.jpg'
import logo8 from '../media/logo-cfc22.png'
import logo9 from '../media/logo-alumni.jpg'
import logo10 from '../media/logo-grandlyon.png'
import logo11 from '../media/logo-jsmusique.jpg'

function Partenaires() {
return (
    <div id="contact">
        <div id="headerContact">
        <div id="imgHeaderContact">
        </div>
        <Header /></div>

        <div id="contentContact">
            <p id="contactTitle">Nos Partenaires</p>
            <hr/>
            <div id="partenairesPage">
            <img src={logo1} alt=""></img>
                <img src={logo2} alt=""></img>
                <img src={logo3} alt=""></img>
                <img src={logo4} alt=""></img>
                <img src={logo5} alt=""></img>
                <img src={logo6} alt=""></img>
                <img src={logo7} alt=""></img>
                <img src={logo8} alt=""></img>
                <img src={logo9} alt=""></img>
                <img src={logo10} alt=""></img>
                <img src={logo11} alt=""></img>
                </div>
        </div>
            
            <hr/>
    </div>
);
}

export default Partenaires;
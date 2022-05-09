import "./Footer.css"
import fb from '../media/logo-fb.png';
import insta from '../media/logo-insta.png';
import mail from '../media/logo-mail.png';
import yt from '../media/logo-yt.png';
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
import {HashLink} from 'react-router-hash-link';


function Footer() {
  return (
        
      <div id="footer">
            <div>
                <p id="doua">
                    UN <span id="grandDoua">DOUA</span> DE <span id="grandDoua">JAZZ</span>
                </p>
            </div>
            <div id="reseaux">
                <a href="https://www.facebook.com/undouadejazz/"><img src={fb} alt="facebook" id="fb" class="logo"/></a>
                <a href="https://www.instagram.com/undouadejazz"><img src={insta} alt="instagram" id="insta" class="logo"/></a>
                <a href="mailto:contact@undouadejazz.com"><img src={mail} alt="mail" id= "mail" class="logo"/></a>
                <a href="https://www.youtube.com/channel/UC62m2Ams5a1tySBDP0l-oiQ"><img src={yt} alt="youtube" id="yt" class="logo"/></a>
            </div>
            <HashLink to="/mentions#header">
            <div id="mentionsLegales">
                    Mentions légales
            </div>
            </HashLink>
            <div id="partenaires">

            <hr/>
            <div id="partenairesGrid">
                <p class="titre">
                    -- Nos partenaires
                </p>
                <img src={logo1} alt=""></img>
                <img src={logo2} alt=""></img>
                <img src={logo3} alt=""></img>
                <img src={logo4} alt=""></img>
                <img src={logo5} alt=""></img>

                <img src={logo6} alt=""></img>
                <p class="voirplus"><HashLink to="/partenaires"> Voir plus -> </HashLink></p>

                </div>
            <hr/>

            </div>
      </div>
  );
}

export default Footer;

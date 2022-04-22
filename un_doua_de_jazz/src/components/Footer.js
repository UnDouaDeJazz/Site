import "./Footer.css"
import fb from '../media/logo-fb.png';
import insta from '../media/logo-insta.png';
import mail from '../media/logo-mail.png';
import yt from '../media/logo-yt.png';
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
                <p>
                    -- Nos partenaires
                </p>
                <hr/>
            </div>
      </div>
  );
}

export default Footer;

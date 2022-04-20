import "./Footer.css"
import fb from '../media/logo-fb.png';
import insta from '../media/logo-insta.png';
import mail from '../media/logo-mail.png';
import yt from '../media/logo-yt.png';


function Footer() {
  return (
        
      <div id="footer">
            <div>
                <p id="doua">
                    UN <span id="grandDoua">DOUA</span> DE <span id="grandDoua">JAZZ</span>
                </p>
            </div>
            <div id="reseaux">
                <img src={fb} alt="facebook" id="fb" class="logo"/>
                <img src={insta} alt="instagram" id="insta" class="logo"/>
                <img src={mail} alt="mail" id= "mail" class="logo"/>
                <img src={yt} alt="youtube" id="yt" class="logo"/>
            </div>
            <div id="mentions">
                    Mentions légales
            </div>
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

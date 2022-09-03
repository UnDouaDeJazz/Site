import header from '../media/headerComp.png';
import logoTransparent from '../media/trans3.png';
import './HeaderHome.css';
import Header from "./Header.js"
import {HashLink} from 'react-router-hash-link';


function HeaderHome() {
  return (
    
      <div>
        <div id="homeHeader">
          <img src={header} id="imgHeader" alt="Concert - UnDouaDeJazz" />
          <img src={logoTransparent} className="imgLogo" alt="Logo Un Doua De Jazz" id="imgLogo"/>
          <HashLink to="#artistesWrapper"><button id="btnArtistes">VOIR LES ARTISTES</button></HashLink>
        </div>

        <Header/>
      </div>
  );
}

export default HeaderHome;

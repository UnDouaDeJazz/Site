import header from '../media/headernetpanet.png';
import logoTransparent from '../media/trans3.png';
import './HeaderHome.css';
import Header from "./Header.js"


function HeaderHome() {
  return (
    
      <div>
        <div id="homeHeader">
          <img src={header} id="imgHeader" alt="Concert - UnDouaDeJazz" />
          <img src={logoTransparent} className="imgLogo" alt="Logo Un Doua De Jazz" id="imgLogo"/>
          <button id="btnArtistes">VOIR LES ARTISTES</button>
        </div>

        <Header/>
      </div>
  );
}

export default HeaderHome;

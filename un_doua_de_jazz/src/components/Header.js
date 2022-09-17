
import logoCercle from '../media/logo-cercle.png';
import './Header.css';
import {Helmet} from 'react-helmet'

import {HashLink} from 'react-router-hash-link';

function Header() {
  const TITLE="Un Doua De Jazz"
  return (
        <header id="header">
          <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
          <HashLink to="/#header">
          <img src={logoCercle} className="imgLogo" alt="Logo Un Doua De Jazz" id="logoHeader"/>
          </HashLink>
          <HashLink to="/#header">
          <div id="btnAccueil" class="btnPasDrop"><p>Accueil</p></div></HashLink>
          
          <div id="btnPropos" class="btnDrop"><p>A propos <span class="rotator"></span></p>
          <div class="dropContent">
                <HashLink to="/about#header">Le Festival</HashLink>
                <HashLink to="/artistes#header">Nos Artistes</HashLink>
                </div>

            </div>
          <div id="btnInfos" class="btnDrop"><p>Infos pratiques <span class="rotator"></span></p>
          <div class="dropContent">
                <HashLink to="/contact#header">Nous contacter</HashLink>
                <HashLink to="/benevole#header">Devenir bénévole</HashLink>
            </div>
            </div>
          <a href="https://www.helloasso.com/associations/un-doua-de-jazz">
            <button id="btnBilleterie">BILLETTERIE</button>
            </a>
        </header>
  );
}
export default Header;

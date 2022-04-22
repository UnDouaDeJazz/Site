
import logoCercle from '../media/logo-cercle.png';
import './Header.css';

import {HashLink} from 'react-router-hash-link';

function Header() {
  return (
        <header id="header">
          <HashLink to="/#header">
          <img src={logoCercle} className="imgLogo" alt="Logo Un Doua De Jazz" id="logoHeader"/>
          </HashLink>
          <div id="btnPropos" class="btnDrop"><p>A propos <span class="rotator">v</span></p>
          <div class="dropContent">
                <HashLink to="/about#header">Un Doua De Jazz</HashLink>
                <HashLink to="/artistes#header">Nos artistes</HashLink>
                </div>

            </div>
          <div id="btnInfos" class="btnDrop"><p>Infos pratiques <span class="rotator">v</span></p>
          <div class="dropContent">
                <HashLink to="/contact#header">Nous contacter</HashLink>
                <HashLink to="/benevole#header">Devenir bénévole</HashLink>
            </div>
            </div>
          <a href="https://www.helloasso.com/associations/un-doua-de-jazz">
            <button id="btnBilleterie">BILLETERIE</button>
            </a>
        </header>
  );
}
export default Header;

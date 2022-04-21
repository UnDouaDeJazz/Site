
import logoCercle from '../media/logo-cercle.png';
import './Header.css';

function Header() {
  return (
        <header id="header">
          <a href="/">
          <img src={logoCercle} className="imgLogo" alt="Logo Un Doua De Jazz" id="logoHeader"/>
          </a>
          <div id="btnPropos" class="btnDrop"><p>A propos <span class="rotator">v</span></p>
          <div class="dropContent">
                <a href="/about">Un Doua De Jazz</a>
                <a href="/artistes">Nos artistes</a>
                </div>

            </div>
          <div id="btnInfos" class="btnDrop"><p>Infos pratiques <span class="rotator">v</span></p>
          <div class="dropContent">
                <a href="/contact">Nous contacter</a>
                <a href="/benevole">Devenir bénévole</a>
            </div>
            </div>
          <a href="https://www.helloasso.com/associations/un-doua-de-jazz">
            <button id="btnBilleterie">BILLETERIE</button>
            </a>
        </header>
  );
}
export default Header;

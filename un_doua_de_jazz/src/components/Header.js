
import logoCercle from '../media/logo-cercle.png';
import './Header.css';

function Header() {
  return (
        <header id="header">
          <a href="/">
          <img src={logoCercle} className="imgLogo" alt="Logo Un Doua De Jazz" id="logoHeader"/>
          </a>
          <button id="btnPropos">A propos</button>
          <button id="btnInfos">Infos pratiques</button>
          <button id="btnBilleterie">BILLETERIE</button>
        </header>
  );
}
export default Header;

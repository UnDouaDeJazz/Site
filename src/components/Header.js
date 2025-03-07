
//import logoCercle from '../media/logo-cercle.png';
import logoCercle from '../media/Logos/Logo blanc transparent.png'
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
          
          <HashLink to="/photos#header">
          <div id="btnPhotos" class="btnPasDrop"><p>Photos</p></div></HashLink>
          
          <div id="btnPropos" class="btnDrop btnDrop3"><p>A propos <span class="rotator"></span></p>
          <div class="dropContent">
                <HashLink to="/about#header">Le Festival</HashLink>
                <HashLink to="/tremplin#header">Tremplin</HashLink>
                
                <HashLink to="/evenements#header">Autres évènements</HashLink>
                </div>

            </div>
          <div id="btnInfos" class="btnDrop btnDrop3"><p>Infos pratiques <span class="rotator"></span></p>
          <div class="dropContent">
                <HashLink to="/contact#header">Nous contacter</HashLink>
                <HashLink to="/benevole#header">Devenir Bénévole</HashLink>
                <HashLink to="/scenes#header">Les scènes</HashLink>
            </div>
            </div>
          <HashLink to="/artistes#header">
          <div id="btnNosArtistes" class="btnPasDrop"><p>Nos Artistes</p></div></HashLink>
          <HashLink to="/partenaires">
          <div id="btnNosPartenaires" class="btnPasDrop"><p>Nos Partenaires</p></div></HashLink>

          
          <HashLink to="/playlists">
          <div id="btnPlaylists" class="btnPasDrop"><p>Nos playlists</p></div></HashLink>
          {/*<a href="https://www.helloasso.com/associations/un-doua-de-jazz">
            <button id="btnBilleterie">BILLETTERIE</button>
  </a>*/}
        </header>
  );
}
export default Header;

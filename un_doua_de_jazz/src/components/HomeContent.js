import chris from '../media/chris-potter.png';
import bojan from '../media/bojan-z.png';
import tigran from '../media/tigran-hamasaya.png';
import logo from '../media/logo-transparent.png';
import asso from '../media/asso.jpg';


import "./HomeContent.css"


function HomeContent(nb) {
    
return (
    <div>
        <p id="prog">Programmation 2022</p>
        <p id="venir">...A VENIR...</p>
        <hr id="smallhr"/>
        <p id="patienter">Pour patienter :</p>
        <div id="gridPatienter">
            <div id="nosArtistes">

            <a href="/artistes">
                <img src={chris} alt="chris potter"/>
                <img src={bojan} alt="bojan-z"/>
                <img src={tigran} alt="tigran hamasaya"/>
                <p>Nos Artistes</p>
                </a>
            </div>
            <div id="aPropos">
            <a href="/about">

                
                <img src={logo} alt="logo UnDouaDeJazz"/>
                <p>A Propos</p>
            </a>
            </div>
            <div id="benevoles">
                <a href="/benevole">
                <img src={asso} alt="association UnDouaDeJazz"/>
                <p>Devenir Benevole</p>
                </a>
            </div>
        </div>
    </div>
    );
}

export default HomeContent;
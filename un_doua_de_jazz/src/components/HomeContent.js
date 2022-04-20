import chris from '../media/chris-potter.png';
import bojan from '../media/bojan-z.png';
import tigran from '../media/tigran-hamasaya.png';
import logo from '../media/logo-transparent.png';
import asso from '../media/asso.jpg';


import "./HomeContent.css"


function HomeContent() {
return (
    <div>
        <p id="prog">Programmation 2022</p>
        <p id="venir">...A VENIR...</p>
        <hr id="smallhr"/>
        <p id="patienter">Pour patienter :</p>
        <div id="gridPatienter">
            <div id="nosArtistes">
                <img src={chris} alt="chris potter"/>
                <img src={bojan} alt="bojan-z"/>
                <img src={tigran} alt="tigran hamasaya"/>
                <p>Nos Artistes</p>
            </div>
            <div id="aPropos">
                <img src={logo} alt="logo UnDouaDeJazz"/>
                <p>A Propos</p>
            </div>
            <div id="benevoles">
                <img src={asso} alt="association UnDouaDeJazz"/>
                <p>Devenir Benevole</p>
            </div>
        </div>
    </div>
    );
}

export default HomeContent;
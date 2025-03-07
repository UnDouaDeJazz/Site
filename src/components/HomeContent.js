import chris from '../media/chris-potter.png';
import glasper from '../media/glasper.jpg';
import tigran from '../media/tigran-hamasaya.png';
import logo from '../media/logo-transparent.png';
import asso from '../media/asso.jpg';
import {HashLink} from 'react-router-hash-link'


import "./HomeContent.css"


function HomeContent(nb) {
    
return (
    <div id="homeContent">
        <p id="prog">Programmation 2022</p>
        <p id="venir">...A VENIR...</p>
        <hr id="smallhr"/>
        <p id="patienter">Pour patienter :</p>
        <div id="gridPatienter">
            <div id="nosArtistes">

            <HashLink to="/artistes#header">
                <img src={chris} alt="chris potter"/>
                <img src={glasper} alt="robert glasper"/>
                <img src={tigran} alt="tigran hamasaya"/>
                </HashLink>
                <p>Nos Artistes</p>

            </div>
            <div id="aPropos">
            <HashLink to="/about#header">

                
                <img src={logo} alt="logo UnDouaDeJazz"/>
                </HashLink>
                <p>A Propos</p>
            
            </div>
            <div id="benevoles">
                <HashLink to="/benevole#header">
                <img src={asso} alt="association UnDouaDeJazz"/>
                </HashLink>
                <p>Devenir Benevole</p>
                
            </div>
        </div>
    </div>
    );
}

export default HomeContent;
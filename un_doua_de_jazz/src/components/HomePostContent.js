import chris from '../media/chris-potter.png';
import glasper from '../media/glasper.jpg';
import tigran from '../media/tigran-hamasaya.png';
import logo from '../media/logo-transparent.png';
import asso from '../media/asso.jpg';
import oscar from '../media/photos2022/8.jpg';
import {HashLink} from 'react-router-hash-link'


import "./HomePostContent.css"


function HomeContent(nb) {
    
return (
    <div id="homeContent">
        <p id="venir">MERCI !</p>
        <hr id="smallhr"/>
        <p id="patienter"><span>Merci aux bénévoles, aux partenaires et surtout aux festivaliers !<br/>
        Actuellement nous formons les rangs pour la 30ème qui s'annonce folle !</span></p>
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
        
        <div id="photos">
                <HashLink to="/photos#header">
                <img src={oscar} alt="photos 2022"/>
                </HashLink>
                <p>Photos - Edition 2022</p>
                
            </div>
    </div>
    );
}

export default HomeContent;
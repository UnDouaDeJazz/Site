
import logo from '../media/Logos/Logo white text.png';
import asso from '../media/asso2022.jpg';
import oscar from '../media/photos2022/8.jpg';
import zeph from '../media/zeph-cri.jpg';
import trio from '../media/photos2022/20.jpg';
import emile from '../media/emile-pianiste-1.jpg';
import {HashLink} from 'react-router-hash-link'


import "./HomePostContent.css"


function HomeContent(nb) {
    
return (
    <div id="homeContent">
        <p id="venir">Le festival Un Doua De Jazz fera son retour en octobre 2025 pour sa 32e édition ! </p>
        <hr id="smallhr"/>
        <p id="patienter">♫ Restez connectés, de nouveaux événements sont à venir prochainement ! ♫
            <br/>Vous y retrouverez notamment l'ouverture des inscriptions au Tremplin 2025, et du contenu sur le OFF du festival
            <br/>
        </p>
        <hr id="smallhr"/>
        <p id="patienter"><span>En attendant, n'hésitez pas à redécouvrir nos anciennes éditions, ou à en apprendre davantage sur le festival :</span></p>
        <div id="gridPatienter">
            <div id="nosArtistes">

            <HashLink to="/artistes#header">
                <img src={trio} alt="trio charlier-sourisse-winsberg"/>
                <img src={zeph} alt="zeph"/>
                <img src={emile} alt="emile londonien"/>
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
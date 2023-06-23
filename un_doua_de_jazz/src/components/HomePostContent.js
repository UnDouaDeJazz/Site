
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
        <p id="venir">Le festival du Doua De Jazz fait son retour du 12 au 20 Octobre 2023 pour sa 30e édition ! </p>
        <hr id="smallhr"/>
        <p id="patienter">♫ Les gagnants du Tremplin ont été dévoilés ♫
            <br/>Il s'agit d'Hugo Diaz Quartet ! Félicitations à eux et aux deux autres groupes, Grises et The Entropy Paradox, pour leurs performances.
            <br/>
        </p>
        <hr id="smallhr"/>
        <p id="patienter"><span>N'hésite pas à regarder les prochains évènements que nous organisons, ou à redécouvrir nos anciennes éditions</span></p>
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
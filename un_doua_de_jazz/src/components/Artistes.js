
import Header from "./Header.js"
import disc from "../media/headerDisc.jpg";
import chris from '../media/chris-potter.png';
import bojan from '../media/bojan-z.png';
import tigran from '../media/tigran-hamasaya.png';
import mederic from "../media/mederic-colignon.png";
import renaud from "../media/renaud-garcia-fons.png";
import soul from "../media/soul-square.png";

import "./Artistes.css"


function Artistes() {
return (
    <div id="artistes">
    
    <div id="headerArtistes">
        <img src={disc} alt="logo disque UnDouaDeJazz" id="imgDisc"/>
        <p>NOS <span>ARTISTES</span></p>

    </div>

    <Header />

    <div id="artistesGrid" >
        <div>
        <img src={chris} alt="Chris Potter"/>
        <p>Chris Potter<br/><span>2004</span></p>
        </div><div>
        <img src={bojan} alt="Bojan Z"/>

        <p>Bojan Z<br/><span>2009</span></p>
        </div><div>
        <img src={tigran} alt="Tigran Hamasyan"/>

        <p>Tigran Hamasyan<br/><span>2009</span></p>
        </div><div>
        <img src={mederic} alt="Mederic Colignon"/>
        <p>Mederic Colignon<br/><span>2010</span></p>
        </div><div>
        <img src={renaud} alt="Renaud Garcia-Fons"/>
        <p>Renaud Garcia-Fons<br/><span>2010</span></p>
        </div><div>
        <img src={soul} alt="Soul Square"/>
        <p>Soul Square<br/><span>2016</span></p>
        </div>

    </div>
    <hr/>
    </div>
);
}

export default Artistes;
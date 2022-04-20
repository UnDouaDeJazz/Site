import chris from '../media/chris-potter.png';
import bojan from '../media/bojan-z.png';
import tigran from '../media/tigran-hamasaya.png';


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
            </div>
        </div>
    </div>
    );
}

export default HomeContent;
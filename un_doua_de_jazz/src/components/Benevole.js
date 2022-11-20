import "./Contact.css";
import "./Benevole.css";
import Header from "./Header.js"
import benevoles from "../media/assoBanniere2022Crop.jpg"

function Benevole() {
return (
    <div id="benevolesPage">
        <div id="headerBenevoles">
        <img src={benevoles} alt="Bénévoles UnDouaDeJazz" id="imgBenevoles"/>
        <p id="contactTitle">DEVENIR <span>BENEVOLE</span>
        </p>
            
        </div>
        <Header />

        <div id="contentBenevole">
            
            <div id="benevoleTexte">       
            <div class="titre">
        <h1><span id="titre1">Ça fait des mois que tu dis que tu veux entrer dans une asso, mais tu ne t'es jamais donné le temps ? </span>
                <br/><br/><span id="titre2">Ça tombe bien, Un Doua De Jazz recrute !</span></h1>
                </div>

                <hr/>
                <h2>
                L’année se divise en 2 parties :</h2>
                <h3>
                Partie OFF
                </h3> 
                <p>
                Elle correspond à la période novembre - juin.<br/>
                Pendant cette période, on organise des évènements ponctuels (boeuf K-fêt, concerts), et on essaye de récolter des fonds (vente de crêpes, comptage vélo, aide au balisage de courses)
                <br/>Cet argent bonus nous permet d’aller plus loin dans nos démarches en général, que ce soit pour inviter des artistes plus connus, acheter du matériel de com, rémunérer nos partenaires…
                </p><h3>
                Partie ON
                </h3><p>
                Elle correspond à la période du festival ! C’est le moment où on a le plus besoin d’aide : prévente, stand snack, sécurité… Les missions sont simples (pas besoin d’être premier de promo ou super stock) mais il y en a beaucoup. On compte sur toi !
                </p>
                <div id="finBenev">
                <h2 class="finTitre">Tu es libre de t’engager sur la ou les période.s de ton choix !</h2>
                <p class="finTexte">
                En tout cas, si tu veux concrètement nous aider à organiser le festival, et inviter tes artistes préféré.e.s sur notre campus, on t'accueillera avec plaisir ❤
                <br/>Inscris-toi sur ce formulaire ou simplement envoie-nous un message sur nos réseaux ;D 

                <br/><br/><i>Pour te remercier, tu auras évidemment droit à une place gratuite sur un des concerts.</i>
                </p>
                <a href="https://forms.gle/K9UnfXoC8iefhhp8A">
                <button id="benevoleButton" onclick="window.location.href='https://forms.gle/K9UnfXoC8iefhhp8A';">DEVENIR BENEVOLE</button>
                </a>
                </div>
                </div>
            
            </div>
            <hr/>
    </div>
);
}

export default Benevole;
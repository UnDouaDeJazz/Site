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
        <h1><br></br><span id="titre1">Un Doua De Jazz recrute !</span>
                <br/><br/><span id="titre2">Rejoins l’aventure, découvre les coulisses et participe à l’organisation d’un festival unique en France !</span></h1>
                </div>

                <hr/>
                <h2>
                En quoi consiste mes missions ?</h2>
                <p>
                En tant que bénévole, tu peux nous aider tout au long de l’année, pour la partie « off » de novembre à juin, ou bien pour la partie « on » au cœur du festival en octobre.<br/>
                Durant la partie off, nous organisons des évènements ponctuels (boeuf K-fêt, concerts, tremplin etc.), et nous essayons de récolter des fonds (vente de crêpes, comptage vélo, aide au balisage de courses).
                <br/>Cet argent bonus nous permet d’aller plus loin dans nos démarches en général, que ce soit pour inviter des artistes plus connus, acheter du matériel de communication, rémunérer nos partenaires…
                </p><p>
                La partie on, c’est le moment où nous avons le plus besoin de toi ! Les missions sont simples, pas de panique, tu seras bien entouré et nous t’expliquerons tout ! On compte sur toi, tu ne risques pas de t’ennuyer !
                <br/>Tu pourras réaliser à tous ces évènements différentes tâches (préventes, buvette, sécurité etc.)
                </p>
                <h2>
                Comment m’inscrire ?
                </h2>
                <p>Pour rejoindre l’équipe, tu peux remplir le questionnaire juste ci-dessous.
                <br/> N’hésite pas à nous contacter sur nos réseaux sociaux si tu as une question ^^
                </p>
                <div id="finBenev">
                <h2 class="finTitre">Et pas d'inquiétude, tu es libre de t’engager sur la ou les période.s de ton choix !</h2>
                <p class="finTexte">
                N’oublie pas, être bénévole c’est surtout vivre des moments inoubliables ;D
                <br/><br/><i>Pour te remercier, tu auras évidemment droit à une place gratuite pour un des concerts !</i>
                </p>
                <a href="https://forms.gle/EceYqiiTMLupQpQ38">
                <button id="benevoleButton" onclick="window.location.href='https://forms.gle/EceYqiiTMLupQpQ38';">DEVENIR BENEVOLE</button>
                </a>
                </div>
                </div>
            
            </div>
            <hr/>
    </div>
);
}

export default Benevole;
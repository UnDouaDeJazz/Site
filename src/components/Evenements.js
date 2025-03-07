import "./Evenements.css";
import Header from "./Header.js"
import disc from "../media/headerDisc.jpg";


function Evenements() {
return (
    <div id="evenements">
    
        <div id="headerEvenements">
            <img src={disc} alt="logo disque UnDouaDeJazz" id="imgDisc"/>
            <p>NOS AUTRES <span>EVENEMENTS</span></p>

        </div>

        <Header />
        <div id="evenementsHook">
            <p>
                .<br/><br/>
                D'autres évènements sont en préparation !<br/>
                Parmis eux, une collaboration avec le festival des 24h de l'INSA lors de la soirée du dimanche 14 mai, une Jam Session à la K-fet de l'INSA...<br/>
                Restez branchés !
                
                <br/><br/>.<br/>
            </p>
        </div>
        {/* <div id="evenementsWrapper">
            <p>Date<br/><span>1er Juin</span></p>
            <p>Premier prix<br/><span>1000€</span></p>
            <p>Deuxieme prix<br/><span>500€</span></p>

            </div> 
            <div id="evenementsText">
            <p>Le Doua de Jazz organise tous les ans un concert-tremplin afin de découvrir et mettre
en avant des artistes émergents. Trois artistes/groupes de talent sélectionnés sont
ainsi invités à se produire à La Clé de Voûte, un club de jazz réputé de Lyon.</p>
            <p>Cette année, rendez-vous le 1er Juin à la clé de voûte pour le tremplin du Doua De Jazz. Les
artistes sélectionnés seront annoncés quelques semaines avant le concert, alors restez
connectés !</p>
            <p>Ce tremplin permet au groupe vainqueur de se produire à notre festival et d’obtenir
une somme de 1000 euros. Le deuxième prix s’élève quand à lui à 500 euros.</p>
<p>Pour participer, envoyez nous votre candidature contenant une courte présentation
ainsi qu’une vidéo ou un audio par mail à <a href="mailto:communication@undouadejazz.com">communication@undouadejazz.com</a></p>
            </div>
<hr/>*/}

            </div>
);
}

export default Evenements;
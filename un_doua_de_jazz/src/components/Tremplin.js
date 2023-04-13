import "./Tremplin.css";
import Header from "./Header.js"
import disc from "../media/headerDisc.jpg";


function Tremplin() {
return (
    <div id="tremplin">
    
        <div id="headerTremplin">
            <img src={disc} alt="logo disque UnDouaDeJazz" id="imgDisc"/>
            <p>LE <span>TREMPLIN</span></p>

        </div>

        <Header />
        <div id="tremplinWrapper">
            <p>Date<br/><span>1er Juin</span></p>
            <p>Premier prix<br/><span>1000€</span></p>
            <p>Deuxieme prix<br/><span>500€</span></p>

            </div>
            <div id="tremplinText">
            <p>Ouverture des inscriptions !</p>
            <p>Le Doua de Jazz organise tous les ans un concert-tremplin afin de découvrir et mettre
en avant des artistes émergents. Trois artistes/groupes de talent sélectionnés sont
ainsi invités à se produire à La Clef de Voûte, un club de jazz réputé de Lyon.</p>
            <p>Cette année, rendez-vous le 1er Juin à 20h30 à la Clef de Voûte pour le tremplin du Doua De Jazz. Les
artistes sélectionnés seront annoncés quelques semaines avant le concert, alors restez
connectés !</p>
            <p>Ce tremplin permet au groupe vainqueur de se produire à notre festival lors d'une première partie pour un concert, et également d'obtenir
une somme de 1000 euros d'accompagnement. Le deuxième prix s’élève quant à lui à 500 euros.</p>
<p>Pour participer, envoyez nous votre candidature contenant une courte présentation
ainsi qu’une vidéo ou un extrait audio par mail à <a href="mailto:communication@undouadejazz.com">communication@undouadejazz.com</a></p>
            <p>3 finalistes seront ainsi sélectionnés pour jouer devant un jury professionnel !</p>
            </div>
            <hr/>

            </div>
);
}

export default Tremplin;
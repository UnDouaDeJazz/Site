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
            <p>Date<br/><span>6 Juin 2024</span></p>
            <p>Premier prix<br/><span>1000€</span></p>
            <p>Deuxieme prix<br/><span>500€</span></p>

            </div>
            <div id="tremplinText">
            <p>Le Doua de Jazz organise tous les ans un concert-tremplin afin de découvrir et mettre
en avant des artistes émergents. Trois artistes/groupes de talent sélectionnés sont
ainsi invités à se produire à La Clef de Voûte, un club de jazz réputé de Lyon.</p>
            <p>Ce tremplin permet au groupe vainqueur de se produire à notre festival lors d'une première partie pour un concert, et également d'obtenir
une somme de 1000 euros d'accompagnement. Le deuxième prix s’élève quant à lui à 500 euros.</p>
<p>Les participants de l'édition 2024 étaient Siwane, SuperMegaSuperCool Révolution et Paw Paw.</p>
            <p>Nous aurons le plaisir de voir jouer SuperMegaSuperCool Révolution, gagnant du Tremplin, à une soirée que nous dévoilerons prochainement !</p>
            </div>
            <hr/>

            </div>
);
}

export default Tremplin;
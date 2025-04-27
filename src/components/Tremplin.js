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
            <p>Date<br/><span>13 Juin 2025</span></p>
            <p>Premier prix<br/><span>1000€</span></p>
            <p>Deuxième prix<br/><span>500€</span></p>

            </div>
            <div id="tremplinText">
            <p>Le Doua de Jazz organise tous les ans un concert-tremplin afin de découvrir et mettre
en avant des artistes émergents de la scène musicale de Lyon et de ses environs. Trois artistes/groupes de talent sélectionnés par un jury de professionnels sont
ainsi invités à se produire au <b>Toï Toï Le Zinc</b>, à Villeurbanne.</p>
            <p>Ce tremplin permettra au groupe vainqueur de jouer lors d'une première partie d'un concert du "ON" de notre festival, en octobre, et également d'obtenir
une somme de 1000 euros d'accompagnement. Le deuxième prix s’élève quant à lui à 500 euros.</p>
<p>Parmi les participants de l’édition 2024, on retrouvait Siwane, SuperMegaSuperCool Révolution et Paw Paw.</p>
            <p>Alors, Musicien.ne.s, foncez vous inscrire via le bouton ci-dessous ! 😎 Et vous, Public, nous vous attendons avec impatience au Toï Toï le 13 juin à 20h30 pour une soirée de folie ! 🤩</p>
            <p><i>Les inscriptions sont ouvertes <b>jusqu'au 15 mai</b>.</i></p>
            </div>

            <div id="tremplinButtonWrapper">
                <a href="https://framaforms.org/tremplin-un-doua-de-jazz-2025-1742823492?fbclid=PAZXh0bgNhZW0CMTEAAaf_pFdpSxct1g2u6LMx-xa9ov6VnwKwy7fH_bMlzc8wWoIU9Jne3c8WOtKADQ_aem_nvxupJp8Sm8FCnFQgnHkdw" 
                target="_blank" 
                rel="noopener noreferrer"
                id="tremplinButton">
                    ♫ Inscription au Tremplin ♫
                </a>
            </div>

            <hr/>

            </div>
);
}

export default Tremplin;
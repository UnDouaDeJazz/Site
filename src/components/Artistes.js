
import Header from "./Header.js"
import disc from "../media/headerDiscComp.jpg";

import {donneesPageArtistesActuelsNb, donneesAnciennesNb, donneesPageArtistesActuelsSize, donneesAnciennesSize} from '../data/data.js';
import "./Artistes.css"
import { NavLink } from 'react-router-dom';

// function ArtistesActuels(number){
//     const data=donneesNb(number);

//     if(data.duo===true){
//         return(
//             <div class="deuxParties">

//                 <NavLink to={"/artistes/concert/"+data.id} style={{ textDecoration: 'none' }}>
//                     <div class="img">
//                         <img src={data.img1} alt={data.nom1}/>
//                         <div class="vl"/>
//                         <img src={data.img2} alt={data.nom2}/>
//                         <p class="date"><span>{data.day}</span><br/>{data.month}</p>

//                         <p class="name"><span class="partie">Partie 1 - </span>{data.nom1}</p>
//                         <p class="name"><span class="partie">Partie 2 - </span>{data.nom2}</p>
//                     </div>
                    
//                 </NavLink>
//             </div>
//         );
//     }else{
//         return(
//         <div class="unePartie">

//                 <NavLink to={"/artistes/concert/"+data.id} style={{ textDecoration: 'none' }}>
//                     <div class="img">
//                         <img src={data.img1} alt={data.name}/>
//                         <p class="date"><span>{data.day}</span><br/>{data.month}</p>

//                         <p class="name">{data.name}</p>
//                     </div>
                    
//                 </NavLink>
//             </div>
//         );
//     }
// }

function ArtistesActuels(number){
    const data=donneesPageArtistesActuelsNb(number);
        return(
        <div class="unePartie">

                <NavLink to={"/artistes/concert/"+data.id} style={{ textDecoration: 'none' }}>
                    <div class="img">
                        <img src={data.img} alt={data.name}/>
                        <p class="date"><span>{data.day}</span><br/>{data.month}</p>

                        <p class="name">{data.name}</p>
                    </div>
                    
                </NavLink>
            </div>
        );
}

function ArtistesAnciens(number){
    const data=donneesAnciennesNb(number);

    if(data.duo===true){
        return(
            <div class="deuxParties">
                    <div class="img">
                        <img src={data.img1} alt={data.nom1}/>

                        <p class="name">{data.nom1}</p>
                        <p class="year">{data.year}</p>
                    </div>
            </div>
        );
    }else{
        return(
        <div class="unePartie">
                    <div class="img">
                        <img src={data.img1} alt={data.name}/>
                        
                        <p class="name">{data.name}</p>
                        <p class="year">{data.year}</p>
                    </div>
            </div>
        );
    }
}

function TableActuels(){

    var children=[];
    for(let i=1;i<=donneesPageArtistesActuelsSize();i++){
        children.push(ArtistesActuels(i));
    }
    var retour=(
        <div id="artistesActGrid">
            {children}
        </div>);
        return retour
        
    
}

function TableAnciens(){

    var children=[];
    console.log(donneesAnciennesSize());
    //for(let i=1;i<=donneesAnciennesSize();i++){       - ancienne manière de faire de Colin - modifiée pour que l'affichage des artistes mette le plus ancien = plus petit numéro = en bas de page
    for (let i = donneesAnciennesSize(); i >= 1; i--) {
        children.push(ArtistesAnciens(i));
    }
    var retour=(
        <div id="artistesGrid">
            {children}
        </div>);
        return retour

}

function Artistes() {
    var contenu=[
    <div id="headerArtistes">
    <img src={disc} alt="logo disque UnDouaDeJazz" id="imgDisc"/>
    <p>NOS <span>ARTISTES</span></p>
    </div>, 
    <Header />,
    <hr/>
    ];


    if(donneesPageArtistesActuelsSize()>0){

        contenu.push(<h1>Nos Artistes {new Date().getFullYear()}</h1>);
        contenu.push(TableActuels());
        contenu.push(<hr class="inter"/>);
    }

    contenu.push(<h1>Memories</h1>)
    contenu.push(TableAnciens())
    contenu.push(<hr/>)

    return(<div id="artistes">
        {contenu}
        </div>);

    
}

export default Artistes;
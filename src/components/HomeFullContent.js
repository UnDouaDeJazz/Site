

import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {donneesNb, donneesSize} from '../data/data.js'

import "./HomeFullContent.css"



function Case(number){
    const data=donneesNb(number);

    if(data.duo===true){
        return(
            // <div class="deuxParties">

            //     <NavLink to={"/home/concert/"+data.id}>
            //         <div class="img">
            //             <img src={data.img1} alt={data.nom1}/>
            //             <div class="vl"/>
            //             <img src={data.img2} alt={data.nom2}/>
            //             <p class="date"><span>{data.day}</span><br/>{data.month}</p>

            //             <p class="name"><span class="partie">Partie 1 - </span>{data.nom1}</p>
            //             <p class="name"><span class="partie">Partie 2 - </span>{data.nom2}</p>
            //         </div>
                    
            //     </NavLink>
            // </div>

            <div class="unePartie">

                <HashLink to={"/home/concert/"+data.id+"#concertTotal"}>
                    <div class="img">
                        <img src={data.imgMenu} alt={data.nom2}/>
                        <p class="date"><span>{data.day}</span><br/>{data.month}</p>

                        <p class="name">{data.nom2}</p>
                        <p class="namePremierePartie"><span class="partie">{data.nomPartie} : </span> {data.nom1}</p>
                    </div>
                    
                </HashLink>
            </div>
        );
    }else{
        return(
        <div class="unePartie">

                <HashLink to={"/home/concert/"+data.id+"#concertTotal"}>
                    <div class="img">
                        <img src={data.imgMenu} alt={data.name}/>
                        <p class="date"><span>{data.day}</span><br/>{data.month}</p>

                        <p class="name">{data.name}</p>
                    </div>
                    
                </HashLink>
            </div>
        );
    }
}

function Table(){

    var children=[];
    for(let i=1;i<=donneesSize();i++){
        children.push(Case(i));
    }
    var retour=(
        <div id="gridProg">
            {children}
        </div>);
        return retour
        
    
}

function HomeFullContent() {
return (
    <div id="homeContent">
        <p id="prog">Programmation 2025.</p>
        <p id="prog">Voici le début du reveal pour cette nouvelle édition. Restez connectés pour connaitre la suite !</p>
        {Table()}

        <p id="prog">Il sera très prochainement possible d'accéder aux billeteries en ligne.</p>
    </div>
    );
}


// <p href="https://youtu.be/U6ZTbmH24wM?feature=shared">
// <button id="LienButton" onclick="window.location.href='https://youtu.be/U6ZTbmH24wM?feature=shared';">Lien vidéo</button></p>

export default HomeFullContent;
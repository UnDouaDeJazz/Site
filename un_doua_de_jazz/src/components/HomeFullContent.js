
import { NavLink } from 'react-router-dom';
import {donneesNb} from '../data/data.js'

import "./HomeFullContent.css"

function Case(number){
    const data=donneesNb(number);

    if(data.duo===true){
        return(
            <div class="deuxParties">

                <NavLink to={"/home-full/concert/"+data.id}>
                    <div class="img">
                        <img src={data.img1} alt={data.nom1}/>
                        <div class="vl"/>
                        <img src={data.img2} alt={data.nom2}/>
                        <p class="date"><span>{data.day}</span><br/>{data.month}</p>

                        <p class="name"><span class="partie">Partie 1 - </span>{data.nom1}</p>
                        <p class="name"><span class="partie">Partie 2 - </span>{data.nom2}</p>
                    </div>
                    
                </NavLink>
            </div>
        );
    }else{
        return(
        <div class="unePartie">

                <NavLink to={"/home-full/concert/"+data.id}>
                    <div class="img">
                        <img src={data.img1} alt={data.name}/>
                        <p class="date"><span>{data.day}</span><br/>{data.month}</p>

                        <p class="name">{data.name}</p>
                    </div>
                    
                </NavLink>
            </div>
        );
    }
}

function HomeFullContent() {
return (
    <div id="homeContent">
        <p id="prog">Programmation 2022</p>
        <div id="gridProg">
            {Case(1)}
            {Case(2)}
            {Case(3)}
            {Case(1)}
            {Case(2)}
            {Case(3)}
        </div>
    </div>
    );
}

export default HomeFullContent;
import { NavLink } from 'react-router-dom'
import './HomeFull.css';
import './Benevole.css'
import './Concert.css'
import './Artistes.css';
import { useParams } from 'react-router-dom'
import HomeFullContent from "./HomeFullContent.js"
import HeaderHome from "./HeaderHome.js"
import Artistes from "./Artistes.js"
import {donnees} from "../data/data.js"




function arrierePlan(endroit){
    if(endroit==="home-full"){
        return(
    <div id="blur">
        <div id="headerWrap">
            <HeaderHome/>
        </div>
        <div id="artistesWrapper">
          
                <HomeFullContent/>
        </div>

    </div>);
    }
    else if(endroit==="artistes"){
        return(
<div id="blur">
        <div id="artistesWrapperConcert">
          
                <Artistes />
        </div>

    </div>);
    }
}

function Concert() {
    const { concertName } = useParams();
    const { endroit } = useParams();
    const data = donnees(concertName);
    const arriere = arrierePlan(endroit);
    const retour = "/"+endroit;
    //const arrierePlan = arriere(endroit);
  return (
      <div id="concertTotal">

    <div id="home">

        {arriere}



    </div>

    <div id="concert">
        <div id="infosConcert">

    <NavLink to={retour}>
        <button id="retour"> {"←"} </button>
    </NavLink>
        <p id="name">
                {data.name.toLocaleUpperCase()}
            </p>
            <p id="date">
                <span>{data.day}</span><br/>{data.month}
            </p>

            <p id="lieu">{data.place}</p>

            <p id="heure">{data.hour}</p>
            <hr id="concertHr"/>
            <h3 class="tarif">Tarifs :</h3>
            <p class="tarif">
                {data.nomTarif1} : <br/>
                <span>{data.tarif1}€</span>
            </p>
            <p class="tarif">
                {data.nomTarif2} : <br/>
                <span>{data.tarif2}€</span>
            </p>
            <p class="tarif">
                {data.nomTarif3}: <br/>
                <span>{data.tarif3}€</span>
            </p>
            <a href={data.billeterie}>
            <button id="billeterieConcert">BILLETERIE</button>
            </a>
        </div>
        <div id="infosGroupe">
        <img src={data.img1} alt="blast" class="header"/>
        <p id="quoteConcert">“{data.quote}”</p>
        <img src={data.img2} alt="blast"/>
        <p id="descrConcert">{data.desc}</p>
        </div>

    </div>
    </div>

  );
}

export default Concert;

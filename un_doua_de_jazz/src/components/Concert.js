import { NavLink, Link } from 'react-router-dom'
import './Home.css';
import './Benevole.css'
import './Concert.css'
import './Artistes.css';
import { useParams } from 'react-router-dom'
import HomeFullContent from "./HomeFullContent.js"
import HeaderHome from "./HeaderHome.js"
import Artistes from "./Artistes.js"
import {donnees} from "../data/data.js"
import { useHistory } from 'react-router-dom';




function arrierePlan(endroit){

    
    if(endroit==="home"){
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
    var retour = "/";
    if(endroit==="artistes"){
        retour += "artistes";
    }
    //const arrierePlan = arriere(endroit);
    var nomPremierePartie=null;
    if(data.duo === true){
        nomPremierePartie=(<div id="divPremierePartie"><p id="premierePartie">Première partie</p><p id="namePremierePartie">{data.nom1.toLocaleUpperCase()}</p></div>);
    }


    var infosConcert=null;
    if(data.gratuit === true){
        if(data.reservable === true){
            infosConcert=(<div id="infosConcert">

        <NavLink to={retour}>
            <button id="retour"> {"←"} </button>
        </NavLink>
            <p id="name">
                    {data.name.toLocaleUpperCase()}
                </p>
                {nomPremierePartie}
                <p id="date">
                    <span>{data.day}</span><br/>{data.month}
                </p>
    
                <a href={data.placeIndications}><p id="lieu">{data.place}</p></a>
    
                <p id="heure">{data.hour}</p>
                <hr id="concertHr"/>
                {/* <p class="tarif">Billetterie bientôt disponible !</p> */}
                <h3 class="tarif">Concert gratuit</h3>
                <a href={data.billeterie}>
                <button id="billeterieConcert">BILLETTERIE</button>
    
                </a>
            </div>);
        }else{
            infosConcert=(<div id="infosConcert">

            <NavLink to={retour}>
                <button id="retour"> {"←"} </button>
            </NavLink>
                <p id="name">
                        {data.name.toLocaleUpperCase()}
                    </p>
                    {nomPremierePartie}
                    <p id="date">
                        <span>{data.day}</span><br/>{data.month}
                    </p>
        
                    <a href={data.placeIndications}><p id="lieu">{data.place}</p></a>
        
                    <p id="heure">{data.hour}</p>
                    <hr id="concertHr"/>
                    {/* <p class="tarif">Billetterie bientôt disponible !</p> */}
                    <h3 class="tarif">Concert gratuit sans réservations</h3>
                </div>);
        }
        
    }else{
        infosConcert=(<div id="infosConcert">

        <NavLink to={retour}>
            <button id="retour"> {"←"} </button>
        </NavLink>
            <p id="name">
                    {data.name.toLocaleUpperCase()}
                </p>
                {nomPremierePartie}
                <p id="date">
                    <span>{data.day}</span><br/>{data.month}
                </p>
    
                <a href={data.placeIndications}><p id="lieu">{data.place}</p></a>
    
                <p id="heure">{data.hour}</p>
                <hr id="concertHr"/>
                {/* <p class="tarif">Billetterie bientôt disponible !</p> */}
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
            <button id="billeterieConcert">BILLETTERIE</button>

            </a>
            </div>);
    }
  return (
      <div id="concertTotal">
    <NavLink to={retour}>
    <div id="home">
        {arriere}


    </div>
</NavLink>
    <div id="concert">
        {infosConcert}
        <div id="infosGroupe">
        <img src={data.img1} alt="blast" class="header"/>
        {data.quote}

        {data.desc2}
        <img src={data.img2} alt="blast"/>
        {data.desc}
        
        </div>

    </div>
    </div>

  );




}

export default Concert;

import "./Photos.css";
import Header from "./Header.js"
import {HashLink} from 'react-router-hash-link';
import {photosNb, photosSize} from '../data/data.js';

function Partenaires() {
    console.log(photosSize())
    var photos=[];
    for(let i=0;i<photosSize();i++)
    {
        const photosInter = photosNb(i);
        //photos.push(<img src={photosInter.img} alt={photosInter.name}/>);
        photos.push(<div className="photosImageContainer">
        
        <img src={photosInter.img} alt={photosInter.name}/>
        <p className="photosImageText">{photosInter.name}</p>
        
        </div>);


        
    }
    
return (
    <div id="part">
        <div id="headerPart">
        <div id="imgHeaderPart">
        </div>
        <Header /></div>

        <div id="contentPart">
            <p id="partTitle">Edition 2022</p>
            <hr/>
            <div id="photosPage">
            {photos}
                </div>
            </div>
            
            <hr/>
    </div>
);
}

export default Partenaires;
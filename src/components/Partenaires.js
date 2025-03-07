import "./Partenaires.css";
import Header from "./Header.js"
import {HashLink} from 'react-router-hash-link';
import {partenaireNb, partenairesSize} from '../data/data.js';

function Partenaires() {
    console.log(partenaireNb(1))
    var partenaires=[];
    for(let i=0;i<partenairesSize();i++)
    {
        const partenaireInter = partenaireNb(i);
        partenaires.push(<img src={partenaireInter.img1} alt={partenaireInter.name}/>);
    }
    
return (
    <div id="part">
        <div id="headerPart">
        <div id="imgHeaderPart">
        </div>
        <Header /></div>

        <div id="contentPart">
            <p id="partTitle">Nos Partenaires</p>
            <hr/>
            <div id="partenairesPage">
            {partenaires}
                </div>
                <p id="devenirPartenaires">Vous souhaitez devenir partenaires ? <HashLink to="/contact#header">Contactez-nous !</HashLink></p>
        </div>
            
            <hr/>
    </div>
);
}

export default Partenaires;
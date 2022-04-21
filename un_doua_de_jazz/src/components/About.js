import "./About.css";
import Header from "./Header.js"
import disc from "../media/headerDisc.jpg";


function About() {
return (
    <div id="about">
    
        <div id="headerAbout">
            <img src={disc} alt="logo disque UnDouaDeJazz" id="imgDisc"/>
            <p>LE <span>FESTIVAL</span></p>

        </div>

        <Header />
        <div id="aboutWrapper">
            <p>Créé en<br/><span>1994</span></p>
            <p>Festival annuel en<br/><span>OCT.</span></p>
            <p>Association étudiante de<br/>l'<span>INSA</span></p>

            </div>
            <div id="aboutText">
                <p>Créé il y a 28 ans, le festival Un Doua de Jazz est aujourd'hui devenu un des festivals de Jazz les plus influents de la région Rhône-Alpes. Son but principal est de promouvoir non seulement le Jazz mais également les styles musicaux qui en découlent (funk, soul, hip hop, afrobeat ...) dans le milieu étudiant. Grâce à une programmation variée, des prix attractifs et au travail passionné d'une équipe bénévole, le festival rend accessible un monde musical trop souvent stéréotypé.</p>
                <p>Courant octobre se déroulent dans Villeurbanne, pendant deux semaines, des concerts qui mettent en scène aussi bien de jeunes artistes issus de la scène régionale que des musiciens de renommée internationale. Le festival donne ainsi l'opportunité aux jeunes artistes de démontrer leur talent, tout en bénéficiant des performances exceptionnelles des musiciens les plus expérimentés. Par ailleurs, Un Doua De Jazz s'applique tout au long de l'année à organiser des événements ayant pour but de partager la musique Jazz avec le plus grand nombre, comme des concerts gratuits ou des jams ouvertes aux musiciens.</p>
                <p>En France, Un Doua De Jazz est le seul événement de ce type. C'est une belle opportunité de se rapprocher de la musique et de découvrir de nouveaux horizons artistiques. Le festival a ainsi réussi, en suivant ses engagements au fil des années, à satisfaire son public grandissant, qu'il soit passionné ou simplement curieux.</p>
            </div>
            <hr/>
    </div>
);
}

export default About;
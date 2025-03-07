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
            <p>Créé en<br/><span>1993</span></p>
            <p>Festival annuel en<br/><span>OCT. </span></p>
            <p>Association étudiante de<br/>l'<span>INSA</span></p>

            </div>
            <div id="aboutText">
                <p>Depuis 1993 un Doua De Jazz c’est LE festival de jazz étudiant ! Unique en France, il s’agit d’un festival ayant lieu courant octobre à Lyon et Villeurbanne. Sur un peu plus d’une semaine sont organisés de nombreux concerts de jazz, et de tous les styles qui en découlent : house, funk, soul... Le festival c’est également des masterclass, jam sessions et expositions, le tout organisé par une équipe d’étudiants bénévoles et passionnés!</p>
                <p>L’objectif du festival est de faire découvrir un nouvel univers musical au monde étudiant et pour cela, nous proposons des concerts variés à des prix avantageux et accessibles à tous ! Le Doua de Jazz, c’est aussi l’occasion de mettre en avant des artistes locaux et de faire jouer des figures célèbres de la scène internationale.</p>
                <p>Pendant le reste de l’année, le Doua de Jazz s’applique à partager sa passion autour d’autres  événements tels qu’un tremplin, des jam sessions ouvertes à tout musicien, concerts gratuits ou encore expositions !</p>
                <p>Depuis sa création le festival s’est développé et a déjà eu l’honneur d’accueillir des figures incontournables de la scène internationale telles que Cory Henry, Chris Potter, Robert Glasper, Tigran Hamasyan, ou bien encore Oscar Jerome, Dooz Kawa...</p>
                <p>En suivant ses engagements au fil des années, le Doua de Jazz a ainsi réussi à regrouper un véritable public grandissant, qu'il soit passionné ou simplement curieux :) </p>
            </div>
            <hr/>

            </div>
);
}

export default About;
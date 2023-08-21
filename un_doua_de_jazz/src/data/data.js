

import chris from '../media/chris-potter.png';
import tigran from '../media/tigran-hamasaya.png';
import anomalie from '../media/anomalie.jpg';
import bertaut from '../media/bertaut.jpg';
import dooz from '../media/dooz.png';
import foehn from '../media/foehn.jpg';
import garcia from '../media/garcia.jpg';
import glasper from '../media/glasper.jpg';
import glyk from '../media/glyk.jpeg';
import yellowstraps from '../media/yellowstraps.jpg';
import henry from '../media/cory.jpg';

import CSW from '../media/CSW.jpg';
import CSW2 from '../media/CSW_square.jpg';
import Emile from '../media/emile2.jpg';
import Emile2 from '../media/emile.jpg';
import GTO from '../media/GTO.jpg';
import GTO2 from '../media/GTO2.jpg';
import Jet from '../media/jet.jpg';
import Jet2 from '../media/jet2.jpg';
import Phal from '../media/phal.png';
import Phal2 from '../media/phal2.jpg';
import Oscar from '../media/oscar.png';
import Oscar2 from '../media/oscar2.jpg';
import Cimes from '../media/cimes.jpg';
import Cimes2 from '../media/cimes2.jpg';
import Zeph from '../media/zeph.jpg';
import Zeph2 from '../media/zeph2.jpg';
import Gaspard from '../media/gaspard.jpg';
import Gaspard2 from '../media/gaspard2.jpg';
import Gogo from '../media/gogo.png';
import Duda from '../media/duda.jpg';
import Duda2 from '../media/duda2.jpg';

import airelleBesson from '../media/airelle-lionel.jpg'
import airelleBesson2 from '../media/airelle-lionel2.jpg'
import oeuf from '../media/oeuf.jpg'
import oeuf2 from '../media/oeuf2.jpg'

import photo1 from '../media/photos2022/1.jpg';
import photo2 from '../media/photos2022/2.jpg';
import photo3 from '../media/photos2022/3.jpg';
import photo4 from '../media/photos2022/4.jpg';
import photo5 from '../media/photos2022/5.jpg';
import photo6 from '../media/photos2022/6.jpg';
import photo7 from '../media/photos2022/7.jpg';
import photo8 from '../media/photos2022/8.jpg';
import photo9 from '../media/photos2022/9.jpg';
import photo10 from '../media/photos2022/10.jpg';
import photo11 from '../media/photos2022/11.jpg';
import photo12 from '../media/photos2022/12.jpg';
import photo13 from '../media/photos2022/13.jpg';
import photo14 from '../media/photos2022/14.jpg';
import photo15 from '../media/photos2022/15.jpg';
import photo16 from '../media/photos2022/16.jpg';
import photo17 from '../media/photos2022/17.jpg';
import photo18 from '../media/photos2022/18.jpg';
import photo19 from '../media/photos2022/19.jpg';
import photo20 from '../media/photos2022/20.jpg';

import villeurbanne from '../media/logo-villeurbanne.png'
import lyon from '../media/logo-lyon.jpg'
import rhinojazz from '../media/logo-rhinojazz.jpg'
import va from '../media/logo-va.png'
import insa from '../media/logo-insa.png'
import helloasso from '../media/logo-helloasso.png'
import crous from '../media/logo-crous.jpg'
import cfc22 from '../media/logo-cfc22.png'
import alumni from '../media/logo-alumni.jpg'
import grandlyon from '../media/logo-grandlyon.png'
import jsmusique from '../media/logo-jsmusique.jpg'
import baguetterie from '../media/logo-baguetterie.jpg'
import ministere from '../media/logo-ministere.png'
import aura from '../media/logo-aura.png'
import mediatheques from '../media/logo-mediatheques.jpg'

const partenaires=[
    {
        name : "villeurbanne",
        img1: villeurbanne,
        link: ""
    },{
        name : "lyon",
        img1: lyon,
        link: ""
    },{
        name : "rhinojazz",
        img1: rhinojazz,
        link: ""
    },{
        name : "va",
        img1: va,
        link: ""
    },{
        name : "insa",
        img1: insa,
        link: ""
    },{
        name : "helloasso",
        img1: helloasso,
        link: ""
    },{
        name : "crous",
        img1: crous,
        link: ""
    },{
        name : "cfc22",
        img1: cfc22,
        link: ""
    },{
        name : "alumni",
        img1: alumni,
        link: ""
    },{
        name : "grandlyon",
        img1: grandlyon,
        link: ""
    },{
        name : "jsmusique",
        img1: jsmusique,
        link: ""
    },{
        name : "baguetterie",
        img1: baguetterie,
        link: ""
    },{
        name : "ministere_*de_la_culture",
        img1: ministere,
        link: ""
    },{
        name : "aura",
        img1: aura,
        link: ""
    },{
        name : "mediatheques",
        img1: mediatheques,
        link: ""
    },
]


const dataPageArtistesActuels=[
    /*
    {nb:1,
    id: 'zeph',
name : 'ZEPH',
img: Zeph,
day:'13',
month:'oct.'},
{nb:2,
id: 'zeph',
name : 'SupermarchéGoGo',
img: Gogo,
day:'13',
month:'oct.'},
    {nb:6,
    id: 'CSW',
    name: 'Charlier-Sourisse-Winsberg',
    img: CSW2,
    day : '18',
    month : 'oct.',},

    {nb:5,
        id: 'CSW',
        name: 'Jet Whistle',
        img: Jet,
        day : '18',
        month : 'oct.',},

        {nb:3,
        id:'Emile',
        day : '15', 
        month : 'oct.',
        name: "Emile Londonien", //nom affiché
        img : Emile2,
    },

{nb:4,
    id: 'baradel',
img : Gaspard, //image carrée du menu
name : 'Gaspard Baradel',
day : '17',
month : 'oct.'},
    {nb:7,
        id: 'Phal', //adresse url pour affichage
            name: "Léon Phal", //nom affiché
            img : Phal, //image carrée du menu
            day : '19', 
            month : 'oct.',
    },
        
    {nb:9,
        id: 'oscar',
    img : Oscar, //image carrée du menu
    name : 'Oscar Jerome',
    day : '20',
    month : 'oct.'},
{nb:8,
id: 'oscar',
name: 'Gin Tonic Orchestra',

day : '20',
month : 'oct.',
img:GTO},
        
{nb:10,
    id: 'duda',
img : Duda2, //image carrée du menu
name : 'Joanna Duda',
day : '21',
month : 'oct.'},
*/
]


const data=[
{
    nb : 1, //numéro de repérage pour affichage
    id: 'besson-suarez', //adresse url pour affichage
    name: "A. Besson & L. Suarez", //nom affiché
    quote : <p id="quoteConcert">"Ensemble, ils créent une expérience sonore captivante, mêlant jazz et mélodies
    ensorcelantes. Leur complicité sur scène crée un dialogue musical exceptionnel, vous invitant à un
    voyage enivrant à travers des notes qui touchent l'âme. "</p>,
    //premier texte
    desc : <p id="descrConcert"> Laissez-vous charmer par la symbiose musicale entre Airelle Besson et Lionel Suarez. Airelle Besson,
    talentueuse trompettiste, transporte les auditeurs avec son jeu émotionnel mais audacieux et son
    timbre envoûtant. Lionel Suarez, maître de l'accordéon, ajoute une touche magique avec sa virtuosité
    et sa sensibilité. </p>,
    desc2 : '',
    //deuxième texte
    img1 : airelleBesson, //image header
    img2 : airelleBesson2, //image milieu de texte
    imgMenu : airelleBesson,
    day : '17', 
    month : 'oct.',
    year : '2023',
    hour : '??', //la date précise du concert
    place : "Theatre Astree",//l'endroit du concert
    placeIndications : 'https://theatre-astree.univ-lyon1.fr/',
    nomTarif1 : 'Tarif plein', //tous les tarifs (3 maximum pour l'instant)
    tarif1 : 0,
    nomTarif2 : "Tarif réduit étudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e",
    tarif2 : 0,
    nomTarif3 : 'Abonnement Espace Tonkin',
    tarif3 : 0,
    billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/airelle-bessonlionel-suarez-duo-hugo-diaz-quartet',
    //adresse de la billetterie de ce concert
    duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
    // gratuit : true,
    reservable : true,
    disponibiliteTarifs : true,
    // partenariat : <h3 id="Partenariat">Concert proposé par notre partenaire</h3>
},
{        
    nb : 2, //numéro de repérage pour affichage
id: 'big-bang-oeuf', //adresse url pour affichage
name: "Big Band de l'oeuf", //nom affiché
quote : <p id="quoteConcert">"Préparez-vous à être emportés par cette vague de sonorités riches et
entraînantes, orchestrée avec passion et créativité."</p>,
//premier texte
desc : <p id="descrConcert"> Plongez dans l'énergie contagieuse du Big Band de l'Œuf, un groupe d’exception originaire de la région
Rhône-Alpes. Ce collectif musical, composé d'artistes passionnés et talentueux, fusionne les sons du
jazz classique avec une touche moderne et dynamique originale. Les mélodies puissantes et les
arrangements audacieux de Pierre Baldy-Moulinier créent une expérience musicale enivrante qui
transporte les auditeurs dans un tourbillon de rythmes et de harmonies, tout en venant habilement
rendre le jazz accessible à tous.  </p>,
desc2 : '',
//deuxième texte
img1 : oeuf, //image header
img2 : oeuf2, //image milieu de texte
imgMenu : oeuf,
day : '16', 
month : 'oct.',
year : '2023',
hour : '??', //la date précise du concert
place : "Rotonde de l'INSA",//l'endroit du concert
placeIndications : 'https://rotonde.asso-insa-lyon.fr/',
nomTarif1 : 'Tarif plein', //tous les tarifs (3 maximum pour l'instant)
tarif1 : 0,
nomTarif2 : "Tarif réduit étudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e",
tarif2 : 0,
nomTarif3 : 'Abonnement Espace Tonkin',
tarif3 : 0,
billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/airelle-bessonlionel-suarez-duo-hugo-diaz-quartet',
//adresse de la billetterie de ce concert
duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
// gratuit : true,
reservable : true,
disponibiliteTarifs : true,
// partenariat : <h3 id="Partenariat">Concert proposé par notre partenaire</h3>
},
    {
        nb : 3, //numéro de repérage pour affichage
        id: 'Phal', //adresse url pour affichage
        name: "Léon Phal", //nom affiché
        quote : <p id="quoteConcert">"Saxophoniste prometteur, Léon Phal fait partie de cette jeune génération de musiciens de jazz biberonnée aux classiques, dont il s’affranchit tout en leur rendant hommage à chaque note avec brio, qu’il s’agisse du RH Factor de Roy Hargrove ou du « Voodoo » de D’Angelo."</p>,
        //premier texte
        desc : <p id="descrConcert">Entouré de ses complices de toujours, sa maîtrise de l’instrument, son sens inouï de la mélodie et la délicatesse de ses compositions amplifiées par un groove dévastateur, présagent un bel avenir à ce franco-suisse originaire de Aÿ en Champagne. Une fraîcheur et un talent qui n’ont pas échappé aux festivals Nancy Jazz Pulsations et Jazz à Vienne, dont il est coup sur coup le lauréat des tremplins 2019. 
        <br/><br/>
        Sacré « Révélation » par les magazines Jazz News et Jazz Magazine pour la sortie de son premier album « Canto Bello », Léon Phal est à la tête d’un génial quintet dont les influences et l’imagination inspirent des improvisations remarquables. S’il flirte déjà dans la cour des grands du jazz contemporain, nul doute que son souffle, sa curiosité et son esprit libre le mèneront loin.
        <br/><br/>
        Léon Phal : saxophone
        <br/>
Zacharie Ksyk : trompette
<br/>
Gauthier Toux : claviers
<br/>
Arthur Alard : batterie
<br/>
Rémi Bouyssière : contrebasse</p>,
        desc2 : '',
        //deuxième texte
        img1 : Phal, //image header
        img2 : Phal2, //image milieu de texte
        imgMenu : Phal, //image carrée du menu
        day : '20', 
        month : 'oct.',
        year : '2023',
        hour : '21h00', //la date précise du concert
        place : 'Transbordeur', //l'endroit du concert
        placeIndications : 'https://www.transbordeur.fr/accueil/',
        nomTarif1 : 'Tarif plein : ', //tous les tarifs (3 maximum pour l'instant)
        tarif1 : '?€',
        nomTarif2 : "Etudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e : ",
        tarif2 : '€',
        nomTarif3 : 'Tarif carte VA : ',
        tarif3 : '€',
        billeterie : 'https://web.digitick.com/un-doua-de-jazz-leon-phal-concert-transbordeur-villeurbanne-20-octobre-2023-css5-transbordeur-pg101-ri9752327.html',
        //adresse de la billetterie de ce concert
        duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
        disponibiliteTarifs : true,
        gratuit : false,
        // partenariat : <h3 id="Partenariat">Concert organisé avec notre partenaire</h3>
    },
]

// const data=[

    
//     {
//         nb : 1, //numéro de repérage pour affichage
//         id: 'zeph', //adresse url pour affichage
//         name: "ZEPH", //nom affiché
//         quote : <p id="quoteConcert">"Préparez-vous à être emportés par la tornade de ZEPH ! Cet ensemble instrumental Lyonnais composé de 8 musiciens saura vous emmener vers les territoires du Groove. 
//         <br/><br/>Juste après jouera SupermarchéGoGo, l’union de deux amis musiciens de longue date, sous forme d’un DJ set 100% House."</p>,
//         //premier texte
//         desc2 : <p id="descrConcert">Leur signature musicale : Une rythmique affirmée et des cuivres puissants qui se répondent en permanence. Ce groupe grand format, c'est aussi le beat, l'afro, l'impro, le métissage et par-dessus tout une fougue et une énergie unique ! En bref, une formation qui ne peut pas laisser indifférent.
//         <br/><br/>
// Benjamin Meunier : trompette
// <br/>
// Fanny Bouteiller : basse
// <br/>
// Gregory Ivanoff : saxophone alto
// <br/>
// Jeremie Le Feuvre : guitare
// <br/>
// Julien Jet : trombone
// <br/>
// Lucas Meunier : saxophone ténor
// <br/>
// Quentin Fresnel : saxophone baryton
// <br/>
// Samuel Neyhousser : batterie
//         </p>,
//         desc : <p id="descrConcert">Par ses compositions originales, le duo SupermarchéGoGo propose une house moderne, qui fusionne des sonorités électroniques et acoustiques. Dans la lignée d’artistes tels que Björk ou Henri Wu, les univers de SMGG s’imprègnent de couleurs nu jazz et pop, pour une House électrisante.
//         <br/>
//         <br/>
//         Hugo Vieilly : machines, basse & percussions
//         <br/>
// Hugo Rinville : machines, claviers & percussions
//         </p>,
//         //deuGoGoxième texte
//         img1 : Zeph, //image header
//         img2 : Gogo, //image milieu de texte
//         imgMenu : Zeph,
//         day : '13', 
//         month : 'oct.',
//         year : '2022',
//         hour : '21h00', //la date précise du concert
//         place : "K-Fet",//l'endroit du concert
//         placeIndications : 'https://kfet-insa.fr/',
//         nomTarif1 : 'Tarif plein : ', //tous les tarifs (3 maximum pour l'instant)
//         tarif1 : '0€',
//         nomTarif2 : "",
//         tarif2 : '',
//         nomTarif3 : '',
//         tarif3 : '',
//         billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/concert-zeph',
//         //adresse de la billetterie de ce concert
//         gratuit : true, 
//         duo:true,
//         nom2: 'ZEPH',
//         nom1: 'SupermarchéGoGo',
//         nomPartie :  'Suivi de ',
//         reservable : false,
//         disponibiliteTarifs : false,
//     },
// {
//         nb : 2, //numéro de repérage pour affichage
//         id: 'cimes', //adresse url pour affichage
//         name: "La Litanie Des Cimes", //nom affiché
//         quote : <p id="quoteConcert">"Les prières de La Litanie des Cimes sont païennes. Fouillis intime contre clarté commune, vivacité du trait contre délicatesse mélodique, sacré boisé contre contemplation acharnée."</p>,
//         //premier texte
//         desc : <p id="descrConcert"> Créé en 2019, par le violoniste Clément Janinet avec Élodie Pasquier aux clarinettes et Bruno Ducret au violoncelle, La Litanie des Cimes joue avec les grands mouvements, les tempos lents d’apparence, et des contemplations harmoniques. Au sein de ce trio, l’improvisation est libre et introspective sans être recluse. Les harmonies échangées sont sans cesse rebattues par la répétition des motifs. On y entendrait presque des dialogues agités. L’énergie y est ardente. Fouillis intime contre clarté commune, vivacité du trait contre délicatesse mélodique. Cette musique, très ouverte, pourrait sonner comme la bande son d’un film sur la fin d’un monde, entendue depuis le sommet des grands arbres 
//         <br/><br/>
//         Clément Janinet : violon
//         <br/>
// Élodie Pasquier : clarinettes
// <br/>
// Bruno Ducret : violoncelle</p>,
//         desc2 : '',
//         //deuxième texte
//         img1 : Cimes, //image header
//         img2 : Cimes2, //image milieu de texte
//         imgMenu : Cimes,
//         day : '14', 
//         month : 'oct.',
//         year : '2022',
//         hour : '19h00 - 21h00', //la date précise du concert
//         place : "Maison du livre, de l'image et du son",//l'endroit du concert
//         placeIndications : 'https://mediatheques.villeurbanne.fr/2020/09/venir-2/',
//         nomTarif1 : 'Tarif plein', //tous les tarifs (3 maximum pour l'instant)
//         tarif1 : 0,
//         nomTarif2 : "Tarif réduit étudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e",
//         tarif2 : 0,
//         nomTarif3 : 'Abonnement Espace Tonkin',
//         tarif3 : 0,
//         billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/concert-litanie-des-cimes',
//         //adresse de la billetterie de ce concert
//         duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
//         gratuit : true,
//         reservable : false,
//         disponibiliteTarifs : false,
//         partenariat : <h3 id="Partenariat">Concert proposé par notre partenaire</h3>
//     },

//     {nb:5,
//         id: 'CSW', 
//     quote : <p id="quoteConcert">"C’est avec un grand bonheur que le trio Charlier / Sourisse / Winsberg a fait revivre la musique du monstre sacré du saxophone, Michael Brecker, à travers leur hommage « Tales from Michael», unanimement salué par le monde du Jazz.<br/><br/>En première partie, Jet Whistle réunit cinq amis musiciens proposant chacun leurs propres influences musicales allant du free jazz au hip hop, en passant par Pierre Boulez."</p>,
//     desc2 : <p id="descrConcert">Aujourd’hui, le trio au son chaleureux revient sur scène avec des compositions originales et un nouveau double album : « Le Monde à l’envers ». Entre dialogues harmoniques et joutes rythmiques, André, Benoît et Louis jouent le jeu approprié à chacune des petites histoires qu’ils savent si bien nous raconter.
//     <br/><br/>

// André Charlier : batterie, percussion<br/>

// Benoît Sourisse : orgue, Fender Rhodes<br/>

// Louis Winsberg : guitare
//     </p>,
//     desc : <p id="descrConcert">Le quintet Jet Whistle est à la recherche d'effets sonores et d'atmosphères électroniques. Beaucoup de place est laissée à l'improvisation et chaque musicien possède une grande liberté de jeu. De plus 'Jet Whistle' est un terme de musique contemporaine concernant la flûte traversière qui peut s'apparenter à un amas de souffle très fort. 
//     <br/><br/>
    
//     Le mélange des timbres flûte traversière et trombone ainsi que les multiples pédales d'effets de chacun ajoutent une couleur particulière à l'ensemble et dessine son empreinte sonore. 
//     <br/><br/>
    
//     Le répertoire tourne autour des compositions de Fanny Martin, la flûtiste à l'origine de ce projet.
//     <br/><br/>
//     Fanny Martin : flûte traversière
//     <br/>
// Jules Regard : trombone
// <br/>
// Adlane Aliouche : clavier
// <br/>
// Théo Fardèle : basse
// <br/>
// Elvin Mikaelian : batterie

// </p>,
//     img1 : CSW,
//     img2 : Jet,
//     imgMenu : CSW2, // image carrée du menu
//     day : '18',
//     month : 'oct.',
//     year : '2022',
//     hour : '20h20',
//     place : 'Theatre Astree',
//     placeIndications : 'https://theatre-astree.univ-lyon1.fr/acces-2/',
//     nomTarif1 : 'Tarif VA : ',
//     tarif1 : '8€',
//     nomTarif2 : "Etudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e : ",
//     tarif2 : '9.50€',
//     nomTarif3 : 'Plein tarif (gratuit pour les - de 12 ans) : ',
//     tarif3 : '13.50€',
//     billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/xkck',
//     duo:true,
//     gratuit : false,
//     name: 'Charlier-Sourisse-Winsberg',
//     nom2: 'Charlier-Sourisse-Winsberg',
//     nom1: 'Jet Whistle',
//     nomPartie : 'Première partie',
//     disponibiliteTarifs : true,
//     masterclass : true,
//     masterclassLien : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/master-class-trio-charlier-sourisse-winsberg-1',
//     masterclassHoraire : '16h15 pour la Master Class',
//     masterclassTexte : "IMPORTANT : Dans l'après-midi, Un Doua de Jazz est heureux de proposer une Master Class animée par le trio ! Elle est ouverte à tous et à toutes et les réservations sont obligatoires.",
//     },

//     {
//         nb :3, //numéro de repérage pour affichage
//         id: 'Emile', //adresse url pour affichage
//         name: "Emile Londonien", //nom affiché
//         quote : <p id="quoteConcert">"Issu de la scène strasbourgeoise et du collectif Omezis qui regroupe une vingtaine d’artistes, musiciens, Dj’s, vidéastes, Emile Londonien s’imprègne de la scène jazz anglaise de ces quinze dernières années pour en proposer une version personnelle !"</p>,
//         //premier texte
//         desc : <p id="descrConcert">Formés au Conservatoire de Strasbourg, les trois musiciens se rencontrent lors des soirées thématiques organisées par le collectif Omezis, co-fondé par le batteur Matthieu Drago. S’ensuit en 2020 une session studio rendant hommage à la scène anglaise. Le nom d’Emile Londonien, double clin d’œil à leurs influences UK et à un fameux saxophoniste français, jaillit spontanément. 
//         <br/><br/>
//         Le Covid 19 met le projet en sommeil jusqu’à ce que les bandes tombent entre les mains du label strasbourgeois historique de broken beat, Dope tone. Les choses vont alors s’accélérer. Les titres issus de cette première session sont relayés immédiatement par des dj’s influents comme Lefto. Le groupe, emblématique de cette génération qui a grandi dans la culture clubbing et tente de l’accorder avec la tradition du trio jazz, est lancé. 
//         <br/><br/>
        
//         Influencé par Yussef Kamaal, The Comet Is Coming, Atjazz, SunRa, mais aussi Ornette Coleman ou Thelonious Monket par les scènes, Broken Beat, Jazz, House, Hip Hop, Emile Londonien incarne ainsi à merveille cette « next gen » du jazz français aux cotés de Léon Phal, dont ils sont proches. Débarrassée des étiquettes, elle mixe sans complexe la tradition et les musiques actuelles avec le dancefloor pour mètre étalon. 
//         <br/><br/>
        
//         Un premier album, à paraitre début 2023, est en cours d’enregistrement avec des invités comme Emile Parisien, Thomas de Pourquery ou Léon Phal.
//         <br/><br/>
        
//         Nils Boyny : clavier
//         <br/>
// Matthieu Drago : batterie 
// <br/>
// Théo Tritsch : guitare basse</p>,
        

        
//         desc2 : '',
//         //deuxième texte
//         img1 : Emile2, //image header
//         img2 : Emile, //image milieu de texte
//         imgMenu : Emile2,
//         day : '15', 
//         month : 'oct.',
//         year : '2022',
//         hour : '', //la date précise du concert
//         place : 'Toï Toï', //l'endroit du concert
//         placeIndications : 'https://toitoilezinc.fr/infos-pratiques/',
//         nomTarif1 : 'Tarif mini : ', //tous les tarifs (3 maximum pour l'instant)
//         tarif1 : '8.50€',
//         nomTarif2 : 'Tarif réduit étudiants : ',
//         tarif2 : '7€',
//         nomTarif3 : 'Tarif solidaire : ',
//         tarif3 : "10€ - 15€",
//         billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/emile-londonien',
//         //adresse de la billetterie de ce concert
        
//         duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
//         disponibiliteTarifs : true,
//         gratuit : false,
//     },

//     {
//         nb :4, //numéro de repérage pour affichage
//         id: 'baradel', //adresse url pour affichage
//         name: "Gaspard Baradel", //nom affiché
//         quote : <p id="quoteConcert">"Le Gaspard Baradel Quartet réunit quatre musiciens de la région Auvergne Rhône-Alpes. Très investis dans la scène jazz locale, les membres du quartet ont depuis longtemps l’habitude de jouer ensemble à travers de nombreux projets musicaux."</p>,
//         //premier texte
//         desc : <p id="descrConcert">Le Gaspard Baradel Quartet propose un répertoire original, basé sur les compositions du saxophoniste et s’inscrit dans la veine du jazz actuel, inspiré par les grands artistes américains d’aujourd’hui et d’hier. Les quatre protagonistes vous feront voyager avec une musique riche, nuancée et énergique, où interaction est le maître mot. 
//         <br/>
//         <br/>
//         De 2019 à 2021 le Quartet de Gaspard Baradel a été sélectionné par le dispositif de soutien à l'émergence de l'association Jazz(s)RA. Au cours de l'année 2021 il a également obtenu le prix du public lors du tremplin européen de Jazz à Avignon ainsi que la mention spéciale coup de cœur du jury lors du tremplin national ReZZo Focal de Jazz à Vienne
//         <br/>
//         <br/>
        
//         Gaspard Baradel : saxophones alto et soprano
//         <br/>
        
//         Antoine Bacherot : Piano
//         <br/>
        
//         Cyril Billot : Contrebasse
//         <br/>
        
//         Josselin Hazard : batterie</p>,
        

        
//         desc2 : '',
//         //deuxième texte
//         img1 :Gaspard, //image header
//         img2 : Gaspard2, //image milieu de texte
//         imgMenu : Gaspard,
//         day : '17', 
//         month : 'oct.',
//         year : '2022',
//         hour : '20h00', //la date précise du concert
//         place : 'La Rotonde INSA Lyon', //l'endroit du concert
//         placeIndications : 'https://rotonde.asso-insa-lyon.fr/',
//         nomTarif1 : 'Tarif carte VA : ', //tous les tarifs (3 maximum pour l'instant)
//         tarif1 : '4€',
//         nomTarif2 : "Etudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e : ",
//         tarif2 : '5€',
//         nomTarif3 : 'Plein tarif : ',
//         tarif3 : '8€',
//         billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/concert-gaspard-baradel',
//         //adresse de la billetterie de ce concert
//         duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
//         disponibiliteTarifs : true,
//         gratuit : false,
//     },

    
    

//     // {
//     //     nb : 4, //numéro de repérage pour affichage
//     //     id: 'Jet', //adresse url pour affichage
//     //     name: "Jet Whistle", //nom affiché
//     //     quote : '"Jet Whistle réunit cinq amis musiciens proposant chacun leurs propres influences musicales allant du free jazz au hip hop, en passant par Pierre Boulez."',
//     //     //premier texte
//     //     desc : "Ce quintet est à la recherche d'effets sonores et d'atmosphères électroniques. Beaucoup de place est laissée à l'improvisation et chaque musicien possède une grande liberté de jeu. De plus 'Jet Whistle' est un terme de musique contemporaine concernant la flûte traversière qui peut s'apparenter à un amas de souffle très fort. Le mélange des timbres flûte traversière et trombone ainsi que les multiples pédales d'effets de chacun ajoutent une couleur particulière à l'ensemble et dessine son empreinte sonore. Le répertoire tourne autour des compositions de Fanny Martin, la flûtiste à l'origine de ce projet.",
//     //     //deuxième texte
//     //     img1 : Jet, //image header
//     //     img2 : Jet2, //image milieu de texte
//     //     day : '?', 
//     //     month : '?',
//     //     year : '?',
//     //     hour : '? - ?', //la date précise du concert
//     //     place : '?', //l'endroit du concert
//     //     nomTarif1 : 'Tarif plein', //tous les tarifs (3 maximum pour l'instant)
//     //     tarif1 : 0,
//     //     nomTarif2 : 'Tarif réduit chômeurs/étudiants',
//     //     tarif2 : 0,
//     //     nomTarif3 : 'Abonnement Espace Tonkin',
//     //     tarif3 : 0,
//     //     billeterie : 'https://www.helloasso.com/associations/centre-leo-lagrange-villeurbanne',
//     //     //adresse de la billetterie de ce concert
//     //     duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
//     // },

//     {
//         nb : 6, //numéro de repérage pour affichage
//         id: 'Phal', //adresse url pour affichage
//         name: "Léon Phal", //nom affiché
//         quote : <p id="quoteConcert">"Saxophoniste prometteur, Léon Phal fait partie de cette jeune génération de musiciens de jazz biberonnée aux classiques, dont il s’affranchit tout en leur rendant hommage à chaque note avec brio, qu’il s’agisse du RH Factor de Roy Hargrove ou du « Voodoo » de D’Angelo."</p>,
//         //premier texte
//         desc : <p id="descrConcert">Entouré de ses complices de toujours, sa maîtrise de l’instrument, son sens inouï de la mélodie et la délicatesse de ses compositions amplifiées par un groove dévastateur, présagent un bel avenir à ce franco-suisse originaire de Aÿ en Champagne. Une fraîcheur et un talent qui n’ont pas échappé aux festivals Nancy Jazz Pulsations et Jazz à Vienne, dont il est coup sur coup le lauréat des tremplins 2019. 
//         <br/><br/>
//         Sacré « Révélation » par les magazines Jazz News et Jazz Magazine pour la sortie de son premier album « Canto Bello », Léon Phal est à la tête d’un génial quintet dont les influences et l’imagination inspirent des improvisations remarquables. S’il flirte déjà dans la cour des grands du jazz contemporain, nul doute que son souffle, sa curiosité et son esprit libre le mèneront loin.
//         <br/><br/>
//         Léon Phal : saxophone
//         <br/>
// Zacharie Ksyk : trompette
// <br/>
// Gauthier Toux : claviers
// <br/>
// Arthur Alard : batterie
// <br/>
// Rémi Bouyssière : contrebasse</p>,
//         desc2 : '',
//         //deuxième texte
//         img1 : Phal, //image header
//         img2 : Phal2, //image milieu de texte
//         imgMenu : Phal, //image carrée du menu
//         day : '19', 
//         month : 'oct.',
//         year : '2022',
//         hour : '21h00', //la date précise du concert
//         place : 'Périscope', //l'endroit du concert
//         placeIndications : 'https://www.periscope-lyon.com/accessibilite/',
//         nomTarif1 : 'Tarif plein : ', //tous les tarifs (3 maximum pour l'instant)
//         tarif1 : '14€',
//         nomTarif2 : "Etudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e : ",
//         tarif2 : '10€',
//         nomTarif3 : 'Tarif carte VA : ',
//         tarif3 : '8€',
//         billeterie : 'https://billetterie.periscope-lyon.com/evenement/19-10-2022-21-00-l%C3%A9on-phal',
//         //adresse de la billetterie de ce concert
//         duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
//         disponibiliteTarifs : true,
//         gratuit : false,
//         partenariat : <h3 id="Partenariat">Concert organisé avec notre partenaire</h3>
//     },

//     {nb:7,
//         id: 'oscar', 
//     quote : <p id="quoteConcert">"Né à Norwich, Oscar a étudié au Trinity Laban de Londres avant de s'imposer comme l'un des musiciens de jazz les plus appréciés de la capitale.
//     <br/><br/>
//     Le Gin Tonic Orchestra, c’est avant tout une bande de copains qui se retrouve autour de la musique et réunit tous les amoureux du son. Pour 2022, le collectif de musiciens et DJs vous a préparé un live sous un tout nouveau format !"</p>,
//      desc2 : <p id="descrConcert">Oscar Jerome, suivant les traces de son père en tant que guitariste, a rapidement appris les bases et est devenu accro, citant George Benson, Wes Montgomery et John Coltrane comme ses principales influences. Explorant diverses avenues sonores, il s'est fait un nom sur la scène avec sa propre fusion rafraîchissante de jazz, de hip-hop, de soul et de funk, ce qui lui a valu une session live avec COLORS avant d'être nommé Guardians One To Watch en 2020. Reconnu à l'échelle mondiale pour sa guitare virtuose, il a composé le single « Abusey Junction » de Kokoroko et a participé à son enregistrement, en plus de travailler aux côtés de ses compagnons de Jazz ShabakaHutchings, Moses Boyd, Yussef Dayes et Lianne La Havas.Son premier album, « Breathe Deep », l'a emmené très loin. Il a donné des concerts en Australie et aux États-Unis, et a fait la première partie de la tournée de Kamasi Washington au Royaume-Uni, renforçant ainsi sa réputation d'artiste expérimenté. 
// <br/><br/>
//      Posant les bases de son héritage musical, son nouveau travail le voit s'ouvrir et explorer de nouvelles facettes de lui-même. « Sweet Isolation » est le début d'une série spéciale de musique d'Oscar Jerome.
//      <br/>
//      <br/>
//      (traduction par Alexandra Naze)
//      <br/>
//      <br/>
//      Oscar Jerome : guitare électrique et chant

//      <br/>
// Jonathan Moko : basse
// <br/>

// Richard Sweet : batterie & percussions
//      </p>,
//     desc : <p id="descrConcert">Après un premier EP sorti en 2019 sur le label Mother Tongue et de nombreux concerts en Europe, le groupe made in Sainté n’a eu de cesse de se réinventer. Oscillant entre future jazz, rock indie et broken beat, l’alchimie trouvée par la formation se révèle assez imparable. Elle a d’ailleurs collaboré avec l’une des légendes de la scène UK, Kaidi Tatham. En live ou en studio, le Gin Tonic Orchestra se renouvelle, innove et expérimente : il replace au centre des clubs l’acoustique et le live. 
//     <br/><br/>
//     Victor Dijoud : claviers, synthétiseurs
//     <br/>
// Léo Puccio : batterie
// <br/>
// Léo Aoun : basse
// <br/>
// Clément Céni : guitare
// <br/>
// Théo Giroudon : machines
// <br/>
// Additionel :
// <br/>
// Antoine Martin : saxophone
// <br/>
// Pierre Mendola : flute
//     </p>,
//     img1 : Oscar,
//     img2 : GTO,
//     imgMenu : Oscar, //image carrée du menu

//     day : '20',
//     month : 'oct.',
//     year : '2022',
//     hour : '21h00',
//         placeIndications : 'https://www.periscope-lyon.com/accessibilite/',
//         place : 'Périscope',
//     nomTarif1 : 'Tarif VA : ',
//     tarif1 : '10€',
//     nomTarif2 : "Etudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e : ",
//     tarif2 : '13€',
//     nomTarif3 : 'Plein tarif : ',
//     tarif3 : '18€',
//     billeterie : 'https://billetterie.periscope-lyon.com/evenement/20-10-2022-21-00-oscar-jerome',
//     duo:true,
//     name: 'Oscar Jerome',
//     nom2: 'Oscar Jerome',
//     nom1: 'Gin Tonic Orchestra',
//     nomPartie : 'Première partie',
//     disponibiliteTarifs : true,
//     gratuit : false,
//     partenariat : <h3 id="Partenariat">Concert organisé avec notre partenaire</h3>
// },

// {
//     nb : 8, //numéro de repérage pour affichage
//     id: 'duda', //adresse url pour affichage
//     name: "Joanna Duda", //nom affiché
//     quote : <p id="quoteConcert">"La musique de Joanna Duda est comprise au sens large comme expérimentale avec des éléments d’improvisation, de jazz et d’IDM."</p>,
//     //premier texte
//     desc : <p id="descrConcert">Joanna Duda Trio a été formé à la fin de 2017 dans le cadre du travail sur mon album solo KEEN. À l’origine, je supposais que je jouerais du matériel solo avec le groupe, mais j’ai vite réalisé qu’avec l’élément humain externe, je voulais créer autre chose. En conséquence, nous avons créé un son acoustique dans lequel le rythme domine et l’électronique est la quatrième personne à égalité de droits dans le groupe.
//     <br/><br/>
//     Les compositions ont été créées progressivement au fil des années. La première est PVSM, dont le riff m’est venu lors d’un soundcheck en 2016. La plus récente est Grasshopper que j’ai écrite lors de ma résidence à Vaanta, en Finlande, fin 2019. Le postulat du travail de cette équipe est la pleine conscience et délibérément lent/sans stress, nous sommes donc entrés en studio pour enregistrer FUMITSUKE en décembre 2020. En un jour et demi, nous avons enregistré le matériel – plus d’une heure de musique. Toutes les chansons, sauf The Mark, sont mes compositions.
//     <br/><br/>
//     Joanna Duda : piano
//     <br/>
//     Maksymilian Mucha : contrebasse/fx
//     <br/>
//     Michal Bryndal : batterie </p>,
//     desc2 : '',
//     //deuxième texte
//     img1 : Duda, //image header
//     img2 : Duda2, //image milieu de texte
//     imgMenu : Duda2, //image carrée du menu
//     day : '21', 
//     month : 'oct.',
//     year : '2022',
//     hour : '21h00', //la date précise du concert
//     place : 'Périscope', //l'endroit du concert
//     placeIndications : 'https://www.periscope-lyon.com/accessibilite/',
//     nomTarif1 : 'Tarif plein : ', //tous les tarifs (3 maximum pour l'instant)
//     tarif1 : '12€',
//     nomTarif2 : "Etudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e : ",
//     tarif2 : '10€',
//     nomTarif3 : '',
//     tarif3 : '',
//     billeterie : 'https://billetterie.periscope-lyon.com/evenement/21-10-2022-21-00-joanna-duda',
//     //adresse de la billetterie de ce concert
//     duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
//     disponibiliteTarifs : true,
//     gratuit : false,
//     partenariat : <h3 id="Partenariat">Concert proposé par notre partenaire</h3>
// },

    

// ]

const dataAnc=[
    {nb : 15,
        id: 'potter', 
        name: "Chris Potter",
       img1 : chris,
    
    year: '2003',
    edition : '10',
    duo : false,    
    },
    
    {nb : 14,
        id: 'tigran', 
        name: "Tigran Hamasyan",
    img1 : tigran,
    year: '2009',
    edition : '16',
    duo : false,    
    },
    {nb : 13,
        id: 'glasper', 
        name: "Robert Glasper",
    img1 : glasper,
    year: '2014',
    edition : '21',
    duo : false,    
    },
    {nb : 12,
        id: 'henry', 
        name: "Cory Henry",
    img1 : henry,
    year: '2015',
    edition : '22',
    duo : false,    
    },
    {nb : 11,
        id: 'foehn', 
        name: "Foehn Trio",
    img1 : foehn,
    year: '2016',
    edition : '23',
    duo : false,    
    },
    {nb : 10,
        id: 'glyk', 
        name: "Kinga Glyk",
    img1 : glyk,
    year: '2018',
    edition : '25',
    duo : false,    
    },
    {nb : 9,
        id: 'anomalie', 
        name: "Anomalie",
    img1 : anomalie,
    year: '2018',
    edition : '25',
    duo : false,    
    },
    {nb : 8,
        id: 'dooz', 
        name: "Dooz Kawa",
    img1 : dooz,
    year: '2018',
    edition : '25',
    duo : false,    
    },
    {nb : 7,
        id: 'garcia', 
        name: "Nubya Garcia",
    img1 : garcia,
    year: '2019',
    edition : '26',
    duo : false,    
    },
    {nb : 6,
        id: 'yellowstraps', 
        name: "Yellowstraps",
    img1 : yellowstraps,
    year: '2019',
    edition : '26',
    duo : false,    
    },
    {nb : 5,
        id: 'bertaut', 
        name: "Camille Bertaut",
    img1 : bertaut,
    year: '2021',
    edition : '28',
    duo : false,    
    },
        {nb:4,
        id: 'CSW',
        name: 'Charlier-Sourisse-Winsberg',
        img1: CSW2,
        year : '2022',
        edition : '29',
    duo:false},
    
            {nb:3,
            id:'Emile',
            year : '2022', 
            edition : '29',
            name: "Emile Londonien", //nom affiché
            img1 : Emile2,
            duo : false
        },
        {nb:2,
            id: 'Phal', //adresse url pour affichage
                name: "Léon Phal", //nom affiché
                img1 : Phal, //image carrée du menu
                year:'2022',
                edition  : '29',
                duo : false
        },
            
        {nb:1,
            id: 'oscar',
        img1 : Oscar, //image carrée du menu
        name : 'Oscar Jerome',
    year : '2022',
edition : '29',
duo : false},
    
]

const photos=[{
    img:photo1,
    name:"Gaspard Baradel 4tet"
},{
    img:photo2,
    name:"Gaspard Baradel 4tet"
},{
    img:photo3,
    name:"Gaspard Baradel 4tet"
},{
    img:photo4,
    name:"Gaspard Baradel 4tet"
},{
    img:photo5,
    name:"Zeph"
},{
    img:photo6,
    name:"Supermarché Gogo"
},{
    img:photo7,
    name:"Gin Tonic Orchestra"
},{
    img:photo8,
    name:"Oscar Jerome"
},{
    img:photo9,
    name:"Oscar Jerome"
},{
    img:photo10,
    name:"Oscar Jerome"
},{
    img:photo11,
    name:"Association Musicale de L'INSA"
},{
    img:photo12,
    name:"Zeph"
},{
    img:photo13,
    name:"Zeph"
},{
    img:photo14,
    name:"Gin Tonic Orchestra"
},{
    img:photo15,
    name:"Léon Phal"
},{
    img:photo16,
    name:"Léon Phal"
},{
    img:photo17,
    name:"Léon Phal"
},{
    img:photo18,
    name:"Trio Charlier Sourisse Winsberg"
},{
    img:photo19,
    name:"Trio Charlier Sourisse Winsberg"
},{
    img:photo20,
    name:"Trio Charlier Sourisse Winsberg"
}]

function photosNb(number){
    return photos[number];
}

function photosSize(){
    return photos.length;
}

function donnees(string){
    return data.find(el => el.id===string);
    
}

function donneesNb(number){
    return data.find(el => el.nb===number);
    
}


function donneesPageArtistesActuels(string){
    return dataPageArtistesActuels.find(el => el.id===string);
    
}

function donneesPageArtistesActuelsNb(number){
    return dataPageArtistesActuels.find(el => el.nb===number);
    
}

function donneesAnciennes(string){
    return dataAnc.find(el => el.id===string);
}

function donneesAnciennesNb(number){
    return dataAnc.find(el => el.nb===number);
}

function partenaire(string){
    return partenaires.find(el => el.name===string);
    
}

function partenaireNb(number){
    return partenaires[number];
}

function partenairesSize(){
    console.log(partenaires.length);
    return partenaires.length;
}

function donneesSize(){
    return data.length;
}

function donneesAnciennesSize(){
    return dataAnc.length;
}

function donneesPageArtistesActuelsSize(){
    console.log(dataPageArtistesActuels.length);
    return dataPageArtistesActuels.length;

}



export {photosSize, photosNb, donneesPageArtistesActuelsSize, donneesPageArtistesActuelsNb, donneesPageArtistesActuels, partenaireNb, partenairesSize, partenaire, donnees, donneesNb, donneesAnciennes, donneesAnciennesNb, donneesSize, donneesAnciennesSize};


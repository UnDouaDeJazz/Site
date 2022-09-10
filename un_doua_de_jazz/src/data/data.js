

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
    },
]
/*const data=[
{
    nb : 1, //numéro de repérage pour affichage
    id: 'blast', //adresse url pour affichage
    name: "Blast", //nom affiché
    quote : '"Un Doua de Jazz revient en force cette année avec un premier concert de Blast à l’Espace Tonkin pour démarrer le festival en beauté !"',
    //premier texte
    desc : 'Pierre Horckmans, Guillaume Bertrand et Anne Quilluer, formant un trio aventureux entremêlant jazz, pop et musique électronique sauront vous faire voyager dans un monde fictif, par leurs inspirations venant de la bande dessinée et du théâtre. S’alliant avec le dessinateur Benjamin Flao, ce concert dessiné fera vibrer tous vos sens, chaque musique inspirant le dessinateur sur scène pour créer des oeuvres inédites en direct, et chaque dessin inspirant la musique.',
    //deuxième texte
    img1 : glyk, //image header
    img2 : glyk, //image milieu de texte
    day : '7', 
    month : 'oct.',
    year : '2022',
    hour : '20h00 - 22h00', //la date précise du concert
    place : 'Espace Tonkin', //l'endroit du concert
    nomTarif1 : 'Tarif plein', //tous les tarifs (3 maximum pour l'instant)
    tarif1 : 18,
    nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    tarif2 : 12,
    nomTarif3 : 'Abonnement Espace Tonkin',
    tarif3 : 10,
    billeterie : 'https://www.helloasso.com/associations/centre-leo-lagrange-villeurbanne/evenements/blast?_gl=1%2agg0xrs%2a_ga%2aMTYzNDE1NjAyNi4xNjI0MzAwMDIz%2a_ga_TKC826G3G2%2aMTYzMTg4ODM3My41LjEuMTYzMTg4OTkzOC4w',
    //adresse de la billetterie de ce concert
    duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
},
    {nb:3,
        id: 'ishkero-eji', 
    quote : 'Quoi de mieux pour commencer sa semaine que le 3ème concert de la 28ème édition de votre festival favori ? Cette fois-ci, Un Doua de Jazz vous emmène à la Rotonde pour un concert jazz dans une ambiance décontractée.',
    desc : 'ISHKERO :  Ishkero est un jeune groupe parisien mêlant jazz moderne, rock et musique Gnawa, au groove puissant et moderne, apparaissant comme l’un des groupes montant des plus captivants de la scène française jazz. Alors laissez-vous séduire par ces jeunes artistes à l’avenir fort prometteur lors de cette soirée à la Rontonde le 11 octobre prochain.  ENSEMBLE JAZZ INSA :  Retrouvez en première partie un concert de l’Ensemble Jazz de l’INSA Lyon. Explorant les classiques mais aussi les dernières tendances jazz, cet ensemble saura vous mettre en jambe pour le concert d’Ishkero, au coeur du campus de la Doua.',
    img1 : glyk,
    img2 : glyk,
    day : '11',
    month : 'oct.',
    year : '2022',
    hour : '20h00 - 22h00',
    place : 'Theatre Astree',
    nomTarif1 : 'Tarif VA',
    nomTarif1 : 'Tarif plein',
    tarif1 : 18,
    nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    tarif2 : 12,
    nomTarif3 : 'Abonnement Espace Tonkin',
    tarif3 : 10,
    billeterie : 'https://www.',
    tarif1 : 4,
    nomTarif2 : 'Tarif étudiants',
    tarif2 : 5,
    nomTarif3 : 'Tarif plein',
    tarif3 : 8,
    billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/la-rotonde-ishkero-ensemble-jazz-insa',
    duo:true,
    name: 'EJI - ISHKERO',
    nom1: 'ISHKERO',
    nom2: 'EJI'
    },
    {nb:2,
        id: 'mcr', 
        name: 'Gérard Maimone',
    quote : 'Pour le deuxième concert du festival, Un Doua de Jazz vous emmène au Théâtre Astrée pour un concert qui saura satisfaire toutes vos envies jazz.',
    desc : 'Lors de ce concert, nous retrouverons Gérard Maimone et son groupe (Trio MCR) pour une carte blanche. Gérard Maimone a une expérience des plus intrigantes dans le domaine musical : additionnant expériences d’écritures de musiques à images et explorant différents styles. Du rock au tango, des musiques à l’esthétique orientale au jazz, il a su se démarquer parmi les autres en marquant sa musique de sa signature personnelle. Alors laissez-vous imprégner de ses mélodies lors de ce concert le 8 octobre prochain.',
    img1 : glyk,
    img2 : glyk,
    day : '8',
    month : 'oct.',
    year:'2022',
    hour : '20h20',
    place : 'Theatre Astree',
    nomTarif1 : 'Tarif Réduit (demandeurs d’emploi, minima sociaux, seniors de plus de 60 ans, personnels de l’Université de Lyon 1, de l’Enssib, personnels de l’UDL, groupes de dix personnes et plus)',
    tarif1 : 6,
    nomTarif2 : 'Tarif étudiants, moins de 18 ans',
    tarif2 : 0,
    nomTarif3 : 'Tarif plein',
    tarif3 : 12,
    billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/la-rotonde-ishkero-ensemble-jazz-insa',
    duo:false
    }

]*/

const dataPageArtistesActuels=[
    {nb:2,
    id: 'CSW',
    name: 'Charlier-Sourisse-Winsberg',
    img: CSW2,
    day : '18',
    month : 'oct.',},

    {nb:3,
        id: 'CSW',
        name: 'Jet Whistle',
        img: Jet,
        day : '18',
        month : 'oct.',},

        {nb:1,
        id:'Emile',
        day : '15', 
        month : 'oct.',
        name: "Emile Londonien", //nom affiché
        img : Emile2,
    },
    {nb:4,
        id: 'Phal', //adresse url pour affichage
            name: "Leon Phal Quintet", //nom affiché
            img : Phal, //image carrée du menu
            day : '19', 
            month : 'oct.',
    },
        
    {nb:5,
        id: 'oscar',
    img : Oscar, //image carrée du menu
    name : 'Oscar Jerome',
    day : '20',
    month : 'oct.'},
    {nb:6,
    id: 'oscar',
name: 'Gin Tonic',

day : '20',
month : 'oct.',
img:GTO},
    
]


const data=[

    
    {
        nb : 1, //numéro de repérage pour affichage
        id: 'zeph', //adresse url pour affichage
        name: "Zeph", //nom affiché
        quote : <p id="quoteConcert">"Préparez-vous à être emportés par la tornade de ZEPH ! Cet ensemble instrumental Lyonnais composé de 8 musiciens saura vous emmener vers les territoires du Groove."</p>,
        //premier texte
        desc : <p id="descrConcert">Leur signature musicale : Une rythmique affirmée et des cuivres puissants qui se répondent en permanence. Ce groupe grand format, c'est aussi le beat, l'afro, l'impro, le métissage et par-dessus tout une fougue et une énergie unique ! En bref, une formation qui ne peut pas laisser indifférent.
        <br/><br/>
Benjamin Meunier : trompette
<br/>
Fanny Bouteiller : basse
<br/>
Gregory Ivanoff : saxophone alto
<br/>
Jeremie Le Feuvre : guitare
<br/>
Julien Jet : trombone
<br/>
Lucas Meunier : saxophone ténor
<br/>
Quentin Fresnel : saxophone baryton
<br/>
Samuel Neyhousser : batterie
        </p>,
        desc2 : '',
        //deuxième texte
        img1 : Zeph, //image header
        img2 : Zeph2, //image milieu de texte
        imgMenu : Zeph,
        day : '13', 
        month : 'oct.',
        year : '2022',
        hour : '21h00', //la date précise du concert
        place : "K-Fet",//l'endroit du concert
        placeIndications : 'https://kfet-insa.fr/',
        nomTarif1 : 'Tarif plein', //tous les tarifs (3 maximum pour l'instant)
        tarif1 : 0,
        nomTarif2 : "Tarif réduit étudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e",
        tarif2 : 0,
        nomTarif3 : 'Abonnement Espace Tonkin',
        tarif3 : 0,
        billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz',
        //adresse de la billetterie de ce concert
        duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
        gratuit : true, 
        reservable : true,
        disponibiliteTarifs : false,
    },
{
        nb : 2, //numéro de repérage pour affichage
        id: 'cimes', //adresse url pour affichage
        name: "La Litanie Des Cimes", //nom affiché
        quote : <p id="quoteConcert">"Les prières de La Litanie des Cimes sont païennes. Fouillis intime contre clarté commune, vivacité du trait contre délicatesse mélodique, sacré boisé contre contemplation acharnée."</p>,
        //premier texte
        desc : <p id="descrConcert"> Créé en 2019, par le violoniste Clément Janinet avec Élodie Pasquier aux clarinettes et Bruno Ducret au violoncelle, La Litanie des Cimes joue avec les grands mouvements, les tempos lents d’apparence, et des contemplations harmoniques. Au sein de ce trio, l’improvisation est libre et introspective sans être recluse. Les harmonies échangées sont sans cesse rebattues par la répétition des motifs. On y entendrait presque des dialogues agités. L’énergie y est ardente. Fouillis intime contre clarté commune, vivacité du trait contre délicatesse mélodique. Cette musique, très ouverte, pourrait sonner comme la bande son d’un film sur la fin d’un monde, entendue depuis le sommet des grands arbres </p>,
        desc2 : '',
        //deuxième texte
        img1 : Cimes, //image header
        img2 : Cimes2, //image milieu de texte
        imgMenu : Cimes,
        day : '14', 
        month : 'oct.',
        year : '2022',
        hour : '19h00 - 21h00', //la date précise du concert
        place : "Maison du livre, de l'image et du son",//l'endroit du concert
        placeIndications : 'https://mediatheques.villeurbanne.fr/2016/05/maison-du-livre-de-limage-et-du-son/',
        nomTarif1 : 'Tarif plein', //tous les tarifs (3 maximum pour l'instant)
        tarif1 : 0,
        nomTarif2 : "Tarif réduit étudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e",
        tarif2 : 0,
        nomTarif3 : 'Abonnement Espace Tonkin',
        tarif3 : 0,
        billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz',
        //adresse de la billetterie de ce concert
        duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
        gratuit : true,
        reservable : false,
        disponibiliteTarifs : false,
    },

    {nb:4,
        id: 'CSW', 
    quote : <p id="quoteConcert">"C’est avec un grand bonheur que le trio Charlier / Sourisse / Winsberg a fait revivre la musique du monstre sacré du saxophone, Michael Brecker, à travers leur hommage « Tales from Michael», unanimement salué par le monde du Jazz.<br/><br/>En première partie, Jet Whistle réunit cinq amis musiciens proposant chacun leurs propres influences musicales allant du free jazz au hip hop, en passant par Pierre Boulez."</p>,
    desc2 : <p id="descrConcert">Aujourd’hui, le trio au son chaleureux revient sur scène avec des compositions originales et un nouveau double album : « Le Monde à l’envers ». Entre dialogues harmoniques et joutes rythmiques, André, Benoît et Louis jouent le jeu approprié à chacune des petites histoires qu’ils savent si bien nous raconter.</p>,
    desc : <p id="descrConcert">Le quintet Jet Whistle est à la recherche d'effets sonores et d'atmosphères électroniques. Beaucoup de place est laissée à l'improvisation et chaque musicien possède une grande liberté de jeu. De plus 'Jet Whistle' est un terme de musique contemporaine concernant la flûte traversière qui peut s'apparenter à un amas de souffle très fort. 
    <br/><br/>
    
    Le mélange des timbres flûte traversière et trombone ainsi que les multiples pédales d'effets de chacun ajoutent une couleur particulière à l'ensemble et dessine son empreinte sonore. 
    <br/><br/>
    
    Le répertoire tourne autour des compositions de Fanny Martin, la flûtiste à l'origine de ce projet.</p>,
    img1 : CSW,
    img2 : Jet,
    imgMenu : CSW2, // image carrée du menu
    day : '18',
    month : 'oct.',
    year : '2022',
    hour : '20h20',
    place : 'Theatre Astree',
    placeIndications : 'https://theatre-astree.univ-lyon1.fr/acces-2/',
    nomTarif1 : 'Tarif VA',
    tarif1 : 8,
    nomTarif2 : "Etudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e",
    tarif2 : 9.50,
    nomTarif3 : 'Plein tarif (gratuit pour les - de 12 ans)',
    tarif3 : 13.50,
    billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/xkck',
    duo:true,
    gratuit : false,
    name: 'Charlier-Sourisse-Winsberg',
    nom2: 'Charlier-Sourisse-Winsberg',
    nom1: 'Jet Whistle',
    disponibiliteTarifs : true,
    },

    {
        nb :3, //numéro de repérage pour affichage
        id: 'Emile', //adresse url pour affichage
        name: "Emile Londonien", //nom affiché
        quote : <p id="quoteConcert">"Issu de la scène strasbourgeoise et du collectif Omezis qui regroupe une vingtaine d’artistes, musiciens, Dj’s, vidéastes, Emile Londonien s’imprègne de la scène jazz anglaise de ces quinze dernières années pour en proposer une version personnelle !"</p>,
        //premier texte
        desc : <p id="descrConcert">Formés au Conservatoire de Strasbourg, les trois musiciens se rencontrent lors des soirées thématiques organisées par le collectif Omezis, co-fondé par le batteur Matthieu Drago. S’ensuit en 2020 une session studio rendant hommage à la scène anglaise. Le nom d’Emile Londonien, double clin d’œil à leurs influences UK et à un fameux saxophoniste français, jaillit spontanément. 
        <br/><br/>
        Le Covid 19 met le projet en sommeil jusqu’à ce que les bandes tombent entre les mains du label strasbourgeois historique de broken beat, Dope tone. Les choses vont alors s’accélérer. Les titres issus de cette première session sont relayés immédiatement par des dj’s influents comme Lefto. Le groupe, emblématique de cette génération qui a grandi dans la culture clubbing et tente de l’accorder avec la tradition du trio jazz, est lancé. 
        <br/><br/>
        
        Influencé par Yussef Kamaal, The Comet Is Coming, Atjazz, SunRa, mais aussi Ornette Coleman ou Thelonious Monket par les scènes, Broken Beat, Jazz, House, Hip Hop, Emile Londonien incarne ainsi à merveille cette « next gen » du jazz français aux cotés de Léon Phal, dont ils sont proches. Débarrassée des étiquettes, elle mixe sans complexe la tradition et les musiques actuelles avec le dancefloor pour mètre étalon. 
        <br/><br/>
        
        Un premier album, à paraitre début 2023, est en cours d’enregistrement avec des invités comme Emile Parisien, Thomas de Pourquery ou Léon Phal.</p>,
        desc2 : '',
        //deuxième texte
        img1 : Emile2, //image header
        img2 : Emile, //image milieu de texte
        imgMenu : Emile2,
        day : '15', 
        month : 'oct.',
        year : '2022',
        hour : '', //la date précise du concert
        place : 'Toï Toï', //l'endroit du concert
        placeIndications : 'https://toitoilezinc.fr/infos-pratiques/',
        nomTarif1 : 'Tarif mini', //tous les tarifs (3 maximum pour l'instant)
        tarif1 : 8.50,
        nomTarif2 : 'Tarif réduit étudiants',
        tarif2 : 7,
        nomTarif3 : 'Tarif solidaire',
        tarif3 : "10€ - 15",
        billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/emile-londonien',
        //adresse de la billetterie de ce concert
        duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
        disponibiliteTarifs : true,
        gratuit : false,
    },

    
    

    // {
    //     nb : 4, //numéro de repérage pour affichage
    //     id: 'Jet', //adresse url pour affichage
    //     name: "Jet Whistle", //nom affiché
    //     quote : '"Jet Whistle réunit cinq amis musiciens proposant chacun leurs propres influences musicales allant du free jazz au hip hop, en passant par Pierre Boulez."',
    //     //premier texte
    //     desc : "Ce quintet est à la recherche d'effets sonores et d'atmosphères électroniques. Beaucoup de place est laissée à l'improvisation et chaque musicien possède une grande liberté de jeu. De plus 'Jet Whistle' est un terme de musique contemporaine concernant la flûte traversière qui peut s'apparenter à un amas de souffle très fort. Le mélange des timbres flûte traversière et trombone ainsi que les multiples pédales d'effets de chacun ajoutent une couleur particulière à l'ensemble et dessine son empreinte sonore. Le répertoire tourne autour des compositions de Fanny Martin, la flûtiste à l'origine de ce projet.",
    //     //deuxième texte
    //     img1 : Jet, //image header
    //     img2 : Jet2, //image milieu de texte
    //     day : '?', 
    //     month : '?',
    //     year : '?',
    //     hour : '? - ?', //la date précise du concert
    //     place : '?', //l'endroit du concert
    //     nomTarif1 : 'Tarif plein', //tous les tarifs (3 maximum pour l'instant)
    //     tarif1 : 0,
    //     nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    //     tarif2 : 0,
    //     nomTarif3 : 'Abonnement Espace Tonkin',
    //     tarif3 : 0,
    //     billeterie : 'https://www.helloasso.com/associations/centre-leo-lagrange-villeurbanne',
    //     //adresse de la billetterie de ce concert
    //     duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
    // },

    {
        nb : 5, //numéro de repérage pour affichage
        id: 'Phal', //adresse url pour affichage
        name: "Leon Phal Quintet", //nom affiché
        quote : <p id="quoteConcert">"Saxophoniste prometteur, Léon Phal fait partie de cette jeune génération de musiciens de jazz biberonnée aux classiques, dont il s’affranchit tout en leur rendant hommage à chaque note avec brio, qu’il s’agisse du RH Factor de Roy Hargrove ou du « Voodoo » de D’Angelo."</p>,
        //premier texte
        desc : <p id="descrConcert">Entouré de ses complices de toujours, sa maîtrise de l’instrument, son sens inouï de la mélodie et la délicatesse de ses compositions amplifiées par un groove dévastateur, présagent un bel avenir à ce franco-suisse originaire de Aÿ en Champagne. Une fraîcheur et un talent qui n’ont pas échappé aux festivals Nancy Jazz Pulsations et Jazz à Vienne, dont il est coup sur coup le lauréat des tremplins 2019. 
        <br/><br/>
        Sacré « Révélation » par les magazines Jazz News et Jazz Magazine pour la sortie de son premier album « Canto Bello », Léon Phal est à la tête d’un génial quintet dont les influences et l’imagination inspirent des improvisations remarquables. S’il flirte déjà dans la cour des grands du jazz contemporain, nul doute que son souffle, sa curiosité et son esprit libre le mèneront loin.</p>,
        desc2 : '',
        //deuxième texte
        img1 : Phal, //image header
        img2 : Phal2, //image milieu de texte
        imgMenu : Phal, //image carrée du menu
        day : '19', 
        month : 'oct.',
        year : '2022',
        hour : '21h00', //la date précise du concert
        place : 'Périscope', //l'endroit du concert
        placeIndications : 'https://www.periscope-lyon.com/accessibilite/',
        nomTarif1 : 'Tarif plein', //tous les tarifs (3 maximum pour l'instant)
        tarif1 : 14,
        nomTarif2 : "Etudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e",
        tarif2 : 10,
        nomTarif3 : 'Tarif carte VA',
        tarif3 : 8,
        billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/concert-leon-phal',
        //adresse de la billetterie de ce concert
        duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
        disponibiliteTarifs : true,
        gratuit : false,
    },

    {nb:6,
        id: 'oscar', 
    quote : <p id="quoteConcert">"Né à Norwich, Oscar a étudié au Trinity Laban de Londres avant de s'imposer comme l'un des musiciens de jazz les plus appréciés de la capitale.
    <br/><br/>
    En première partie, le Gin Tonic Orchestra, c’est avant tout une bande de copains qui se retrouve autour de la musique et réunit tous les amoureux du son. Pour 2022, le collectif de musiciens et DJs vous a préparé un live sous un tout nouveau format !"</p>,
     desc2 : <p id="descrConcert">Oscar Jerome, suivant les traces de son père en tant que guitariste, a rapidement appris les bases et est devenu accro, citant George Benson, Wes Montgomery et John Coltrane comme ses principales influences. Explorant diverses avenues sonores, il s'est fait un nom sur la scène avec sa propre fusion rafraîchissante de jazz, de hip-hop, de soul et de funk, ce qui lui a valu une session live avec COLORS avant d'être nommé Guardians One To Watch en 2020. Reconnu à l'échelle mondiale pour sa guitare virtuose, il a composé le single « Abusey Junction » de Kokoroko et a participé à son enregistrement, en plus de travailler aux côtés de ses compagnons de Jazz ShabakaHutchings, Moses Boyd, Yussef Dayes et Lianne La Havas.Son premier album, « Breathe Deep », l'a emmené très loin. Il a donné des concerts en Australie et aux États-Unis, et a fait la première partie de la tournée de Kamasi Washington au Royaume-Uni, renforçant ainsi sa réputation d'artiste expérimenté. 
<br/><br/>
     Posant les bases de son héritage musical, son nouveau travail le voit s'ouvrir et explorer de nouvelles facettes de lui-même. « Sweet Isolation » est le début d'une série spéciale de musique d'Oscar Jerome.</p>,
    desc : <p id="descrConcert">En première partie, le Git Tonic Orchestra. Après un premier EP sorti en 2019 sur le label Mother Tongue et de nombreux concerts en Europe, le groupe made in Sainté n’a eu de cesse de se réinventer. Oscillant entre future jazz, rock indie et broken beat, l’alchimie trouvée par la formation se révèle assez imparable. Elle a d’ailleurs collaboré avec l’une des légendes de la scène UK, Kaidi Tatham. En live ou en studio, le Gin Tonic Orchestra se renouvelle, innove et expérimente : il replace au centre des clubs l’acoustique et le live. 
    </p>,
    img1 : Oscar,
    img2 : GTO,
    imgMenu : Oscar, //image carrée du menu

    day : '20',
    month : 'oct.',
    year : '2022',
    hour : '21h00',
        placeIndications : 'https://www.periscope-lyon.com/accessibilite/',
        place : 'Périscope',
    nomTarif1 : 'Tarif VA',
    tarif1 : 10,
    nomTarif2 : "Etudiant.e - PMR/PSH - Demandeur.se d'emploi - Retraité.e",
    tarif2 : 13,
    nomTarif3 : 'Plein tarif',
    tarif3 : 18,
    billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/concert-oscar-jerome-gin-tonic-orchestra',
    duo:true,
    name: 'Oscar Jerome',
    nom2: 'Oscar Jerome',
    nom1: 'Gin Tonic',
    disponibiliteTarifs : true,
    gratuit : false
},

    // {
    //     nb : 3, //numéro de repérage pour affichage
    //     id: 'GTO', //adresse url pour affichage
    //     name: "Gin Tonic Orchestra", //nom affiché
    //     quote : '"Au-delà du simple groupe de musique, le Gin Tonic Orchestra se définit aussi comme une idée, un concept, une pensée… Le GTO aspire simplement à faire danser et donner de l’amour à tous ceux qui ont la curiosité de goûter à cette mystérieuse mixture."',
    //     //premier texte
    //     desc : "Gin Tonic Orchestra est un groupe de Saint-Etienne fondé par le producteur et musicien Victor Dijoud (Kaffe Crème) ainsi que le percussionniste Leo Puccio, auxquels s’ajoutent de multiples personnalités dans le studio et sur la scène. Oscillant entre future jazz, latin vibes et broken beat l’alchimie trouvée par la formation se révèle assez imparable, elle a d’ailleurs collaboré avec l’une des légendes de la scène UK, Kaidi Tatham, sur son 1er EP sorti sur Mother Tongue.",
    //     //deuxième texte
    //     img1 : GTO, //image header
    //     img2 : GTO2, //image milieu de texte
    //     day : '?', 
    //     month : '?',
    //     year : '?',
    //     hour : '? - ?', //la date précise du concert
    //     place : '?', //l'endroit du concert
    //     nomTarif1 : 'Tarif plein', //tous les tarifs (3 maximum pour l'instant)
    //     tarif1 : 0,
    //     nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    //     tarif2 : 0,
    //     nomTarif3 : 'Abonnement Espace Tonkin',
    //     tarif3 : 0,
    //     billeterie : 'https://www.helloasso.com/associations/centre-leo-lagrange-villeurbanne',
    //     //adresse de la billetterie de ce concert
    //     duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
    // },

    // {
    //     nb : 5, //numéro de repérage pour affichage
    //     id: 'Oscar', //adresse url pour affichage
    //     name: "Oscar Jerome", //nom affiché
    //     quote : '"Oscar Jerome a perfectionné ses talents de musicien et d’écriture depuis son plus jeune âge. Il a grandi en tant que guitariste, mais aussi chanteur et compositeur de nombreuses formations de la scène musicale florissante du sud de Londres."',
    //     //premier texte
    //     desc : "Oscar Jerome puise son inspiration dans la politique, la spiritualité musicale ou ses propres expériences pour ses textes. Sa vision créative est de toujours créer une musique sincère tout en rendant hommage à ses innombrables inspirations. Avec une performance live acclamée qui l’a conduit sur de nombreux shows comme le prestigieux Blue Note Jazz et Le Poisson Rouge à New York, Oscar Jerome poursuit son ascension.",
    //     //deuxième texte
    //     img1 : Oscar, //image header
    //     img2 : Oscar2, //image milieu de texte
    //     day : '?', 
    //     month : '?',
    //     year : '?',
    //     hour : '? - ?', //la date précise du concert
    //     place : '?', //l'endroit du concert
    //     nomTarif1 : 'Tarif plein', //tous les tarifs (3 maximum pour l'instant)
    //     tarif1 : 0,
    //     nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    //     tarif2 : 0,
    //     nomTarif3 : 'Abonnement Espace Tonkin',
    //     tarif3 : 0,
    //     billeterie : 'https://www.helloasso.com/associations/centre-leo-lagrange-villeurbanne',
    //     //adresse de la billetterie de ce concert
    //     duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
    // }

]

const dataAnc=[
    {nb : 11,
        id: 'potter', 
        name: "Chris Potter",
       img1 : chris,
    
    year: '2003',
    edition : '10',
    duo : false,    
    },
    
    {nb : 10,
        id: 'tigran', 
        name: "Tigran Hamasyan",
    img1 : tigran,
    year: '2009',
    edition : '16',
    duo : false,    
    },
    {nb : 9,
        id: 'glasper', 
        name: "Robert Glasper",
    img1 : glasper,
    year: '2014',
    edition : '21',
    duo : false,    
    },
    {nb : 8,
        id: 'henry', 
        name: "Cory Henry",
    img1 : henry,
    year: '2015',
    edition : '22',
    duo : false,    
    },
    {nb : 7,
        id: 'foehn', 
        name: "Foehn Trio",
    img1 : foehn,
    year: '2016',
    edition : '23',
    duo : false,    
    },
    {nb : 6,
        id: 'glyk', 
        name: "Kinga Glyk",
    img1 : glyk,
    year: '2018',
    edition : '25',
    duo : false,    
    },
    {nb : 5,
        id: 'anomalie', 
        name: "Anomalie",
    img1 : anomalie,
    year: '2018',
    edition : '25',
    duo : false,    
    },
    {nb : 4,
        id: 'dooz', 
        name: "Dooz Kawa",
    img1 : dooz,
    year: '2018',
    edition : '25',
    duo : false,    
    },
    {nb : 3,
        id: 'garcia', 
        name: "Nubya Garcia",
    img1 : garcia,
    year: '2019',
    edition : '26',
    duo : false,    
    },
    {nb : 2,
        id: 'yellowstraps', 
        name: "Yellowstraps",
    img1 : yellowstraps,
    year: '2019',
    edition : '26',
    duo : false,    
    },
    {nb : 1,
        id: 'bertaut', 
        name: "Camille Bertaut",
    img1 : bertaut,
    year: '2021',
    edition : '28',
    duo : false,    
    },
    
]

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



export {donneesPageArtistesActuelsSize, donneesPageArtistesActuelsNb, donneesPageArtistesActuels, partenaireNb, partenairesSize, partenaire, donnees, donneesNb, donneesAnciennes, donneesAnciennesNb, donneesSize, donneesAnciennesSize};


import chris from '../media/chris-potter.png';
import bojan from '../media/bojan-z.png';
import blast from '../media/blast.jpg';
import ishkero from '../media/ishkero.jpeg';


import "./HomeFullContent.css"


function HomeFullContent() {
return (
    <div>
        <p id="prog">Programmation 2022</p>
        <div id="gridProg">
            <div class="deuxParties">

                <a href="/artistes">
                    <div class="img">
                        <img src={chris} alt="chris potter"/>
                        <div class="vl"/>
                        <img src={bojan} alt="bojan-z"/>
                        <p class="date"><span>20</span><br/>SEP.</p>

                        <p class="name"><span>Partie 1 - </span>Chris Potter</p>
                        <p class="name"><span>Partie 2 - </span>Bojan Z</p>
                    </div>
                    
                </a>
            </div>

            <div class="unePartie">

                <a href="/artistes">
                    <div class="img">
                        <img src={blast} alt="blast"/>
                        <p class="date"><span>30</span><br/>SEP.</p>

                        <p class="name">Blast</p>
                    </div>
                    
                </a>
            </div>

            <div class="unePartie">

                <a href="/artistes">
                    <div class="img">
                        <img src={ishkero} alt="ishkero"/>
                        <p class="date"><span>5</span><br/>OCT.</p>

                        <p class="name">Ishkero</p>
                    </div>
                    
                </a>
            </div>

            

            <div class="unePartie">

                <a href="/artistes">
                    <div class="img">
                        <img src={blast} alt="blast"/>
                        <p class="date"><span>10</span><br/>OCT.</p>

                        <p class="name">Blast</p>
                    </div>
                    
                </a>
            </div>

            <div class="deuxParties">

                <a href="/artistes">
                    <div class="img">
                        <img src={chris} alt="chris potter"/>
                        <div class="vl"/>
                        <img src={bojan} alt="bojan-z"/>
                        <p class="date"><span>11</span><br/>OCT.</p>

                        <p class="name"><span>Partie 1 - </span>Chris Potter</p>
                        <p class="name"><span>Partie 2 - </span>Bojan Z</p>
                    </div>
                    
                </a>
            </div>

            <div class="unePartie">

                <a href="/artistes">
                    <div class="img">
                        <img src={ishkero} alt="ishkero"/>
                        <p class="date"><span>20</span><br/>OCT.</p>

                        <p class="name">Ishkero</p>
                    </div>
                    
                </a>
            </div>


            
        </div>
    </div>
    );
}

export default HomeFullContent;
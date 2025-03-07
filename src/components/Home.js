import './Home.css';
import HomeContent from "./HomeContent.js"
import HomeFullContent from "./HomeFullContent.js"
import HomePostContent from "./HomePostContent.js"
import HeaderHome from "./HeaderHome.js"
import {donneesSize} from "../data/data.js"

function Home() {
  if(donneesSize()>0){
    // à décommenter pour édition ON
    // return (
    //   <div id="home">
    //       <div id="headerWrap">
    //           <HeaderHome/>
    //       </div>
    //       <div id="artistesWrapper">

    //               <HomeFullContent/>
    //       </div>
    //   </div>
    // );

    // à décommenter pour édition OFF
    return (
      <div id="home">
         <div id="headerWrap">
             <HeaderHome/>
         </div>
         <div id="artistesWrapper">

                <HomePostContent/>
         </div>
     </div>
   );
  }
  
  else{
    return (
      <div id="home">
          <div id="headerWrap">
              <HeaderHome/>
          </div>
          <div id="artistesWrapper">

                  <HomeContent/>
          </div>
      </div>
    );
  }
  
  /*
    return (
       <div id="home">
          <div id="headerWrap">
              <HeaderHome/>
          </div>
          <div id="artistesWrapper">

                 <HomePostContent/>
          </div>
      </div>
    );
  }
  */
}

export default Home;
// à check après le festival : rajout de la même ligne avec HomePostContent ?

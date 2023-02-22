import './Home.css';
import HomeContent from "./HomeContent.js"
import HomeFullContent from "./HomeFullContent.js"
import HomePostContent from "./HomePostContent.js"
import HeaderHome from "./HeaderHome.js"
import {donneesSize} from "../data/data.js"

function Home() {
  /*if(donneesSize()>0){
    return (
      <div id="home">
          <div id="headerWrap">
              <HeaderHome/>
          </div>
          <div id="artistesWrapper">

                  <HomeFullContent/>
          </div>
      </div>
    );
  }else{
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
  }*/

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

export default Home;

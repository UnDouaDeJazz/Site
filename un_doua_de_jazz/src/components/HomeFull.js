import './HomeFull.css';
import HomeFullContent from "./HomeFullContent.js"
import HeaderHome from "./HeaderHome.js"


function HomeFull() {
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
}

export default HomeFull;
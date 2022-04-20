import './Home.css';
import HomeContent from "./HomeContent.js"
import HeaderHome from "./HeaderHome.js"


function Home() {
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

export default Home;

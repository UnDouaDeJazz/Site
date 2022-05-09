import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
/*import {
  Home,
  Footer
} from "./components";*/
import Home from "./components/Home.js"
import Footer from "./components/Footer.js"
import About from "./components/About.js"
import Artistes from "./components/Artistes.js"
import Benevole from "./components/Benevole.js"
import Contact from "./components/Contact.js"
import HomeFull from "./components/HomeFull.js"
import Concert from "./components/Concert.js"
import Mentions from "./components/Mentions.js"
import Partenaires from "./components/Partenaires.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div class="general">
    <Routes>
      
      <Route exact path="/" element={<Home />} class="general"/>
      <Route path="/about" element={<About />} class="general"/>
      <Route path="/artistes" element={<Artistes />} class="general"/>
      <Route path="/benevole" element={<Benevole />} class="general"/>
      <Route path="/contact" element={<Contact />} class="general"/>
      <Route path="/home-full" element={<HomeFull />} class="general"/>
      <Route path="/mentions" element={<Mentions />} class="general"/>
      <Route path="/partenaires" element={<Partenaires />} class="general"/>
      
      <Route path ="/concert/:concertName" element={<Concert />} class="general"/>
      
      {/*<Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
</Route>*/}

    </Routes>
    </div>
    <div class="general">
      <Footer class="general"/>
    </div>
  </Router>,

  document.getElementById("root")
);

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <Home/>
    </div>
  </React.StrictMode>
);*/


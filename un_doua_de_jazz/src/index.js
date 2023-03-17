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
import Concert from "./components/Concert.js"
import Mentions from "./components/Mentions.js"
import Photos from "./components/Photos.js"
import Partenaires from "./components/Partenaires.js"
import Tremplin from "./components/Tremplin.js"
import Helmet from 'react-helmet'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div class="general">
    <Helmet>
            <meta id="meta-description" name="description" content="Un Doua De Jazz. Courant octobre se déroulant dans Villeurbanne, pendant deux semaines, des concerts qui mettent en scène aussi bien de jeunes artistes issus de la scène régionale que des musiciens de renommée internationale. Un Doua De Jazz." />
    </Helmet>
    <Routes>
      
      <Route exact path="/" element={<Home />} class="general"/>
      <Route path="/about" element={<About />} class="general"/>
      <Route path="/artistes" element={<Artistes />} class="general"/>
      <Route path="/benevole" element={<Benevole />} class="general"/>
      <Route path="/contact" element={<Contact />} class="general"/>
      <Route path="/mentions" element={<Mentions />} class="general"/>
      <Route path="/photos" element={<Photos />} class="general"/>
      <Route path="/tremplin" element={<Tremplin />} class="general"/>
      
      <Route path ="/:endroit/concert/:concertName" element={<Concert />} class="general"/>

      <Route path="/partenaires" element={<Partenaires />} class="general"/>
      
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


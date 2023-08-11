import "./Playlists.css";
import Header from "./Header.js";
import spotify from "../media/spotify.png";
import deezer from "../media/deezer.png";
import { HashLink } from "react-router-hash-link";
import { partenaireNb, partenairesSize } from "../data/data.js";

function Playlists() {
  return (
    <div id="playlists">
      <div id="headerPlaylists">
        <div id="imgHeaderPlaylists"></div>
        <Header />
      </div>

      <div id="contentPlaylists">
        <p id="playlistsTitle">Nos Playlists</p>
        <div class="table">
          <div class="cell">
            <hr />
            <p id="playlistsSubtitle">♫ UK Jazz</p>
            <div id="playlistsPage">
              <a href="https://open.spotify.com/playlist/7dWvF4AlzVnpVm4k40TktT?si=21ac4173102c4654">
                <img src={spotify} class="logo"></img>
              </a>
              <a href="https://deezer.page.link/zdPhZhRJ8gNbKM5bA">
                <img src={deezer} class="logo"></img>
              </a>
            </div>
          </div>
          <div class="cell">
            <hr />
            <p id="playlistsSubtitle">♫ Coups de coeur 2022</p>
            <div id="playlistsPage">
              <a href="https://open.spotify.com/playlist/12jWMVu3iDTTU28AJhfWET?si=98e412eb56d94211">
                <img src={spotify} class="logo"></img>
              </a>
              <a href="https://deezer.page.link/uBNTbfLfZHUDm9jp8">
                <img src={deezer} class="logo"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playlists;

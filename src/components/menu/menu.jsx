import "./styles.css";
import Icone from "../../assets/images/logo.png";

export function Menu() {
  return (
    <div className="menu">
      <div className="logo">
        <img src={Icone} />
      </div>
      <div className="nav">
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/stories">Stories</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/artists">Artists</a></li>
          <li><a href="/events">Events</a></li>
        </ul>       
      </div>
    </div>
  )
}

export default Menu
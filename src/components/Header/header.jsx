import "./styles.css";
import Icone from "../../assets/images/logo.png";

export function Header() {
  return (
    <div className="menu">
      <div className="logo">
        <img src={Icone} />
      </div>
      <div className="nav">
        <a href="/">About</a>
        <a href="/stories">Stories</a>
        <a href="/gallery">Gallery</a>
        <a href="/artists">Artists</a>
        <a href="/events">Events</a>
      </div>
    </div>
  )
}

export default Header
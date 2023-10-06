import "./about-styles.css";
import Menu from "../components/menu/menu";
import Ret2 from "../assets/images/Rectangle 2.png";
import Ret3 from "../assets/images/Rectangle 3.png";
import Ret4 from "../assets/images/Rectangle 4.png";
import Ret5 from "../assets/images/Rectangle 5.png";

export function About() {
  return (
    <div>
      <Menu />
      <div className="container">
        <h1>
          Collectable magazine
          <br /> on modern art
          <br /> and lifestyle
        </h1>
      </div>

      <div className="imagens-topo">
        <div className="ret2">
          <img src={Ret2} />
          <p className="p1">mishka bochkarev</p>
          <p className="p2">boy blowing bubbles, oil paint,1867</p>
        </div>
        <div className="ret4">
          <img src={Ret4} />
          <p className="p1">taras sereda</p>
          <p className="p2">mother of god, watercolor, gouache on paper,2018</p>
        </div>
        <div className="ret3">
          <img src={Ret3} />
          <p className="p1">maria pavliuk</p>
          <p className="p2">paris, 2019</p>
        </div>
      </div>

      <div className="container art-issue">
        <div className="art-left">
          <p>
            Art Issue – is a biannual collectable magazine on modern art and
            lifestyle, celebrating the pure pleasure of reading and the calming
            opulence of being offline. Creating Art Issue and basing in two
            cities - Kyiv, Ukraine and Paris, France - unveils a collaborative
            side of 2 different cultures: Eastern and Western.
          </p>
          <p>
            We aim to discover the farthest reaches of CIS with their unique
            culture, art representatives and talk about them in Europe, to be
            experts in this direction.
          </p>
          <p>
            We feel that the start of any creative process takes routes from art
            and expresses oneself as an artist of his own kind.
          </p>
        </div>
        <div className="art-right">
          <p>
            Our aim is to explore the views and ideas of certain individuals
            that we love: artists, art collectors, food critics, biodynamic wine
            makers and all the best creative minds that are inspired by art.
          </p>

          <p>
            Through special projects and conversations Art Issue will reveal
            these people’s specific fields of expertise alongside with broader
            inspirations and ideas.
          </p>

          <p>
            Each issue’s series of special projects developed by artists will
            create a unique inspirational value to the art collection for our
            like-minded readers and, hopefully, it will help them to start their
            own creative process and express themselves.
          </p>
        </div>
      </div>
      <div className="container ret5">
        <img src={Ret5} />
        <p className="p1">tamara turlyun</p>
        <p className="p2">2019 series, papier mache, gouache, 2019</p>    
      </div>
    </div>
  );
}

export default About;

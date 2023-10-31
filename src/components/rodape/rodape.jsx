import "./styles.css";

export function Rodape() {
  return (
    <div className="rodape">
      <div className="contato">
        <div className="copy">
          <p>art issue magazine © 2020 kyiv + paris</p>
        </div>
        <div className="redes">
          <h3>Instagram</h3>
          <h3>Facebook</h3>
        </div>
        <div className="email">
          <h3><a href="mailto:hello@artissuemagazine.com">hello@artissuemagazine.com</a></h3>
        </div>
      </div>

      <div className="artistas">
        <div className="artistas-item">
          <p>ceo, co-founder</p>
          <h3>Marina Priyomova</h3>

          <p>editor-in-chief, co-founder</p>
          <h3>Olga Sushko</h3>

          <p>creative producer</p>
          <h3>Nastia Dolzhenytsia</h3>

          <p>social media art director</p>
          <h3>Sophia Voznyak</h3>
        </div>
      </div>
    </div>
  );
}

export default Rodape;

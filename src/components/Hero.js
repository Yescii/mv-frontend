import "../style/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-desc ">
        <h3 className="h3-d ">Mountain View</h3>
        {/* <h3 class="h3-u left">/h3> */}
        <div id="underline"></div>
        <h4 className="h4-m ">
          Share your adventures to all explores around the world.
        </h4>
        <div className="align-link left">
          <h4>
            <Link to="/show">SHARE</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Hero;

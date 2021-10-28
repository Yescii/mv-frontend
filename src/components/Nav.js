import "../style/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    textTransform: "uppercase",
    padding: "8px",
    width: "90%",
    margin: "auto",
    textDecoration: "none",
  };

  return (
    <div className="Nav">
      <nav style={navStyle}>
        <h4>
          <Link to="/">Hero</Link>
        </h4>
        <h4>
          <Link to="/mv">
            <div>MV</div>
          </Link>
        </h4>
        <h4>
          <Link to="/create">
            <div>Create</div>
          </Link>
        </h4>
      </nav>
    </div>
  );
}

export default Nav;

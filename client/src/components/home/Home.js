import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link
        to="/dresses"
        style={{ textDecoration: "none" }}
        className="btn"
        style={{ textDecoration: "none", paddingTop: "1%" }}
      >
        Show Me
      </Link>
      <div className="login"></div>
    </div>
  );
}
export default Home;

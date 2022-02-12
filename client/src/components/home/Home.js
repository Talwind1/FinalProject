import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home" style={{ margin: "auto" }}>
      <Link
        to="/dresses"
        className="btn"
        style={{ textDecoration: "none", paddingTop: "1%" }}
      >
        Show Me
      </Link>
    </div>
  );
}
export default Home;

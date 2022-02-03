import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/dresses" style={{ textDecoration: "none" }}>
        <div className="title">
          <h1>One Night Dress</h1>
        </div>
      </Link>
      <div className="login"></div>
    </div>
  );
}
export default Home;

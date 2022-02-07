import { Link } from "react-router-dom";
import { BiHeartCircle } from "react-icons/bi";

const DressComponent = ({ dress, wishlistAction }) => {
  return (
    <div
      className="dress"
      style={{
        position: "relative",
      }}
    >
      <div
        className="like"
        onClick={(e) => {
          wishlistAction(dress);
        }}
      >
        <BiHeartCircle style={{ backgroundColor: "transperant" }} />
      </div>
      <img src={dress.url} alt="dress pic" className="dress-pic" />
      <Link
        to={{ pathname: `/dress/${dress._id}` }}
        style={{ textDecoration: "none" }}
        key={dress._id}
      >
        <p className="dress_description">
          Size {dress.size}, {dress.price}&#8362; {dress.location}
        </p>
      </Link>
    </div>
  );
};

export default DressComponent;

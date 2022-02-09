import { Link } from "react-router-dom";
import { BiHeartCircle } from "react-icons/bi";

import { BsHeartFill } from "react-icons/bs";

const DressComponent = ({ dress, wishlistAction, isWishlist }) => {
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
        {isWishlist ? (
          <BsHeartFill />
        ) : (
          <BiHeartCircle style={{ backgroundColor: "transperant" }} />
        )}
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

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
        <div className="dress_description">
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>
            {dress.price}&#8362;{" "}
          </p>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "17px",
            }}
          >
            <p>
              {dress.location}, Size: {dress.size.toUpperCase()}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DressComponent;

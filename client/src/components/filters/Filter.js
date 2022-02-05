import { Link } from "react-router-dom";

import { BiHeartCircle } from "react-icons/bi";

function Filter({ dresses, conditions, addToWishlist }) {
  const filterData = (arr) => {
    let filtered = [...arr];
    if (conditions.location) {
      filtered = filtered.filter((dress) => {
        console.log(dress.url);
        return (
          conditions.location.toLowerCase() === dress.location.toLowerCase()
        );
      });
    }
    if (conditions.color) {
      filtered = filtered.filter(
        (dress) => conditions.color.toLowerCase() === dress.color.toLowerCase()
      );
    }
    if (conditions.size) {
      filtered = filtered.filter(
        (dress) => conditions.size.toLowerCase() === dress.size.toLowerCase()
      );
    }

    return filtered;
  };

  const mapData = () => {
    return filterData(dresses).map((dress) => {
      return (
        <div
          key={dress._id}
          className="dress"
          style={{
            position: "relative",
          }}
        >
          <div
            className="like"
            onClick={(e) => {
              addToWishlist(dress);
            }}
          >
            <BiHeartCircle style={{ backgroundColor: "transperant" }} />
          </div>
          <img
            src={dress.url.toString()}
            alt="dress pic"
            className="dress-pic"
          />
          <Link
            to={{ pathname: `/dress/${dress.id}` }}
            style={{ textDecoration: "none" }}
            key={dress.id}
          >
            <p className="dress_description">
              Size {dress.size.toLowerCase()}, {dress.price}&#8362;{" "}
              {dress.location}
            </p>
          </Link>
        </div>
      );
    });
  };

  return <div className="dresses">{mapData()}</div>;
}

export default Filter;

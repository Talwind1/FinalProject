import { Link } from "react-router-dom";
import { BiHeartCircle } from "react-icons/bi";
import dressesApi from "../../api/api";

function Filter({ dresses, conditions, userId }) {
  const filterData = (arr) => {
    let filtered = [...arr];
    if (conditions.location) {
      filtered = filtered.filter((dress) => {
        // console.log(dress.url);
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
  const addToWishlist = async (dress) => {
    await dressesApi.put(`/users/wishadd/${userId}`, dress);
  };
  const mapData = () => {
    return filterData(dresses).map((dress) => {
      // console.log(dress);
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
    });
  };

  return <div className="dresses">{mapData()}</div>;
}

export default Filter;

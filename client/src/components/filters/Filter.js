import dressesApi from "../../api/api";
import DressComponent from "../DressComponent";

function Filter({ dresses, conditions, userId }) {
  const filterData = (arr) => {
    let filtered = [...arr];
    if (conditions.location) {
      filtered = filtered.filter((dress) => {
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
      return (
        <DressComponent
          isWishlist={false}
          dress={dress}
          wishlistAction={addToWishlist}
          key={dress._id}
        />
      );
    });
  };

  return <div className="dresses">{mapData()}</div>;
}

export default Filter;

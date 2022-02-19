import { React, useEffect, useState } from "react";
import dressesApi from "../../api/api";
import DressComponent from "../DressComponent";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWishList = async (userID) => {
    setLoading(true);
    const { data } = await dressesApi.get(`/users/wishlist/${userID}`);
    console.log(data);
    setWishlist(data);
    setLoading(false);
  };
  useEffect(() => {
    async function setting() {
      const userLogged = localStorage.getItem("userToken");
      if (userLogged) {
        setUserId(userLogged);
        fetchWishList(userLogged);
      }
    }
    setting();
  }, []);

  const removeFromWishlist = async (dress) => {
    await dressesApi.put(`/users/wishdel/${userId}`, dress);
    fetchWishList(userId);
  };

  const mapWishlist = () => {
    return (
      <div className="dresses" style={{ padding: "3%" }}>
        {wishlist.map((dress) => {
          return (
            <DressComponent
              isWishlist={true}
              dress={dress}
              key={dress._id}
              wishlistAction={removeFromWishlist}
            />
          );
        })}
      </div>
    );
  };
  return loading ? (
    <div className="loader"></div>
  ) : (
    <div
      className="wishlist"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h1
        style={{
          padding: "1%",
          fontFamily: "futura-pt",
          fontSize: "2rem",
          backgroundColor: "#ddd",
        }}
      >
        Saved Items
      </h1>
      {wishlist?.length && mapWishlist()}
    </div>
  );
};

export default Wishlist;

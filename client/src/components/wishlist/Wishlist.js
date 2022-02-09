import { React, useEffect, useState } from "react";
import dressesApi from "../../api/api";
import { BsHeartFill } from "react-icons/bs";
import DressComponent from "../DressComponent";
const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWishList = async (userID) => {
    setLoading(true);
    const { data } = await dressesApi.get(`/users/wishlist/${userID}`);
    //  console.log(data.wishlist);
    setWishlist(data);
    setLoading(false);
  };
  useEffect(() => {
    async function setting() {
      const userLogged = localStorage.getItem("userToken");
      if (userLogged) {
        setUserId(userLogged);

        fetchWishList(userLogged);
      } else {
      }
    }
    setting();
  }, []);
  // useEffect(() => {
  //   mapWishlist();
  // }, [wishlist]);
  const removeFromWishlist = async (dress) => {
    const newWish = await dressesApi.put(`/users/wishdel/${userId}`, dress);
    fetchWishList(userId);
  };

  const mapWishlist = () => {
    //displaying wishlist
    return (
      <div className="dresses" style={{ padding: "3%" }}>
        {wishlist.map((dress) => {
          dress.isWishListed = true;
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
      {wishlist && mapWishlist()}
    </div>
  );
};

export default Wishlist;

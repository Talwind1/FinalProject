import { React, useEffect, useState } from "react";
import dressesApi from "../../api/api";
import { BsHeartFill } from "react-icons/bs";
const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [userId, setUserId] = useState(null);
  //const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    async function setting() {
      const userLogged = localStorage.getItem("userToken");
      setUserId(userLogged);
      const wishlistUser = await dressesApi.get(
        `/users/getwishlist/${userLogged}`
      );
      const wishListItems = await wishlistUser.data;
      setWishlist(wishListItems);
    }
    setting();
  }, []);

  const mapWishlist = () => {
    //displaying wishlist
    return (
      <div className="dresses" style={{ padding: "3%" }}>
        {wishlist.map((dress) => {
          return (
            <div
              className="wish-dress"
              key={dress.id}
              style={{ position: "relative" }}
            >
              <div>
                {" "}
                <BsHeartFill
                  className="liked"
                  style={{ position: "absolute" }}
                />
              </div>
              <img
                src={dress.image}
                style={{ height: "30rem", width: "18rem", objectFit: "cover" }}
                alt=""
              />

              <p className="dress_description">
                Size {dress.size}, {dress.price}&#8362; {dress.location}
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div
      className="wishlist"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {wishlist && mapWishlist()}
    </div>
  );
};

export default Wishlist;

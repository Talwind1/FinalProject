import { React, useEffect, useState } from "react";
import dressesApi from "../../api/api";
import { BsHeartFill } from "react-icons/bs";
const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function setting() {
      setLoading(true);
      const userLogged = localStorage.getItem("userToken");
      setUserId(userLogged);

      const { data } = await dressesApi.get(`/users/${userLogged}`);
      //  console.log(data.wishlist);
      setWishlist(data.wishlist);
      setLoading(false);
    }
    setting();
  }, []);

  const removeFromWishlist = async (dress) => {
    const newWish = await dressesApi.put(`/users/wishdel${userId}`, dress);
  };

  const mapWishlist = () => {
    //displaying wishlist
    return (
      <div className="dresses" style={{ padding: "3%" }}>
        {wishlist.map((dress) => {
          return (
            <div
              className="wish-dress"
              key={dress._id}
              style={{ position: "relative" }}
            >
              <button>
                {" "}
                <BsHeartFill
                  className="liked"
                  style={{ position: "absolute" }}
                />
              </button>
              <img
                src={dress.url}
                style={{ height: "30rem", width: "18rem", objectFit: "cover" }}
                alt=""
              />
              <p
                className="dress_description"
                style={{ fontFamily: "futura", fontSize: "1.1em" }}
              >
                Size: {dress.size} {dress.price}&#8362; {dress.location}
              </p>
            </div>
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

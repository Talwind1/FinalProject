import { useState, useEffect } from "react";
import dressesApi from "../../api/api";
import DressItem from "./DressItem";
import Add from "../addDress/Add";
import { GiLargeDress } from "react-icons/gi";

function MyItems() {
  const [userId, setUserId] = useState("");
  const [myItems, setMyItems] = useState([]);
  const [show, setShow] = useState(false);
  const [showAdd, setAddShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetching = async (userID) => {
    try {
      setLoading(true);
      let { data } = await dressesApi.get(`/users/myitems/${userID}`);
      console.log(data);
      setMyItems(data);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function setting() {
      const userLogged = window.localStorage.getItem("userToken");
      if (userLogged) {
        setUserId(userLogged);
        fetching(userLogged);
      }
    }
    setting();
  }, []);

  const addComp = () => {
    setAddShow(!showAdd);
    setShow(false);
  };
  const showItems = () => {
    setShow(!show);
    setAddShow(false);
  };

  const createItem = async (item) => {
    try {
      const newDress = {
        size: item.size,
        location: item.location,
        price: item.price,
        color: item.color,
        url: item.url,
        owner: userId,
        phone: item.phone,
      };
      const { data } = await dressesApi.post("/dresses", newDress);
      await dressesApi.put(`/users/itemadd/${userId}`, data);
      const items = [...myItems, data];
      setMyItems(items);
    } catch (e) {
      console.table(e.message);
    }
  };

  const updateFunc = async (id, newItem) => {
    try {
      await dressesApi.patch(`/dresses/${id}`, newItem);
    } catch (e) {
      console.log(e.message);
    }
  };

  const deleteDress = async (dress) => {
    try {
      await dressesApi.delete(`/dresses/${dress._id}`);
      console.log(dress);
      const myNewItems = await dressesApi.put(
        `/users/itemDel/${userId}`,
        dress
      );
      setMyItems(myNewItems);
    } catch (e) {
      console.log(e.message);
    }
  };

  const mapItems = () => {
    return myItems.map((dress) => {
      console.log(show);
      return (
        //className="dress-item"
        <div key={dress._id} style={{ height: "500px" }}>
          <DressItem
            dress={dress}
            deleteFunc={deleteDress}
            updateFunc={updateFunc}
          />
        </div>
      );
    });
  };

  return loading ? (
    <div className="loader" />
  ) : (
    <div className="my-items">
      {" "}
      <h1
        style={{
          padding: "1%",
          fontFamily: "futura-pt",
          fontSize: "2rem",
          backgroundColor: "#ddd",
        }}
      >
        My Items
      </h1>
      <div className="buttons">
        <button onClick={addComp} className="btn">
          add a dress
        </button>
        <button onClick={showItems} className="btn">
          Show Items
        </button>
      </div>
      <div className="add-element">
        {" "}
        {showAdd && <Add clickFunc={createItem} userId={userId} />}
      </div>
      {show &&
        (myItems.length ? (
          <div className="dresses-container"> {mapItems()} </div>
        ) : (
          <a
            className="message"
            href="/my-items"
            style={{ textDecoration: "none" }}
          >
            Add your dress- Join the party <GiLargeDress />
          </a>
        ))}
    </div>
  );
}

export default MyItems;

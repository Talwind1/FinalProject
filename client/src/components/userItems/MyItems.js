import { useState, useEffect } from "react";
import dressesApi from "../../api/api";
import DressItem from "./DressItem";
import Add from "../addDress/Add";
import { BsHeart } from "react-icons/bs";
import { GiLargeDress } from "react-icons/gi";

function MyItems() {
  const [userId, setUserId] = useState("");
  const [myItems, setMyItems] = useState([]);
  const [show, setShow] = useState(false);
  const [showAdd, setAddShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userToken = window.localStorage.getItem("userToken");
    setUserId(userToken);
    async function setting() {
      try {
        setLoading(true);
        let { data } = await dressesApi.get(`/users/myitems/${userToken}`);
        setMyItems(data);
      } catch (e) {
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    }
    setting();
  }, []);

  const addComp = () => {
    setAddShow(!showAdd);
  };
  const showItems = () => {
    setShow(!show);
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
      await dressesApi.put(`/users/itemadd/${userId}`, data._id);
      const items = [...myItems, data];
      setMyItems(items);
    } catch (e) {
      console.log(e.message);
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
      return (
        <div className="dress-item" key={dress._id}>
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
      {show && (
        <div>
          {myItems.length ? (
            <div className="dresses-container"> {mapItems()} </div>
          ) : (
            <a className="message">
              Add your dress- Join the party <GiLargeDress />
            </a>
          )}{" "}
        </div>
      )}
    </div>
  );
}

export default MyItems;

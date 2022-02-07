import { useState, useEffect } from "react";
import dressesApi from "../../api/api";
import DressItem from "./DressItem";
import Add from "../addDress/Add";
import { GiPartyPopper } from "react-icons/gi";
import { BsHeart } from "react-icons/bs";
import { GiLargeDress } from "react-icons/gi";
function MyItems() {
  const [userId, setUserId] = useState("");
  const [myItems, setMyItems] = useState(null);
  const [show, setShow] = useState(false);
  const [showAdd, setAddShow] = useState(false);
  //  const [join, setJoin] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function setting() {
      setLoading(true);
      let userToken = window.localStorage.getItem("userToken");
      setUserId(userToken);
      let { data } = await dressesApi.get(`/users/${userToken}`);
      setMyItems(data.myItems);
      setLoading(false);
    }
    setting();
  }, []);

  const addComp = () => {
    setAddShow(!showAdd);
  };
  const showItems = () => {
    console.log("show my items");
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
      const { data } = await dressesApi.post("dresses", newDress);
      await dressesApi.put(`/users/itemadd/${userId}`, data.dress);
      const items = [...myItems, data.dress];
      setMyItems(items);
    } catch (e) {
      throw Error(e.message);
    }
  };

  const updateFunc = async (id, newItem) => {
    try {
      await dressesApi.patch(`/dresses/${id}`, newItem);
    } catch (e) {
      throw Error(e.message);
    }
  };

  const deleteDress = async (dress) => {
    console.log("tts");
    try {
      const deletedDress = await dressesApi.delete(`/dresses/${dress._id}`);
      console.log(dress);
      const myNewItems = await dressesApi.put(
        `/users/itemDel/${userId}`,
        dress
      );
      setMyItems(myNewItems);
    } catch (e) {
      throw Error(e.message);
    }
  };

  const mapItems = () => {
    if (myItems && myItems.length > 0) {
      return myItems.map((dress) => {
        //
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
    }
  };
  return loading ? (
    <div className="loader"></div>
  ) : (
    <div className="my-items">
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

      <div className="dresses-container">{show && mapItems()}</div>
      <div>
        {show && myItems.length < 1 && (
          <span
            style={{
              fontFamily: "futura",
              fontSize: "1.25em",
              padding: "3%,10%",
              margin: "10%",
              border: "1px dotted purple",
              backgroundColor: "#f0d9ff",
            }}
          >
            Join the party - add your dress <BsHeart />
            <GiLargeDress />
          </span>
        )}
      </div>
    </div>
  );
}

export default MyItems;

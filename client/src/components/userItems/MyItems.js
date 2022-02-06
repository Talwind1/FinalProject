import { useState, useEffect } from "react";
import dressesApi from "../../api/api";
import DressItem from "./DressItem";
import Add from "../addDress/Add";

// import User from "../../../../src/model/userModel";

function MyItems() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [myItems, setMyItems] = useState(null);
  const [show, setShow] = useState(false);
  const [showAdd, setAddShow] = useState(false);

  useEffect(() => {
    async function setting() {
      let userToken = window.localStorage.getItem("userToken");
      setUserId(userToken);
      let { data } = await dressesApi.get(`/users/${userToken}`);
      console.log(userToken);
      setUser(data);
      let result = await dressesApi.get(`/users/getmyitems/${userToken}`);
      setMyItems(result.data);
      console.log(result.data);
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
        image: item.image,
        owner: userId,
        url: item.url,
      };
      const { data } = await dressesApi.post("dresses", newDress);
      await dressesApi.put(`/users/itemadd/${userId}`, newDress);
      const items = [...myItems, newDress];
      setMyItems(items);
      console.log(myItems);
    } catch (e) {
      throw Error(e.message);
    }
  };

  const updateFunc = async (id, newItem) => {
    try {
      await dressesApi.patch(`/dresses/${id}`, newItem);
    } catch (e) {}
    console.log(newItem);
  };

  const deleteDress = async (id) => {
    try {
      await dressesApi.delete(`dresses/${id}`);
      const dress = await dressesApi.get(`/dresses/${id}`);
      await dressesApi.put(`/users/itemDel/:${userId}`, dress);
    } catch (e) {}
  };

  const mapItems = () => {
    return myItems.map((dress) => {
      return (
        <div key={dress.id} className="dress-item">
          <DressItem
            size={dress.size}
            color={dress.color}
            location={dress.location}
            price={dress.price}
            url={dress.url}
            id={dress.id}
            deleteFunc={() => deleteDress(dress.id)}
            updateFunc={updateFunc}
            dress={dress}
          />
        </div>
      );
    });
  };
  return (
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

      <div className="dresses-container">{show && myItems && mapItems()}</div>
    </div>
  );
}

export default MyItems;

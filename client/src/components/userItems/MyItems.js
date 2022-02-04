import { useState, useEffect } from "react";
import dressesApi from "../../api/api";
import DressItem from "./DressItem";
import Add from "../addDress/Add";

function MyItems({ items, outerFetch }) {
  const userId = window.localStorage.getItem("userToken");

  const [myItems, setMyItems] = useState(items);
  const [show, setShow] = useState(false);
  const [showAdd, setAddShow] = useState(false);

  useEffect(() => {
    if (items) {
      const arr = items.filter((dress) => {
        return dress.userId === userId;
      });
      console.log(arr);
      setMyItems(arr);
    }
  }, []);

  const addComp = () => {
    setAddShow(!showAdd);
  };
  const showItems = () => {
    setShow(!show);
  };

  const createItem = async (id, item) => {
    try {
      const newDress = {
        size: item.size,
        location: item.location,
        price: item.price,
        color: item.color,
        image: item.image,
        userId: userId,
      };
      const { data } = await dressesApi.post("dresses", newDress);
      const items = [...myItems, newDress];
      setMyItems(items);
      console.log(myItems);
    } catch {}
  };

  const updateFunc = async (id, newItem) => {
    console.log(id);
    console.log(newItem);
    try {
      const res = await dressesApi.put(`/dresses/${id}`, newItem);
      console.log(res);
      outerFetch();
    } catch (e) {}
    console.log(newItem);
  };

  const deleteDress = async (id) => {
    try {
      await dressesApi.delete(`dresses/${id}`);
      let items = myItems.filter((item) => {
        return item.id !== id;
      });
      setMyItems(items);
      outerFetch();
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
            image={dress.image}
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

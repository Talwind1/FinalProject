import { useState } from "react";
import Update from "../addDress/Update";

function DressItem({ dress, deleteFunc, updateFunc }) {
  const [show, setShow] = useState(false);
  const upComp = () => {
    setShow(!show);
  };

  return (
    <div className="dress-item">
      <img
        className="dress-pic"
        src={dress.url}
        alt="dress-pic"
        // style={{ height: "/0px", objectFit: "fill" }}
      />
      <h4>Size: {dress.size}</h4>
      <h4>Color: {dress.color}</h4>
      <h4>Price: {dress.price}</h4>
      <h4>Location:{dress.location}</h4>
      <button onClick={() => deleteFunc(dress)} className="btn">
        Delete
      </button>
      <button onClick={upComp} className="btn">
        Update
      </button>

      {show && (
        <Update
          id={dress._id}
          dress={dress}
          clickFunc={updateFunc}
          className="update-Element"
        />
      )}
    </div>
  );
}
export default DressItem;

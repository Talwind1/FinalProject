import { useState } from "react";
import Update from "../addDress/Update";

function DressItem({
  size,
  price,
  image,
  color,
  location,
  deleteFunc,
  id,
  dress,
  updateFunc,
}) {
  const [show, setShow] = useState(false);
  const upComp = () => {
    setShow(!show);
  };

  return (
    <div className="dress-item" style={{ width: "25%", height: "20%" }}>
      <>
        <img
          className="dress-pic"
          src={image}
          alt="dress-pic"
          style={{ width: "100%", height: "auto" }}
        />
        <h4>Size: {size}</h4>
        <h4>Color: {color}</h4>
        <h4>Price: {price}</h4>
        <h4>Location:{location}</h4>
      </>
      <button onClick={deleteFunc} className="btn">
        Delete
      </button>
      <button onClick={upComp} className="btn">
        Update
      </button>

      {show && (
        <Update
          id={id}
          dress={dress}
          clickFunc={updateFunc}
          className="update-Element"
        />
      )}
    </div>
  );
}
export default DressItem;

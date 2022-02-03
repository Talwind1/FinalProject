import { useState } from "react";
import Input from "./Input";
function Update({ id, dress, clickFunc, userId }) {
  const [item, setItem] = useState({
    size: dress.size,
    image: dress.image,
    color: dress.color,
    location: dress.location,
    price: dress.price,
    userId: userId,
  });

  const handleChange = (target) => {
    const { name, value } = target;
    let newItem = { ...item };
    newItem[name] = value;
    setItem(newItem);
    console.log(item);
  };

  return (
    <div className="update-element">
      <ul style={{ listStyle: "none" }}>
        <li>
          <Input
            type="size"
            value={item.size}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          <Input
            type="image"
            value={item.image}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          <Input
            type="price"
            value={item.price}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          <Input
            type="location"
            value={item.location}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          <Input
            type="color"
            value={item.color}
            handleChange={(e) => {
              handleChange(e.target);
            }}
          />
        </li>
      </ul>
      <button onClick={() => clickFunc(id, item)} className="btn">
        Submit
      </button>
    </div>
  );
}
export default Update;

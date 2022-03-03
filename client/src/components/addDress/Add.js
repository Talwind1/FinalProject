import { useState } from "react";
import Input from "./Input";
function Add({ clickFunc, userId }) {
  const [item, setItem] = useState({
    size: "",
    color: "",
    phone: "",
    location: "",
    price: "",
    usedId: userId,
    url: "",
    Picture: "",
  });

  const [msg, setMsg] = useState(false);
  const handleChange = (target) => {
    const { name, value } = target;
    let newItem = { ...item };
    newItem[name] = value;
    setItem(newItem);
    console.log(item);
  };

  return (
    <div>
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
            type="phone"
            value={item.phone}
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
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          <Input
            type="url"
            value={item.url}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          <input
            type="file"
            value={item.picture}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
      </ul>
      <button
        onClick={() => {
          clickFunc(item);
          setItem({
            size: "",
            image: "",
            color: "",
            location: "",
            price: "",
            url: "",
            phone: "",
            usedId: userId,
          });
          setMsg(true);
          setTimeout(() => {
            setMsg(false);
          }, 1500);
        }}
        className="btn"
      >
        Add
      </button>
      {msg && <div className="message stn">Item uploaded!</div>}
    </div>
  );
}
export default Add;

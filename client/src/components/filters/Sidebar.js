import { useState } from "react";
import Select from "./Select";
function Sidebar({ setConditions }) {
  const [values, setValues] = useState({
    location: "",
    color: "",
    size: "",
    price: "",
  });
  const handleSelect = (value, type) => {
    const newValues = { ...values };
    newValues[type] = value;
    setValues(newValues);
  };

  return (
    <div className="Sidebar">
      <Select
        type="size"
        options={["XXS", "XS", "S", "M", "L", "XL", "XXL"]}
        handleSelect={handleSelect}
      />
      <Select
        type="color"
        options={[
          "pink",
          "white",
          "black",
          "light blue",
          "blue",
          "orange",
          "silver",
          "purple",
          "gold",
          "green",
        ]}
        handleSelect={handleSelect}
      />
      <Select
        type="location"
        options={["Tel Aviv", "Haifa", "Holon", "Rishon"]}
        handleSelect={handleSelect}
      />
      <button
        onClick={() => {
          setConditions(values);
        }}
        className="btn"
      >
        Find me a dress
      </button>
    </div>
  );
}
export default Sidebar;

import { useEffect, useState } from "react";
import Select from "./Select";
function Sidebar({ setConditions, locations, colors }) {
  const [values, setValues] = useState({
    location: "",
    color: "",
    size: "",
    price: "",
  });

  useEffect(() => {
    console.log("values", values);
  }, [values]);

  const handleSelect = (value, type) => {
    const newValues = { ...values };
    newValues[type] = value;
    if (value === "All") {
      newValues[type] = null;
    }
    setValues(newValues);
  };

  return (
    <div className="Sidebar">
      <Select
        type="size"
        options={["XXS", "XS", "S", "M", "L", "XL", "XXL"]}
        handleSelect={handleSelect}
      />
      <Select type="color" options={colors} handleSelect={handleSelect} />
      <Select type="location" options={locations} handleSelect={handleSelect} />
      <button
        onClick={() => {
          setConditions(values);
        }}
        className="btn"
      >
        Find a dress
      </button>
    </div>
  );
}
export default Sidebar;
//[
//   "pink",
//   "white",
//   "black",
//   "light blue",
//   "blue",
//   "orange",
//   "silver",
//   "purple",
//   "gold",
//   "green",
// ]

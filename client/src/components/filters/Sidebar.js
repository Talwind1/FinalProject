import { useEffect, useState } from "react";
import Select from "./Select";
function Sidebar({ setConditions, locations, colors }) {
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
    console.log("values", values);
  };

  // useEffect(() => {
  //   console.log("colors", colors, "locations", locations);
  // });
  // const cities = (dresses) => {
  //   let cities = [];
  //   dresses.forEach((dress) => {
  //     if (!cities.includes(dress.location.toLowerCase())) {
  //       cities.push(rewrite(dress.location));
  //     }
  //     return cities;
  //   });
  // };

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

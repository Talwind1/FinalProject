import { useState, useEffect } from "react";
import dressesApi from "../../api/api";
import Filter from "../filters/Filter";
import Sidebar from "../filters/Sidebar";

function Dresses() {
  const [conditions, setConditions] = useState({
    location: null,
    size: null,
    color: null,
    price: null,
  });
  const [dresses, setDresses] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [locations, setLocations] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    let cities = [];
    let color = [];
    const userLogged = localStorage.getItem("userToken");
    setUserId(userLogged);
    setLoading(true);
    const fetching = async () => {
      setLoading(true);
      try {
        const { data } = await dressesApi.get("/dresses"); //api call get dresses
        setDresses(data);
        data.forEach((dress) => {
          if (!cities.includes(dress.location)) {
            cities.push(capitalize(dress.location));
          }
          if (!color.includes(dress.color)) {
            color.push(capitalize(dress.color));
          }
        });
        setLocations(cities);
        setColors(color);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetching();
  }, []);

  useEffect(() => {
    //*
    console.log(conditions);
  }, [conditions]);
  const filterDresses = (values) => {
    setConditions(values);
    console.log("conditions", conditions);
  };

  const capitalize = (location) => {
    let splited = location.split(" ");
    let name = "";
    splited.forEach(
      (word) =>
        (name =
          name + " " + word[0].toUpperCase() + word.toLowerCase().substring(1))
    );
    return name;
  };
  //creacte state of conditions to filter props
  const display = (userId) => {
    return (
      dresses && (
        <Filter dresses={dresses} conditions={conditions} userId={userId} />
      )
    );
  };

  return loading ? (
    <div className="loader" />
  ) : (
    <div>
      {" "}
      <h1
        style={{
          padding: "1%",
          fontFamily: "futura-pt",
          fontSize: "2rem",
          backgroundColor: "#ddd",
        }}
      >
        Dresses
      </h1>
      <Sidebar
        setConditions={filterDresses}
        locations={locations}
        colors={colors}
      />
      {dresses && display(userId)}
    </div>
  );
}

export default Dresses;

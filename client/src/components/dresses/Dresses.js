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
    const userLogged = localStorage.getItem("userToken");
    setUserId(userLogged);
    setLoading(true);
    const fetching = async () => {
      setLoading(true);
      try {
        const { data } = await dressesApi.get("/dresses"); //api call get dresses
        setDresses(data);
        let cities = [];
        let color = [];
        data.forEach((dress) => {
          if (!cities.includes(dress.location)) {
            cities.push(rewrite(dress.location));
          }
          if (!color.includes(dress.color)) {
            color.push(dress.color);
          }
        });
        setLocations(cities);
        setColors(color);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };
    fetching();
  }, []);

  const filterDresses = (values) => {
    setConditions(values);
  };
  const rewrite = (location) => {
    let splited = location.split(" ");
    splited.forEach(
      (word) => (word = word[0].toUpperCase() + word.toLowerCase().subString(1))
    );
    return splited.join(" ");
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

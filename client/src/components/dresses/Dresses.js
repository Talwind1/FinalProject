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

  useEffect(() => {
    //first time -all the dresses apear.
    setLoading(true);
    const fetching = async () => {
      try {
        setLoading(true);
        const { data } = await dressesApi.get("/dresses"); //api call get dresses
        setDresses(data);
        const userLogged = localStorage.getItem("userToken");
        setUserId(userLogged);
        setLoading(false);
      } catch (e) {}
    };
    fetching();
  }, []);

  const filterDresses = (values) => {
    setConditions(values);
  };

  //creacte state of conditions to filter props
  const display = () => {
    return <Filter dresses={dresses} conditions={conditions} userId={userId} />;
  };

  return (
    <div>
      <Sidebar setConditions={filterDresses} />
      {dresses ? display() : <h2>Loading...</h2>}
    </div>
  );
}
export default Dresses;

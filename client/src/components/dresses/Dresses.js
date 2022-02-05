import { useState, useEffect } from "react";
import dressesApi from "../../api/api";
import Filter from "../filters/Filter";
import Sidebar from "../filters/Sidebar";

function Dresses({ addToWishlist, outerFetch }) {
  const [conditions, setConditions] = useState({
    location: null,
    size: null,
    color: null,
    price: null,
  });
  const [dresses, setDresses] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //first time -all the dresses apear.
    setLoading(true);
    const fetching = async () => {
      try {
        const { data } = await dressesApi.get("/dresses"); //api call get dresses
        setLoading(false);
        setDresses(data);
      } catch (e) {
        throw new e.messege();
      }
    };
    fetching();
  }, []);

  const filterDresses = (vals) => {
    //we want  to filter the dresses by cons.
    const { data } = await dressesApi.get(
      `/dresses?size=${conditions.size}&color=${conditions.color}&location=${conditions.location}&price<${conditions.price}`
    ); //api call get dresses

    setDresses(data);
    setConditions(vals);
  };

  //creacte state of conditions to filter props
  const display = () => {
    return (
      <Filter
        dresses={dresses}
        conditions={conditions}
        addToWishlist={addToWishlist}
        outerFetch={outerFetch}
      />
    );
  };

  return (
    <div>
      <Sidebar setCons={filterDresses} />

      {dresses && display()}
      {loading && <h2>Loading...</h2>}
    </div>
  );
}
export default Dresses;

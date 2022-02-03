import { useState, useEffect } from "react";
import dressesApi from "../api.js";
import Filter from "./Filter.js";
import Sidebar from "./Sidebar.js";

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
    setLoading(true);
    const fetching = async () => {
      try {
        const { data } = await dressesApi.get("dresses");
        // console.log(googleAuth.userId);
        setLoading(false);
        setDresses(data);
        outerFetch();
      } catch (e) {
        throw new e.messege();
      }
    };
    fetching();
  }, [outerFetch]);

  const newCons = (vals) => {
    setConditions(vals);
    console.log("conditions is", vals);
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
      <Sidebar setCons={newCons} />

      {dresses && display()}
      {loading && <h2>Loading...</h2>}
    </div>
  );
}
export default Dresses;

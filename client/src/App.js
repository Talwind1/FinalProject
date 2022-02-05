import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dresses from "../src/components/dresses/Dresses";
import Header from "../src/components/navbar/Header";
import MyItems from "../src/components/userItems/MyItems";
import Home from "../src/components/home/Home";
import Wishlist from "../src/components/wishlist/Wishlist";
import { useState, useEffect, useCallback } from "react";
import dressesApi from "../src/api/api";
import Dress from "../src/components/dresses/Dress";

function App() {
  const [loading, setLoading] = useState(false);
  const [dresses, setDresses] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  return (
    <div className="App">
      {loading && <h3>Loading...</h3>}
      <Router>
        <Header />
        <Switch>
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dresses">
              {/* {dresses && ( */}
              <Dresses
              //    addToWishlist={addToWishlist}
              //  outerFetch={outerFetch}
              />
              {/* )} */}
            </Route>
            <Route path="/my-items">
              <MyItems
              //items={dresses} outerFetch={outerFetch}
              />
            </Route>
            <Route path="/dress/:id" exact component={Dress} />
            <Route path="/wishlist">
              <Wishlist
              //   wishlist={wishlist}
              />
            </Route>
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

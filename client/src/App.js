import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dresses from "./components/Dresses";
import Header from "./components/Header";
import MyItems from "./components/MyItems";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import { useState, useEffect, useCallback } from "react";
import dressesApi from "./api";
import Dress from "./components/Dress";
import { currentUser } from "react-google-login";

function App() {
  const [loading, setLoading] = useState(false);
  const [dresses, setDresses] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState();

  // export const ThemeContext=React.createContext(){//provider/value

  // }

  useEffect(() => {
    //get dresses data
    setLoading(true);
    const fetching = async () => {
      try {
        const { data } = await dressesApi.get("dresses");
        setLoading(false);
        setDresses(data);
      } catch (e) {
        throw e.messege;
      }
    };
    fetching();
  }, []);
  const outerFetch = useCallback(async () => {
    //function for rendering the props
    console.log("its happen!");
    try {
      const { data } = await dressesApi.get("dresses");
      setLoading(false);

      setDresses(data);
    } catch (e) {
      throw e.messege;
    }
  }, []);

  const addToWishlist = async (dress) => {
    setLoading(true);
    try {
      if (!wishlist.find((el) => el.id === dress.id)) {
        const { data } = await dressesApi.post("/wishlist", dress);
        setLoading(false);
        let copy = [...wishlist];
        copy.push(data);
        console.log(copy);
        setWishlist(copy);
      }
    } catch (e) {
      throw console.error(e.messege);
    }
  };

  const whoIsIn = (user) => {
    console.log(currentUser);
    setUserLoggedIn(user);
  };

  return (
    <div className="App">
      {loading && <h3>Loading...</h3>}
      <Router>
        <Header whoIsIn={(user) => this.whoIsIn} />
        <Switch>
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dresses">
              {dresses && (
                <Dresses
                  addToWishlist={addToWishlist}
                  outerFetch={outerFetch}
                />
              )}
            </Route>
            <Route path="/my-items">
              <MyItems
                items={dresses}
                outerFetch={outerFetch}
                userId={userLoggedIn}
              />
            </Route>
            <Route path="/dress/:id" exact component={Dress} />
            <Route path="/wishlist">
              <Wishlist wishlist={wishlist} />
            </Route>
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
